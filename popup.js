document.addEventListener('DOMContentLoaded', () => {
  const pitchSlider = document.getElementById('pitch');
  const speedSlider = document.getElementById('speed');
  const applyButton = document.getElementById('apply');
  const pitchValue = document.getElementById('pitchValue');
  const speedValue = document.getElementById('speedValue');

  pitchSlider.addEventListener('input', () => {
    pitchValue.textContent = pitchSlider.value;
  });

  speedSlider.addEventListener('input', () => {
    speedValue.textContent = speedSlider.value;
  });

  applyButton.addEventListener('click', () => {
    const pitch = parseFloat(pitchSlider.value);
    const speed = parseFloat(speedSlider.value);

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: applyChanges,
        args: [pitch, speed]
      });
    });
  });

  function applyChanges(pitch, speed) {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = speed;
      video.preservesPitch = false;
      video.playbackRate = pitch;
    }
  }
});
