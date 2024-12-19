// JavaScript
const video = document.getElementById("myVideo");
const audioButton = document.getElementById("audioButton");

// Toggle mute/unmute on button click
audioButton.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    audioButton.innerHTML = '<i style="color: white;" class="fa-solid fa-volume-up"></i>'; // Unmuted icon
  } else {
    video.muted = true;
    audioButton.innerHTML = '<i style="color: white;" class="fa-solid fa-volume-xmark"></i>'; // Muted icon
  }
});
