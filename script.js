// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Support form handler
document.getElementById('support-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Simple validation
  if (email && message) {
    document.getElementById('form-status').textContent = '✓ Thank you! We\'ll get back to you soon.';
    document.getElementById('form-status').style.color = '#3182ce';
    this.reset();
    
    // Clear message after 3 seconds
    setTimeout(() => {
      document.getElementById('form-status').textContent = '';
    }, 3000);
  }
});

