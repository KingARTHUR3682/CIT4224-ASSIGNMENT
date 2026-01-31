// Ng Kee Hang
const searchInput = document.getElementById('searchInput');

function renderEvents(filterText = '') {
    const upcomingContainer = document.getElementById('events-container');
    const pastContainer = document.getElementById('past-events-container');

    if (upcomingContainer) upcomingContainer.innerHTML = '';
    if (pastContainer) {
        pastContainer.innerHTML = '';
        pastContainer.className = 'event-list-container';
    }

    // --- FIX STARTS HERE ---
    // Try to get events from Local Storage first. 
    // If not found (null), fall back to the static 'eventsData' from data.js
    let currentEvents = JSON.parse(localStorage.getItem('storedEvents'));
    
    if (!currentEvents || currentEvents.length === 0) {
        currentEvents = eventsData; 
    }
    // --- FIX ENDS HERE ---

    const filteredEvents = currentEvents.filter(event => 
        event.title.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filteredEvents.length === 0) {
        if (upcomingContainer) upcomingContainer.innerHTML = '<p>No events found.</p>';
        return; 
    }

    filteredEvents.forEach((event, index) => {
        // ... rest of your existing code ...
        if (index < 3) { 
            const card = document.createElement('div');
            card.className = 'event-card';
            card.innerHTML = `
                <img src="${event.image}" alt="${event.title}">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <a href="event_details.html?id=${event.id}">View Details</a>
            `;
            if (upcomingContainer) upcomingContainer.appendChild(card);
        } else {
            const listItem = document.createElement('div');
            listItem.className = 'event-list-item';
            listItem.innerHTML = `
                <span class="date">${event.date.split(',')[0]}</span> 
                <span class="title">${event.title}</span>
                <a href="event_details.html?id=${event.id}">View</a>
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