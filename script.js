// Dark Mode Toggle Button
const darkModeButton = document.getElementById('dark-mode-button');

// Toggle dark mode when button is clicked
darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update button text based on the current theme
  if (document.body.classList.contains('dark-mode')) {
    darkModeButton.textContent = 'Light Mode';
  } else {
    darkModeButton.textContent = 'Dark Mode';
  }
});

// Accordion Functionality
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
