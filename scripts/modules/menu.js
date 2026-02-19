const burgerButton = document.querySelector('.burger-button');
const menu = document.getElementById('menu')
burgerButton.addEventListener('click', () => {
    menu.showModal();
})