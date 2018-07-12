var playlist = {
  artist1: "song"
  };
 
  function updatePlaylist(objectx, artistName, songTitle) {
  Object.assign({objectx}, {[artistName]:songTitle})
  return objectx
}

function removeFromPlaylist(objectx, artistName) {
  
  delete objectx.artistName;
  return objectx
}