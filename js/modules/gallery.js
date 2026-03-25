/**
 * Gallery interactions.
 */
function initGallery() {
    const galleryItems = document.querySelectorAll('[data-gallery-item]');
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                console.log('Gallery item clicked:', img.src);
            }
        });
    });
}

export { initGallery };
