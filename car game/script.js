let playButton = document.querySelector(".playbutton");
let pauseButton = document.querySelector(".pausebutton");
let audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;
let trees = document.querySelector(".trees");
let track = document.querySelector(".track");
let car = document.querySelector(".car");
let wheel1 = document.querySelector(".wheel1");
let wheel2 = document.querySelector(".wheel2");
let control=document.querySelector('.control')
playButton.addEventListener('click', () => {
    document.body.style.background = "none";
    playButton.style.display = "none";
    trees.style.display = "block";
    track.style.display = "block";
    wheel1.style.display = "block";
    wheel2.style.display = "block";
    car.style.display = "block";
    audio.play();
    pauseButton.style.display = "flex";
    control.style.display="block";

});
pauseButton.addEventListener('click', () => {
    document.body.style.background = "url(background.jpg)";
    playButton.style.display = "flex";
    trees.style.display = "none";
    track.style.display = "none";
    wheel1.style.display = "none";
    wheel2.style.display = "none";
    car.style.display = "none";
    audio.pause();
    pauseButton.style.display = "none";
    control.style.display="none";
});
const vh = window.innerHeight;
const vw=window.innerWidth;
let screenh= window.screen.height;
document.addEventListener('keydown', () => {
    if (event.code === 'ArrowDown') {
        console.log(((car.offsetTop)/screenh)*100);
        if(((car.offsetTop)/screenh)*100<=80)
            {
        car.style.top = ((car.offsetTop / vh) * 100) + 1 + 'vh';
            }
    }
});
let movedown=document.querySelector('.down');
movedown.addEventListener('click', () => {
            
        car.style.top = ((car.offsetTop / vh) * 100) + 1 + 'vh';
    
});
document.addEventListener('keydown', () => {
    if (event.code === 'ArrowUp') {
        console.log(((car.offsetTop)/screenh)*100);
        if(((car.offsetTop)/screenh)*100>=62)
            {
        car.style.top = ((car.offsetTop / vh) * 100) - 1 + 'vh';
            }
    }
});
let moveup=document.querySelector('.up');
moveup.addEventListener('click', () => {
            
        car.style.top = ((car.offsetTop / vh) * 100) - 1 + 'vh';
    
});
document.addEventListener('keydown', () => {
    if (event.code === 'ArrowRight') {
      
        car.style.left = ((car.offsetLeft / vw) * 100) + 1 + 'vw';
    }
});
let moveright=document.querySelector('.right');
moveright.addEventListener('click', () => {
            
    car.style.left = ((car.offsetLeft / vw) * 100) + 1 + 'vw';
    
});
document.addEventListener('keydown', () => {
    if (event.code === 'ArrowLeft') {
        
        car.style.left= ((car.offsetLeft / vw) * 100) - 1 + 'vw';
    }
});
let moveleft=document.querySelector('.left');
moveleft.addEventListener('click', () => {
            
    car.style.left = ((car.offsetLeft / vw) * 100) - 1 + 'vw';
    
});