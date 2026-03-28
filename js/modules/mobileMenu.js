/**
 * Mobile navigation behavior.
 */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');

    if (!btn || !menu) return;

    const setMenuState = (isOpen) => {
        btn.setAttribute('aria-expanded', String(isOpen));
        menu.classList.toggle('hidden', !isOpen);
        btn.classList.toggle('is-open', isOpen);
    };

    const closeMenu = () => setMenuState(false);
    const toggleMenu = () => setMenuState(menu.classList.contains('hidden'));

    btn.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => closeMenu());
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !btn.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
}

export { initMobileMenu };
