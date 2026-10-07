-- Guestbook for sc.is-a.dev. Run once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
--
-- Anyone can LEAVE a note, but nothing shows on the wall until you approve it:
-- open Table Editor -> guestbook and tick "approved" on the notes you want to show (or delete the rest).

create table if not exists public.guestbook (
    id         uuid primary key default gen_random_uuid(),
    name       text check (name is null or char_length(name) <= 24),
    note       text not null check (char_length(note) between 2 and 280 and note !~* '(https?://|www\.)'),
    mood       text check (mood is null or mood in ('loved', 'cozy', 'wow', 'fun', 'inspired', 'thanks')),
    sticker    text check (sticker is null or sticker in ('gojo', 'eva', 'granny', 'cat', 'confused', 'teary', 'hair')),
    approved   boolean not null default false,
    created_at timestamptz not null default now()
);

alter table public.guestbook enable row level security;

-- visitors can read only the notes you've approved
create policy "read approved notes" on public.guestbook
    for select to anon using (approved);

-- visitors can add a note, but never one that's already approved
create policy "leave a note" on public.guestbook
    for insert to anon with check (approved = false);

grant select, insert on public.guestbook to anon;
