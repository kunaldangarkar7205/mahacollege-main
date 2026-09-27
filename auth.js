// MahaCollege 2.0 - Supabase authentication

function showMessage(message, type = 'error') {
    const box = document.getElementById('message');
    if (!box) return;
    box.textContent = message;
    box.className = `auth-message ${type}`;
}

function redirectTarget() {
    const params = new URLSearchParams(window.location.search);
    const target = params.get('redirect');
    // Only allow local HTML paths. Never redirect to an external URL.
    if (target && /^[a-zA-Z0-9_./-]+\.html(?:\?.*)?$/.test(target)) return target;
    return 'index.html';
}

async function requireLogin() {
    if (!window.supabaseClient) return;

    const { data, error } = await window.supabaseClient.auth.getSession();
    if (error || !data.session) {
        const current = window.location.pathname.split('/').pop() || 'index.html';
        if (current !== 'login.html' && current !== 'signup.html') {
            window.location.replace(`login.html?redirect=${encodeURIComponent(current)}`);
        }
        return;
    }
}

async function createProfileIfMissing(user) {
    if (!user) return;
    try {
        const name = user.user_metadata?.full_name || 'Student';
        await window.supabaseClient.from('profiles').upsert({
            id: user.id,
            full_name: name,
            email: user.email || '',
            role: user.user_metadata?.role || 'student'
        }, { onConflict: 'id', ignoreDuplicates: true });
    } catch (e) {
        console.warn('Profile creation skipped:', e);
    }
}

async function signupUser(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        showMessage('Passwords do not match.');
        return;
    }
    if (password.length < 6) {
        showMessage('Password must contain at least 6 characters.');
        return;
    }

    const button = document.getElementById('signupButton');
    button.disabled = true;
    button.textContent = 'Creating account...';

    const { data, error } = await window.supabaseClient.auth.signUp({
        email,
        password,
        options: { data: { full_name: name, role: 'student' } }
    });

    if (error) {
        showMessage(error.message);
        button.disabled = false;
        button.textContent = 'Create Account';
        return;
    }

    if (data.session && data.user) {
        await createProfileIfMissing(data.user);
        showMessage('Account created successfully. Redirecting...', 'success');
        setTimeout(() => window.location.href = redirectTarget(), 500);
    } else {
        showMessage('Account created. Check your email to confirm your account, then log in.', 'success');
        button.disabled = false;
        button.textContent = 'Create Account';
    }
}

async function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const button = document.getElementById('loginButton');

    button.disabled = true;
    button.textContent = 'Logging in...';

    const { data, error } = await window.supabaseClient.auth.signInWithPassword({ email, password });

    if (error) {
        showMessage(error.message);
        button.disabled = false;
        button.textContent = 'Login';
        return;
    }

    await createProfileIfMissing(data.user);
    showMessage('Login successful. Redirecting...', 'success');
    setTimeout(() => window.location.href = redirectTarget(), 300);
}

async function logoutUser() {
    const { error } = await window.supabaseClient.auth.signOut();
    if (error) {
        console.error(error);
        return;
    }
    window.location.href = 'login.html';
}

async function updateAuthUI() {
    if (!window.supabaseClient) return;
    const { data: { user } } = await window.supabaseClient.auth.getUser();
    const loginLinks = document.querySelectorAll('.login-btn');

    loginLinks.forEach(link => {
        if (user) {
            link.textContent = 'Logout';
            link.href = '#';
            link.onclick = async (event) => {
                event.preventDefault();
                await logoutUser();
            };
        } else {
            link.textContent = 'Login';
            link.href = 'login.html';
            link.onclick = null;
        }
    });
}

// Login is required for every page except login.html and signup.html.
document.addEventListener('DOMContentLoaded', async () => {
    const page = window.location.pathname.split('/').pop().toLowerCase();
    if (page !== 'login.html' && page !== 'signup.html') {
        await requireLogin();
    }
    await updateAuthUI();
});

window.signupUser = signupUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;
