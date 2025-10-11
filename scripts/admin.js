// scripts/admin.js

// Check if admin is logged in
function checkAdminAuth() {
  const admin = localStorage.getItem("admin");
  if (!admin) {
    window.location.href = "login.html";
  } else {
    const nameEl = document.getElementById("admin-name");
    if (nameEl) nameEl.textContent = `Welcome, ${admin}`;
  }
}

// Logout admin
function logout() {
  if (confirm("Are you sure you want to logout?")) {
    localStorage.removeItem("admin");
    window.location.href = "login.html";
  }
}

// Sidebar toggle for mobile
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("show");
}

// Auto-run check on pages that include this script
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.querySelector(".logout-btn");
  if (logoutBtn) logoutBtn.addEventListener("click", logout);

  if (document.body.classList.contains("requires-auth")) {
    checkAdminAuth();
  }
});
