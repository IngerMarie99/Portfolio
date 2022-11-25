export default function handleHamburger() {
    const hamburgerIconElement  = document.querySelector('.mobile-menu-icon');
    const overlayMenuElement = document.querySelector('.overlay-menu');
    const exitMenuElement = document.querySelector('.close')

    hamburgerIconElement.addEventListener('click', (e) => {
        e.preventDefault();
        overlayMenuElement.classList.remove('hidden');

    });
    exitMenuElement.addEventListener('click', (e) => {
        e.preventDefault();
        overlayMenuElement.classList.add('hidden');
    });
    
}