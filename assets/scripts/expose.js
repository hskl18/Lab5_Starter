// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const audio = document.querySelector("audio");
  const volumeSlider = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("#expose button");

  const jsConfetti = new JSConfetti();

  // pick a horn, update image & audio.src
  hornSelect.addEventListener("change", (e) => {
    const choice = e.target.value;
    hornImage.src = `assets/images/${choice}.svg`;
    hornImage.alt = choice.replace("-", " ");
    audio.src = `assets/audio/${choice}.mp3`;
  });

  // slide volume, swap icon + set audio.volume
  volumeSlider.addEventListener("input", (e) => {
    const vol = Number(e.target.value);
    let level;
    if (vol === 0) level = 0;
    else if (vol < 33) level = 1;
    else if (vol < 67) level = 2;
    else level = 3;

    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
    audio.volume = vol / 100;
  });

  // on play, actually play audio and confetti if it's the party  horn
  playButton.addEventListener("click", () => {
    if (!audio.src) return; // nothing selected
    audio.play();
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}
