// var playlist = {
//   'Slowdive': 'Alison', 
//   'My Bloody Valentine': 'Sometimes', 
//   'Phil Ochs': "Here's to the State of Mississippi"
// }

var playlist = {
  'Mylo': "Otto Journey"
  }
  
  
playlist['sdgfartist'] = 'song'

  
console.log(playlist)  


// function updatePlaylist(playlist, artist, song) {
//   playlist = Object.assign({}, playlist, { [artist]: song } )
// }

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

console.log(playlist, 'Beck', 'Paper Tiger')


function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
}


