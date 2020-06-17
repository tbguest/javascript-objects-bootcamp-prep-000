// var playlist = {
//   'Slowdive': 'Alison', 
//   'My Bloody Valentine': 'Sometimes', 
//   'Phil Ochs': "Here's to the State of Mississippi"
// }

var playlist = {
  'Mylo': "Otto's Journey"
  }
  
console.log(playlist)  


// function updatePlaylist(playlist, artist, song) {
//   playlist = Object.assign({}, playlist, { [artist]: song } )
// }

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist
}

console.log(delete playlist['Mylo'])
console.log(removeFromPlaylist(playlist, 'Mylo'))



