const burgerButton = document.querySelector('.burger-button');
const menu = document.getElementById('menu')
burgerButton.addEventListener('click', () => {
    menu.showModal();
})

const allTabsButtons = document.querySelectorAll('.tabs__button');
const allTabs = document.querySelectorAll('.tabs__content-item');
function removeIsActiveClassButtons() {
    allTabsButtons.forEach(button => {
        button.classList.remove('is-active');
    })
}
function removeIsActiveClassTabs() {
    allTabs.forEach(tab => {
        tab.classList.remove('is-active');
    })
}
allTabsButtons.forEach((button, i) => {
    button.addEventListener('click', (e) => {
        removeIsActiveClassButtons();
        button.classList.add('is-active');
        removeIsActiveClassTabs();
        allTabs[i].classList.add('is-active');
    })
})

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


const allAccordionItems = document.querySelectorAll('.program__accordion');
const allAccordionButtons = document.querySelectorAll('.program__accordion-button');

allAccordionButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        if(allAccordionItems[i].hasAttribute('open')) {
            allAccordionItems[i].removeAttribute('open');
        } else {
            allAccordionItems[i].setAttribute('open', 'open');
        }
    })
})
