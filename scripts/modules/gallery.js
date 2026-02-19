const allGalleryOpenButtons = document.querySelectorAll('.about__images-button');
const allGalleryImages = document.querySelectorAll('.about__image');
const gallery = document.getElementById('gallery');
const currentGalleryImage = document.querySelector('.gallery__image');

function allGalleryButtonsRemoveClass(i) {
    allGalleryOpenButtons.forEach(button => {
        button.classList.remove('is-active');
    })
    allGalleryOpenButtons[i].classList.add('is-active');
}

allGalleryOpenButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        currentGalleryImage.removeAttribute('src');
        currentGalleryImage.setAttribute('src', allGalleryImages[i].getAttribute('src'));
        allGalleryButtonsRemoveClass(i);
        gallery.showModal();
    })
})