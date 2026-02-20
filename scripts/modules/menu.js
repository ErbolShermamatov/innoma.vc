const burgerButton = document.querySelector('.burger-button');
const menu = document.getElementById('menu')
burgerButton.addEventListener('click', () => {
    menu.showModal();
})

const allNavLinks = document.querySelectorAll('.menu__nav-link');
allNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.close();
    })
})