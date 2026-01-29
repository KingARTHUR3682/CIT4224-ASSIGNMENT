// Arthur Kong Ben Xuan
// Navigation Bar
const navbarContent = `
  <nav class="navbar">
    <div class="logo"><a href="main.html"><img src="assets/MMU_LOGO.png" alt="MMU Logo"></a></div>
    <ul class="nav-links">
      <li><a href="main.html">Home</a></li>
      <li><a href="events.html">Browse Events</a></li>
      <li><a href="about.html">About Us</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="bookings.html">Booking</a></li>
      <li><a href="profile.html" class="btn-login">Profile</a></li>
    </ul>
  </nav>
`;

// Footer
const footerContent = `
  <footer>
    <p>&copy; 2026 MMU Campus Event Management System. All Rights Reserved.</p>
    <p>Project by TL4L Group C</p>
  </footer>
`;


function loadLayout() {
  const navContainer = document.getElementById('navbar-container');
  const footerContainer = document.getElementById('footer-container');

  if (navContainer) {
    navContainer.innerHTML = navbarContent;
  }
  
  if (footerContainer) {
    footerContainer.innerHTML = footerContent;
  }
}

document.addEventListener('DOMContentLoaded', loadLayout);