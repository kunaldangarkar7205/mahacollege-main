// MahaCollege 2.0 - Supabase configuration
// Replace the two placeholder values with your Supabase project values.
// Supabase Dashboard -> Project Settings -> API
const SUPABASE_URL = 'https://jujaeehgznqnwokxjpgk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp1amFlZWhnem5xbndva3hqcGdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzMjYwMjIsImV4cCI6MjEwNTkwMjAyMn0.PWaCArwL7LL9f_AT3hx3P-ErGCZhG3ed2hHBNhff3r0';

window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
