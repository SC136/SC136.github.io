-- "today, so far" on sc.is-a.dev: what the "now guess" under the avatar said, one row each time it changed.
-- The log-activity edge function writes the rows (with the service key, so there is no insert policy on purpose);
-- visitors can only read, and it's the same thing the page already shows live.

create table if not exists public.activity_log (
    id     bigint generated always as identity primary key,
    at     timestamptz not null default now(),
    kind   text not null check (kind in ('coding', 'browsing', 'working', 'watching', 'playing', 'music', 'pushing', 'busy', 'online', 'away', 'asleep', 'offline')),
    icon   text not null,
    text   text not null,
    detail text,
    key    text not null
);

create index if not exists activity_log_at_idx on public.activity_log (at desc);

alter table public.activity_log enable row level security;

create policy "read the log" on public.activity_log
    for select to anon using (true);

grant select on public.activity_log to anon;

-- Every 15 minutes pg_cron calls the function. The secret is the same one set with `supabase secrets set LOG_SECRET=...`.
-- Run this part once by hand with the real secret in place of <LOG_SECRET>; never commit it.
--
-- create extension if not exists pg_cron;
-- create extension if not exists pg_net;
-- select cron.schedule('log-activity', '*/15 * * * *', $$
--     select net.http_post(
--         url := 'https://vixnfmutdbaprqflgzpr.supabase.co/functions/v1/log-activity',
--         headers := jsonb_build_object('Content-Type', 'application/json', 'x-log-secret', '<LOG_SECRET>'),
--         body := '{}'::jsonb
--     );
-- $$);
