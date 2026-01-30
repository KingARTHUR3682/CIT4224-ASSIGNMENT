//Low Yong Lek
document.addEventListener('DOMContentLoaded', () => {
    initializeData();
});

function initializeData() {
    // Check if storedEvents is missing OR if it is an empty list
    const stored = localStorage.getItem('storedEvents');
    
    if (!stored || JSON.parse(stored).length === 0) {
        if (typeof eventsData !== 'undefined') {
            localStorage.setItem('storedEvents', JSON.stringify(eventsData));
            console.log("Initialized Events Data from data.js");
            // Optional: Reload page to reflect changes immediately if on a dashboard
        }
    }

    // Initialize Users (Students/Admins)
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

//Get categories from storage or return defaults
function getStoredCategories() {
    const defaultCategories = ["Academic / Seminar", "Workshop", "Sports", "Cultural", "Club Activity", "Volunteer / Community", "Competition"];
    const stored = localStorage.getItem('storedCategories');
    return stored ? JSON.parse(stored) : defaultCategories;
}

//Save categories to storage
function saveCategories(categoriesArray) {
    localStorage.setItem('storedCategories', JSON.stringify(categoriesArray));
}