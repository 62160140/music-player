const music_ContainerEl = document.getElementById('music-container')
const playBtnEl = document.getElementById('play')
const prevBtnEl = document.getElementById('prev')
const nextBtnEl = document.getElementById('next')
const audioEl = document.getElementById('audio')
const progressEl = document.getElementById('progress')
const progressContainerEl = document.getElementById('document.getElementById')
const title = document.getElementById('title')
const cover = document.getElementById('cover')


const songs=["Contra","HavestMoon","Mario"]
let index=2;


function loadSongs(song){
  title.innerText = `เพลง ${song}.mp3`;
  cover.src = `cover/${song}.jpg`
  audioEl.src = `music/${song}.mp3`
}


playBtnEl.addEventListener('click',()=>{
  const isPlay=music_ContainerEl.classList.contains('play'); // playing?

  if(isPlay){
    pauseSong();
  }else{
    playSong();
  }
})

function pauseSong(){
  music_ContainerEl.classList.remove('play')
  playBtnEl.querySelector('i').classList.replace('fa-pause','fa-play');
  audioEl.pause();
}

function playSong(){
  music_ContainerEl.classList.add('play')
  playBtnEl.querySelector('i').classList.replace('fa-play','fa-pause');
  audioEl.play();
}

loadSongs(songs[index])