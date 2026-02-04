// Ng Kee Hang
const searchInput = document.getElementById('searchInput');

function checkLoginAndRedirect(eventId) {
    const user = localStorage.getItem('currentUser');
    if (user) {
        // User is logged in, proceed to details page
        window.location.href = `event_details.html?id=${eventId}`;
    } else {
        // User is NOT logged in, redirect to login page
        // Optional: You can add alert("Please login to view details.");
        window.location.href = 'login.html';
    }
}

function renderEvents(filterText = '') {
    const upcomingContainer = document.getElementById('events-container');
    const pastContainer = document.getElementById('past-events-container');

    if (upcomingContainer) upcomingContainer.innerHTML = '';
    if (pastContainer) {
        pastContainer.innerHTML = '';
        pastContainer.className = 'event-list-container';
    }

    //Load events
    let currentEvents = JSON.parse(localStorage.getItem('storedEvents'));
    if (!currentEvents || currentEvents.length === 0) {
        currentEvents = eventsData; 
    }

    const filteredEvents = currentEvents.filter(event => 
        event.title.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredEvents.length === 0) {
        if (upcomingContainer) upcomingContainer.innerHTML = '<p>No events found.</p>';
        return; 
    }

    //Get current date for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0); //Reset time to start of day

    filteredEvents.forEach((event) => {

        const eventDate = new Date(event.date);

        //Check if event is in the future or today
        if (eventDate >= today) { 
            const card = document.createElement('div');
            card.className = 'event-card';
            // [UPDATED] Changed href to javascript:void(0) and added onclick
            card.innerHTML = `
                <img src="${event.image}" alt="${event.title}" onerror="this.src='assets/MMU_LOGO.png'">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <a href="javascript:void(0)" onclick="checkLoginAndRedirect('${event.id}')">View Details</a>
            `;
            if (upcomingContainer) upcomingContainer.appendChild(card);
        } else {
            const listItem = document.createElement('div');
            listItem.className = 'event-list-item';
            // [UPDATED] Applied the same logic to the list view for consistency
            listItem.innerHTML = `
                <span class="date">${event.date}</span> 
                <span class="title">${event.title}</span>
                <a href="javascript:void(0)" onclick="checkLoginAndRedirect('${event.id}')">View</a>
            `;
            if (pastContainer) pastContainer.appendChild(listItem);
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        renderEvents(e.target.value); 
    });
}

document.addEventListener('DOMContentLoaded', () => renderEvents());