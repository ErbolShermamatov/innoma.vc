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