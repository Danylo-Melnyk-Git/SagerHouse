/**
 * Loads HTML partials into elements marked with data-partial.
 */
async function loadPartials() {
    const placeholders = Array.from(document.querySelectorAll('[data-partial]'));

    if (!placeholders.length) {
        return;
    }

    for (const placeholder of placeholders) {
        const partialPath = placeholder.getAttribute('data-partial');
        if (!partialPath) {
            continue;
        }

        try {
            const response = await fetch(partialPath, { cache: 'no-store' });
            if (!response.ok) {
                throw new Error(`Failed to load ${partialPath}: ${response.status}`);
            }

            const markup = await response.text();
            placeholder.outerHTML = markup;
        } catch (error) {
            console.error('Partial load error:', error);
        }
    }
}

export { loadPartials };
