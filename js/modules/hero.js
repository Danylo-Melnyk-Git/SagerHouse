/**
 * Hero image enhancement.
 */
function enhanceHeroImage() {
    const heroImg = document.querySelector('.hero-image-container img') ||
        document.querySelector('[alt="Austrian Alps Mountain View"]');

    if (!heroImg) return;

    const container = heroImg.closest('[class*="aspect"]') || heroImg.parentElement;

    if (container) {
        container.style.overflow = 'hidden';
        container.style.display = 'block';
    }

    heroImg.style.display = 'block';
    heroImg.style.width = '100%';
    heroImg.style.height = '100%';
    heroImg.style.objectFit = 'cover';
    heroImg.style.objectPosition = 'center';
}

export { enhanceHeroImage };
