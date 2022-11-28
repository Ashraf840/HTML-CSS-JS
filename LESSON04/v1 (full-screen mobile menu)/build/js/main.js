const initApp = () => {
    // Get the DOM-elems by Ids
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Toggles the classnames of "hidden" & "flex" of the section with id of "mobileMenu".
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }

    // Create a click-event-listener to the hamburgerBtn, call the "toggleMenu()" func
    hamburgerBtn.addEventListener('click', toggleMenu);
    // Create another click-event-listener; will respond to click if clicked anywhere in the  mobile-menu-section; not only in the CROSS-BUTTON
    mobileMenu.addEventListener('click', toggleMenu);
}

// Add an event-listener to the full document; which will indicate the full HTMLDOM has loaded;
document.addEventListener('DOMContentLoaded', initApp);