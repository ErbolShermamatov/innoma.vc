const prevButton = document.querySelector('.experts__button--prev');
const nextButton = document.querySelector('.experts__button--next');

const allSlides = document.querySelectorAll('.experts__slider-item');
const allSlidesArr = Array.from(allSlides);
const maxAmount = allSlides.length;

allSlides.forEach((slide, i) => {
    slide.style.order = i+1;
})

nextButton.addEventListener('click', () => {
    for(let i = 0; i < allSlidesArr.length; i++) {
        allSlides[i].style.order++;
    }
    const foundSlide = allSlidesArr.find(slide => +slide.style.order > maxAmount);
    foundSlide.style.order = 1;
})

prevButton.addEventListener('click', () => {
    for(let i = 0; i < allSlidesArr.length; i++) {
        allSlides[i].style.order--;
    }
    const foundSlide = allSlidesArr.find(slide => +slide.style.order < 1);
    foundSlide.style.order = maxAmount;
})