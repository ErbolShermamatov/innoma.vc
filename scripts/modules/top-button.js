const topButton = document.querySelector('.top-button');

window.addEventListener('scroll', () => {
    if(window.scrollY > 5000) {
        topButton.classList.add('visible');
    } else {
        topButton.classList.remove('visible');
    }
})

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})