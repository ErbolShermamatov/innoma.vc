const video = document.querySelector('video');
const poster = document.querySelector('.accelerator__video-poster');
poster.addEventListener('click', () => {
    poster.classList.toggle('play');
    if(poster.classList.contains('play')) {
        video.play();
    } else {
        video.pause();
    }
})