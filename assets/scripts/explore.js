// explore.js
 window.addEventListener("DOMContentLoaded", init);

 function init() {
   const textarea    = document.getElementById("text-to-speak");
   const voiceSelect = document.getElementById("voice-select");
   const faceImg     = document.querySelector("#explore img");
   const talkButton  = document.querySelector("#explore button");

   talkButton.disabled = true;
   function loadVoices() {
     voiceSelect.innerHTML =
       '<option value="select" disabled selected>Select Voice:</option>';
     speechSynthesis.getVoices().forEach((v) => {
       const opt = document.createElement("option");
       opt.value       = v.name;
       opt.textContent = `${v.name} (${v.lang})`;
       voiceSelect.appendChild(opt);
     });
   }
   loadVoices();
   speechSynthesis.addEventListener("voiceschanged", loadVoices);

   voiceSelect.addEventListener("change", () => {
     if (voiceSelect.value !== "select") {
       talkButton.disabled = false;
     }
   });

   talkButton.addEventListener("click", () => {

     if (voiceSelect.value === "select") {
       alert("Please select a voice first!");
       return;
     }
     if (!textarea.value.trim()) return;

     const utter = new SpeechSynthesisUtterance(textarea.value);
     utter.voice =
       speechSynthesis.getVoices().find((v) => v.name === voiceSelect.value) ||
       null;

     faceImg.src = "assets/images/smiling-open.png";
     utter.addEventListener("end", () => {
       faceImg.src = "assets/images/smiling.png";
     });

     speechSynthesis.speak(utter);
   });
 }
