let btn = document.querySelector('.section__video-rightpart-link');

let videoContainer = document.querySelector('.section__video-rightpart-video');

let close = document.querySelector('.section__video-rightpart-close');

let video =  document.querySelector('video');

btn.onclick = function () {
    btn.classList.add('active');
    videoContainer.classList.add('active');
    video.currentTime = 0;
    video.play();
    video.volume = 0.2
}   

close.onclick = function () {
    btn.classList.remove('active');
    videoContainer.classList.remove('active');
    video.pause();
}