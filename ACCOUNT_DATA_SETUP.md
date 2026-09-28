# Favorites and Prediction History setup

The dashboard error **"Unable to load favorites/history"** means Supabase does not currently expose the required tables/policies to the logged-in browser session.

1. Open Supabase Dashboard for the project configured in `supabase-config.js`.
2. Open **SQL Editor**.
3. Open/copy `supabase/fix-account-data.sql`.
4. Run the complete script.
5. Confirm the final query shows:
   - `favorite_colleges`
   - `prediction_history`
6. Log out of MahaCollege and log in again.
7. Save a college and run a prediction.
8. Open **My Account**.

Each record is tied to `auth.uid()`, so different login email accounts get separate favorites and history.

If Supabase still reports an error, the dashboard now displays the actual database error instead of only saying that the tables/policies need checking.
