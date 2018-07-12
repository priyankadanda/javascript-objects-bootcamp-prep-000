var playlist = {
  artist1: "song"
  };
 
  function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({playlist}, {[artistName]:songTitle})
  return playlist
}

function removeFromPlaylist(objectx, artistName) {
  
  delete objectx.artistName;
  return objectx
}