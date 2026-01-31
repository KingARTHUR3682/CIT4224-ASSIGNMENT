// Low Yong Lek

const adminNavbarContent = `
  <nav class="navbar" style="background-color: #2c3e50; padding: 10px 40px;"> 
    
    <div class="logo" style="display: flex; align-items: center;">
        <a href="admin_dashboard.html"><img src="assets/MMU_LOGO.png" alt="MMU Logo" style="height: 50px; width: auto;"></a>
        <span style="color: white; font-weight: bold; margin-left: 15px; font-size: 1.1rem; border-left: 1px solid #7f8c8d; padding-left: 15px;">ADMIN PANEL</span>
    </div>
    
    <div class="nav-right-section">
        <ul class="nav-links" style="display: flex; align-items: center; margin: 0; padding: 0;">
          <li><a href="admin_dashboard.html">Home</a></li>
          
          <li class="dropdown">
            <a href="#" class="dropbtn">Management</a>
            <div class="dropdown-content">
                <a href="admin_staff.html">Staff Management</a>
                <a href="admin_member.html">Members Management</a>
                <a href="admin_event_categories.html">Event Categories</a>
                <a href="admin_events.html">Events / Services</a>
                <a href="admin_bookings.html">Bookings/Orders</a>
                <a href="admin_report.html">Sales Report</a>
            </div>
          </li>

          <li>
            <a href="javascript:void(0)" onclick="adminLogout()" style="color: #ff6b6b; font-weight: bold;">Logout</a>
          </li>
        </ul>
    </div>
  </nav>
`;

const adminFooterContent = `
  <footer>
    <p>&copy; 2026 MMU Campus Event Management System. All Rights Reserved.</p>
    <p style="color: #7f8c8d; font-size: 0.8rem;">Administrator Access Mode</p>
  </footer>
`;

function loadAdminLayout() {
  const navContainer = document.getElementById('navbar-container');
  const footerContainer = document.getElementById('footer-container');

  if (navContainer) navContainer.innerHTML = adminNavbarContent;
  if (footerContainer) footerContainer.innerHTML = adminFooterContent;
}

function adminLogout() {
    if(confirm("Are you sure you want to sign out?")) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userRole');
        window.location.href = "login.html";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('userRole');
    if (role !== 'admin') {
        alert("⛔ Access Denied: Administrators Only.");
        window.location.href = "login.html";
    }
    loadAdminLayout();
});