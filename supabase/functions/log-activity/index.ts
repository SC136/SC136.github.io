// log-activity: pg_cron calls this every 15 minutes. It works out what the "now guess" on sc.is-a.dev would say
// (same sources and the same order as guessNow() in index.html) and adds a row to activity_log when it changed.
// Deploy: supabase functions deploy log-activity --no-verify-jwt   (it checks its own secret instead of a JWT)
//         supabase secrets set LOG_SECRET=<a long random string>

const DISCORD_ID = '594504468931018752'
const LASTFM = 'https://ws.audioscrobbler.com/2.0/?api_key=205fde5ac384cbeb38a3d285ccecd477&format=json&user=SC-136&method=user.getrecenttracks&limit=1'
const EDITORS = /visual studio code|^code$|vscodium|cursor|zed|intellij|pycharm|webstorm|clion|android studio|neovim|vim|sublime|arduino|antigravity|xcode/i
const ANIME_SITES = /animepahe|hianime|aniwatch|crunchyroll|9anime|gogoanime|zoro\.to/i
const KEEP_DAYS = 30

type Guess = { kind: string; icon: string; text: string; detail: string | null; key: string }

async function getJSON(url: string, headers: Record<string, string> = {}) {
  const r = await fetch(url, { headers })
  if (!r.ok) throw new Error(url + ' ' + r.status)
  return r.json()
}

async function guess(): Promise<Guess> {
  const [lanyard, lastfm, events] = await Promise.all([
    getJSON('https://api.lanyard.rest/v1/users/' + DISCORD_ID).catch(() => null),
    getJSON(LASTFM).catch(() => null),
    getJSON('https://api.github.com/users/SC136/events?per_page=10', { 'User-Agent': 'sc.is-a.dev log-activity' }).catch(() => null),
  ])
  const p = lanyard && lanyard.success ? lanyard.data : null
  const acts: any[] = (p && p.activities) || []
  const game = acts.find((x) => x.type !== 4 && x.type !== 2)
  const spotify = p && p.listening_to_spotify && p.spotify
  const track = lastfm && lastfm.recenttracks && lastfm.recenttracks.track && lastfm.recenttracks.track[0]
  const lfmPlaying = track && track['@attr'] && track['@attr'].nowplaying === 'true'
  const song = lfmPlaying
    ? { name: track.name as string, artist: (track.artist['#text'] || track.artist.name) as string }
    : spotify ? { name: spotify.song as string, artist: String(spotify.artist).split(';')[0].trim() } : null
  const status = p ? p.discord_status : 'offline'
  const hour = new Date(Date.now() + 5.5 * 3600000).getUTCHours() // IST

  if (game && EDITORS.test(game.name)) {
    const ws = /workspace:\s*(.+)/i.exec(game.state || '')
    const w = ws ? ws[1].trim() : null
    return { kind: 'coding', icon: 'code', text: 'coding' + (w ? ' on ' + w : ''), detail: game.name, key: 'coding:' + (w || '') }
  }
  if (game && /github/i.test(game.name)) return { kind: 'browsing', icon: 'travel_explore', text: 'looking around github', detail: null, key: 'browsing' }
  if (game && /notion|obsidian|figma|photoshop|illustrator|blender|fusion|kicad|premiere|davinci|after effects|word|excel|powerpoint/i.test(game.name)) {
    return { kind: 'working', icon: 'edit_note', text: 'working in ' + game.name, detail: null, key: 'working:' + game.name }
  }
  // sites Discord reports as "playing": an anime site is watching, the tracker is browsing
  if (game && ANIME_SITES.test(game.name)) return { kind: 'watching', icon: 'live_tv', text: 'watching ' + game.name, detail: null, key: 'watching:' + game.name }
  if (game && /anilist/i.test(game.name)) return { kind: 'browsing', icon: 'travel_explore', text: 'browsing ' + String(game.name).toLowerCase(), detail: null, key: 'browsing:anilist' }
  if (game && game.type === 3) {
    const what = game.details || game.name
    return { kind: 'watching', icon: 'live_tv', text: 'watching ' + what, detail: null, key: 'watching:' + what }
  }
  if (game) return { kind: 'playing', icon: 'sports_esports', text: 'playing ' + game.name, detail: null, key: 'playing:' + game.name }
  if (song) return { kind: 'music', icon: 'headphones', text: 'listening to ' + song.name, detail: song.artist, key: 'music' }
  const push = Array.isArray(events) && events.find((e: any) => e.type === 'PushEvent')
  if (push && Date.now() - +new Date(push.created_at) < 45 * 60000) {
    const repo = String(push.repo.name).split('/').pop()
    return { kind: 'pushing', icon: 'commit', text: 'pushed some code to ' + repo, detail: null, key: 'pushing:' + repo }
  }
  if (status === 'dnd') return { kind: 'busy', icon: 'do_not_disturb_on', text: 'heads down, do not disturb', detail: null, key: 'busy' }
  if (status === 'online') return { kind: 'online', icon: 'waving_hand', text: 'around, say hi on discord', detail: null, key: 'online' }
  if (status === 'idle') return { kind: 'away', icon: 'coffee', text: 'away from the keyboard for a bit', detail: null, key: 'away' }
  if (hour >= 1 && hour < 8) return { kind: 'asleep', icon: 'bedtime', text: 'probably asleep', detail: null, key: 'asleep' }
  return { kind: 'offline', icon: 'power_settings_new', text: 'offline', detail: null, key: 'offline' }
}

Deno.serve(async (req) => {
  const secret = Deno.env.get('LOG_SECRET')
  if (!secret || req.headers.get('x-log-secret') !== secret) return new Response('no', { status: 401 })

  const url = Deno.env.get('SUPABASE_URL')! + '/rest/v1/activity_log'
  const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const h = { apikey: key, Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' }

  const g = await guess()
  const last = await getJSON(url + '?select=key&order=at.desc&limit=1', h)
  const changed = !last.length || last[0].key !== g.key
  if (changed) {
    const r = await fetch(url, { method: 'POST', headers: { ...h, Prefer: 'return=minimal' }, body: JSON.stringify(g) })
    if (!r.ok) return new Response('insert failed: ' + (await r.text()), { status: 500 })
  }
  // keep the table small
  await fetch(url + '?at=lt.' + new Date(Date.now() - KEEP_DAYS * 86400000).toISOString(), { method: 'DELETE', headers: h })

  return Response.json({ logged: changed, guess: g })
})
