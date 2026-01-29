//Low Yong Lek
document.addEventListener('DOMContentLoaded', () => {
    initializeData();
});

function initializeData() {
    //Initialize Events
    if (!localStorage.getItem('storedEvents')) {
        if (typeof eventsData !== 'undefined') {
            localStorage.setItem('storedEvents', JSON.stringify(eventsData));
            console.log("Initialized Events Data from data.js");
        }
    }

    //Initialize Users (Students/Admins)
    if (!localStorage.getItem('storedUsers')) {
        if (typeof authDB !== 'undefined') {
            localStorage.setItem('storedUsers', JSON.stringify(authDB));
            console.log("Initialized User Data from auth_data.js");
        }
    }
}

//Get all events
function getStoredEvents() {
    return JSON.parse(localStorage.getItem('storedEvents')) || [];
}

//Save events
function saveEvents(eventsArray) {
    localStorage.setItem('storedEvents', JSON.stringify(eventsArray));
}

//Get all bookings
function getAllBookings() {
    //We have to scan all keys because bookings are stored per user (bookings_USERID)
    let allBookings = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('bookings_')) {
            const userId = key.split('_')[1];
            const userBookings = JSON.parse(localStorage.getItem(key));
            // Add the User ID to the booking object for the admin to see
            userBookings.forEach(b => {
                b.userId = userId; 
                allBookings.push(b);
            });
        }
    }
    return allBookings;
}