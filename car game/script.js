let playButton=document.querySelector(".playbutton");
let pauseButton=document.querySelector(".pausebutton");
let audio=document.createElement('audio');
audio.setAttribute('src','sound.mp3');
audio.loop=true;
let trees=document.querySelector(".trees");
let track=document.querySelector(".track");
let car=document.querySelector(".car");
let wheel1=document.querySelector(".wheel1");
let wheel2=document.querySelector(".wheel2");
playButton.addEventListener('click',()=>{
    document.body.style.background="none";
    playButton.style.display="none";
    trees.style.display="block";
    track.style.display="block";
    wheel1.style.display="block";
    wheel2.style.display="block";
    car.style.display="block";
    audio.play();
    pauseButton.style.display="flex";
});
pauseButton.addEventListener('click',()=>{
    document.body.style.background="url(background.jpg)";
    playButton.style.display="flex";
    trees.style.display="none";
    track.style.display="none";
    wheel1.style.display="none";
    wheel2.style.display="none";
    car.style.display="none";
    audio.pause();
    pauseButton.style.display="none";
});
const vh=window.innerHeight;
document.addEventListener('keydown',()=>{
if(event.code==='ArrowDown')
{     
    console.log(car.offsetTop);
    console.log(track.offsetTop)     
    car.style.top=((car.offsetTop/vh)*100)+1+'vh'; 
}   
});
