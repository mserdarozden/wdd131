document.addEventListener('DOMContentLoaded', () => {
    function updateReviewCounter() {
        let count = localStorage.getItem('reviewCounter');
        if (count === null) {
            count = 0;
        }
        document.getElementById('review-counter').textContent = `Reviews Completed: ${count}`;
    }

    updateReviewCounter();

    // Set current year and last modified date in the footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});