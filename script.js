console.log("Welcome to spotify")

// Initialize variables
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songs=[
    {songName: "Sulthana", filePath:"Desktop/1.mp3", coverPath:"cover.jpg"},
    {songName: "Sulthana", filePath:"Desktop/1.mp3", coverPath:"cover.jpg"},
    {songName: "Sulthana", filePath:"Desktop/1.mp3", coverPath:"cover.jpg"},
    {songName: "Sulthana", filePath:"Desktop/1.mp3", coverPath:"cover.jpg"},
    {songName: "Sulthana", filePath:"Desktop/1.mp3", coverPath:"cover.jpg"},
    {songName: "Sulthana", filePath:"Desktop/1.mp3", coverPath:"cover.jpg"},
    
]

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{  
    //Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= ((myProgressBar.value * audioElement.duration)/100);
})