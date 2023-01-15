console.log("Welcome to Spotify");

// Intializing the Variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let gif= document.getElementById('gif');
let mastersongname= document.getElementById('mastersongname');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((Element,i) =>{
    console.log(Element,i);
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// handiling the play and pause event

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;

    }
    // pause event

    else{
        audioElement.pause();
        masterplay.classList.add("fa-circle-play");
        masterplay.classList.remove("fa-circle-pause");
        gif.style.opacity = 0;
    }

})

// listen to events

audioElement.addEventListener('timeupdate',()=>{
     
     // update seek bar
      let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
      
      myprogressbar.value= progress;

})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime= (myprogressbar.value*audioElement.duration/100);
})


// change the songs with their icons to play

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e) =>{
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src=`songs/${songIndex+1}.mp3`;
            mastersongname.innerText = songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');

    })
    })

    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=9){
            songIndex = 0;
        }
        else{
            songIndex += 1;
        }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    
    })
    
    document.getElementById('previous').addEventListener('click', ()=>{
        if(songIndex<=0){
            songIndex = 0;
        }
        else{
            songIndex -= 1;
        }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
    