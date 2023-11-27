const hamburgerMenuButton = document.querySelector('[data-hamburger-menu]');
const hamburgerArea = document.querySelector('.hamburger--menu-area');

function handleHamburgerPress() {
    if (hamburgerArea.style.display === 'flex') {
        hamburgerArea.style.opacity = '0';

        setTimeout(() => {
            hamburgerArea.style.display = 'none';
        }, 300);
    } else {
        hamburgerArea.style.opacity = '0';
        hamburgerArea.style.display = 'flex';

        setTimeout(() => {
            hamburgerArea.style.opacity = '1';
        }, 300);
    }
}

function handleResizeWindow() {
    if (window.innerWidth > 768) {
        hamburgerArea.style.display = 'none';
    }
}


window.addEventListener('resize', handleResizeWindow);
hamburgerMenuButton.addEventListener('click', handleHamburgerPress);
