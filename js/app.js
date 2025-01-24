const body = document.body;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const forwardBtn = document.getElementById("forward");
const backwardBtn = document.getElementById("backward");
const voice = document.getElementById("voice");
const audioVolume = document.getElementById("volume");
const titleMusic = document.querySelector("#name");
const container = document.getElementById("container");
const cover = document.getElementById("cover");
const processDuration = document.querySelector(".process-duration");
// const musicPlaying = document.getElementById("music-playing");
// const musicDuration = document.getElementById("music-duration");

let indexContent = 0;
const content = [
  "TheFatRat - Mayday",
  "TheFatRat - Escaping Gravity (feat. Cecilia Gault)",
  "TheFatRat - The Calling",
  "Баста - Я Найду Тебя Через Века",
  "Loreen - Tattoo",
];

function changeMusic(index) {
  cover.src = `../img/${content[index]}.jpg`;
  audio.src = `../music/${content[index]}.mp3`;
  titleMusic.textContent = content[index];
}
changeMusic(indexContent);

audio.volume = voice.value / 100;
voice.addEventListener("input", () => {
  audio.volume = voice.value / 100;
  audioVolume.textContent = audio.volume;
});

function play() {
  audio.play();
  container.classList.add("playing");
  playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}
function pause() {
  audio.pause();
  container.classList.remove("playing");
  playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
}

playBtn.addEventListener("click", () => {
  const isPlaying = container.classList.contains("playing");

  if (isPlaying) {
    pause();
  } else {
    play();
  }
});
// BG - GRADIENT-COLOR
const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function getGradient() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.trunc(Math.random() * values.length);
    color += values[randomNumber];
  }
  return color;
}

function setGradient() {
  const color1 = getGradient();
  const color2 = getGradient();
  const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(
    ${randomDeg}deg,
    ${color1},
    ${color2}
    )`;
  body.style.background = bgColor;
}
function nextMusic() {
  if (content.length - 1 <= indexContent) {
    indexContent = 0;
  } else {
    indexContent++;
  }
  changeMusic(indexContent);
  play();
  setGradient();
}

function prevMusic() {
  if (content.length - 1 <= indexContent) {
    indexContent = 0;
  } else {
    indexContent--;
  }
  changeMusic(indexContent);
  play();
  setGradient();
}

function durationMusic() {
  let duration = audio.duration;
  let currentTime = audio.currentTime;
  processDuration.style.width = `${(currentTime / duration) * 100}%`;
}

forwardBtn.addEventListener("click", nextMusic);
backwardBtn.addEventListener("click", prevMusic);
audio.addEventListener("ended", nextMusic);
audio.addEventListener("timeupdate", durationMusic);
