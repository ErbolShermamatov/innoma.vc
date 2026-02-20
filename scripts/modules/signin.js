const signinWindow = document.getElementById('signin');
const registerWindow = document.getElementById('register');

const signinButton = document.querySelector('.header__button');
const signinButton2 = document.querySelector('.signin__button');

const registerButton = document.querySelector('.register__button');

signinButton.addEventListener('click', () => {
    signinWindow.showModal();
})

signinButton2.addEventListener('click', () => {
    registerWindow.close();
    signinWindow.showModal();
})

registerButton.addEventListener('click', () => {
    signinWindow.close();
    registerWindow.showModal();

})





