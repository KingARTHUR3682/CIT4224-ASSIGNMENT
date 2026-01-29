// Ng Kee Hang
function saveCommentToStorage(eventId, rating, text, user) {
    const newComment = {
        user: user || "Anonymous Student",
        rating: rating,
        text: text,
        date: new Date().toLocaleDateString()
    };

    const storageKey = `comments_${eventId}`;
    const existingComments = JSON.parse(localStorage.getItem(storageKey)) || [];
    
    existingComments.push(newComment);
    localStorage.setItem(storageKey, JSON.stringify(existingComments));
}
function getCommentsFromStorage(eventId) {
    const storageKey = `comments_${eventId}`;
    return JSON.parse(localStorage.getItem(storageKey)) || [];
}
function renderComments(eventId, containerId) {
    const comments = getCommentsFromStorage(eventId);
    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = '';

    if (comments.length === 0) {
        container.innerHTML = '<p style="color: gray; font-style: italic;">No reviews yet. Be the first to review!</p>';
        return;
    }
    comments.reverse().forEach(c => {
        const stars = '⭐'.repeat(c.rating);
        const html = `
            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #3498db;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <strong>${c.user}</strong>
                    <span style="color: #666; font-size: 0.85rem;">${c.date}</span>
                </div>
                <div style="color: #f39c12; margin-bottom: 8px;">${stars}</div>
                <p style="margin: 0; color: #333;">${c.text}</p>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', html);
    });
}