-- Lets ONE person (you) see every guestbook note and approve or delete them from sc.is-a.dev/admin.
-- Run once in the Supabase dashboard (SQL Editor -> New query), AFTER guestbook.sql.
--
-- Before running: replace YOUR_EMAIL_HERE below (two places) with the email of the account you'll sign in with.
-- That account has to exist first: Authentication -> Users -> Add user -> Create new user (tick "Auto Confirm User").
-- Then also switch OFF "Allow new users to sign up" (Authentication -> Sign In / Providers), so nobody else can make an account.
--
-- Visitors are unchanged: they can still only read approved notes and leave new, unapproved ones.

drop policy if exists "owner reads every note" on public.guestbook;
drop policy if exists "owner approves notes" on public.guestbook;
drop policy if exists "owner deletes notes" on public.guestbook;

create policy "owner reads every note" on public.guestbook
    for select to authenticated
    using ((auth.jwt() ->> 'email') = 'YOUR_EMAIL_HERE');

create policy "owner approves notes" on public.guestbook
    for update to authenticated
    using ((auth.jwt() ->> 'email') = 'YOUR_EMAIL_HERE')
    with check ((auth.jwt() ->> 'email') = 'YOUR_EMAIL_HERE');

create policy "owner deletes notes" on public.guestbook
    for delete to authenticated
    using ((auth.jwt() ->> 'email') = 'YOUR_EMAIL_HERE');

grant select, update, delete on public.guestbook to authenticated;
