document.querySelectorAll('.expandable-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
        const content = this.querySelector('ul, p');
        if (content) {
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        }
    });
});