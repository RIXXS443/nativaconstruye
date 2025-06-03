// Simple script for dynamic footer year and basic form validation
window.addEventListener('DOMContentLoaded', () => {
  // Update footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Simple validation for contact form
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  }
});
