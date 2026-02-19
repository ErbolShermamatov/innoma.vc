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