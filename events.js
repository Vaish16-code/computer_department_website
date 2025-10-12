document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    // Change selector to target the link wrapper
    const eventCards = document.querySelectorAll('.event-link'); 

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            
            // Loop through all event cards (now event links)
            eventCards.forEach(card => {
                // The data-category is now on the <a> tag
                const cardCategory = card.getAttribute('data-category'); 
                
                // Show all cards if 'all' is selected
                if (filterValue === 'all') {
                    card.classList.remove('hidden');
                } 
                // Show only cards that match the filter category
                else if (cardCategory === filterValue) {
                    card.classList.remove('hidden');
                } 
                // Hide all other cards
                else {
                    card.classList.add('hidden');
                }
            });
        });
    });
});