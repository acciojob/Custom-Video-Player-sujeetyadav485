/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Get the video player and all the necessary controls
// const player = document.querySelector('.player');
// const video = player.querySelector('.viewer');
// const progress = player.querySelector('.progress');
// const progressBar = player.querySelector('.progress__filled');
// const toggle = player.querySelector('.toggle');
const volume = player.querySelector('input[name="volume"]');
const playbackRate = player.querySelector('input[name="playbackRate"]');
// const skipButtons = player.querySelectorAll('[data-skip]');

// Function to toggle the play/pause button
function togglePlay() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// Function to update the progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

// Function to set the volume of the video
function handleVolume() {
  video.volume = this.value;
}

// Function to set the playback speed of the video
function handlePlaybackRate() {
  video.playbackRate = this.value;
}

// Function to skip forward or backward
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Event listeners for the video player and controls
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', togglePlay);
video.addEventListener('pause', togglePlay);
video.addEventListener('timeupdate', handleProgress);
volume.addEventListener('input', handleVolume);
playbackRate.addEventListener('input', handlePlaybackRate);
skipButtons.forEach(button => button.addEventListener('click', skip));