// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const textarea = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const faceImg = document.querySelector("#explore img");
  const talkButton = document.querySelector("#explore button");

  // Populate the voice dropdown
  function loadVoices() {
    // avoid doubling up if voiceschanged fires more than once
    voiceSelect.innerHTML =
      '<option value="select" disabled selected>Select Voice:</option>';

    const voices = speechSynthesis.getVoices();
    voices.forEach((v) => {
      const opt = document.createElement("option");
      opt.value = v.name;
      opt.textContent = `${v.name} (${v.lang})`;
      voiceSelect.appendChild(opt);
    });
  }
  loadVoices();
  speechSynthesis.addEventListener("voiceschanged", loadVoices);

  talkButton.addEventListener("click", () => {
    if (!textarea.value.trim()) return;

    const utter = new SpeechSynthesisUtterance(textarea.value);
    // pick the selected voice by name
    const selected = voiceSelect.value;
    utter.voice =
      speechSynthesis.getVoices().find((v) => v.name === selected) || null;

    // swap to open‑mouth face while speaking
    faceImg.src = "assets/images/smiling-open.png";
    utter.addEventListener("end", () => {
      faceImg.src = "assets/images/smiling.png";
    });

    speechSynthesis.speak(utter);
  });
}
