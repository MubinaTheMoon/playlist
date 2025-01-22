const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const forwardBtn = document.getElementById("forward");
const backwardBtn = document.getElementById("backward");
const img = document.getElementById("img");
const voice = document.getElementById("voice");
const volume = document.getElementById("volume");
const transformText = document.querySelector("#name");

voice.addEventListener("input", () => {
  audio.volume = voice.value / 100;
  volume.innerHTML = `${audio.volume * 100}`;
});

playBtn.addEventListener("click", () => {
  audio.play();
  img.classList.add("rotate");
  pauseBtn.style.display = "inline-block";
  playBtn.style.display = "none";
  transformText.classList.add("run");
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
  img.classList.remove("rotate");
  pauseBtn.style.display = "none";
  playBtn.style.display = "inline-block";
});
