const SpotifyConstants = {
  TOKEN_ENDPOINT: `https://accounts.spotify.com/api/token`,
  NOW_PLAYING_ENDPOINT: `https://api.spotify.com/v1/me/player/currently-playing`,
  TOP_TRACKS_ENDPOINT: `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`,
  TOP_ARTISTS_ENDPOINT: `https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=3`,
}

export default SpotifyConstants
