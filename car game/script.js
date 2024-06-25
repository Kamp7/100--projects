let playButton=document.querySelector(".playbutton");
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
    
});