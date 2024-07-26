function applyChanges(pitch, speed) {
  const video = document.querySelector('video');
  if (video) {
    video.playbackRate = speed;
    video.preservesPitch = false;
    video.playbackRate = pitch;
  }
}
