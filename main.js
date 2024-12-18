const video = document.getElementById("myVideo");
const audioButton = document.getElementById("audioButton");

// Toggle mute/unmute on button click
audioButton.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    audioButton.textContent = 'h';
  } else {
    video.muted = true;
    audioButton.textContent = "Unmute Audio";
  }
});