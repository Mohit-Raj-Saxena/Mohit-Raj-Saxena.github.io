// Reveal sections on scroll
const sections = document.querySelectorAll("section");

function revealSections() {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (top < windowHeight - 100) {
      section.classList.add("show");
    }
  });
}

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top');

function handleScrollTop() {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
}

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scroll for all sections
window.addEventListener("scroll", () => {
  revealSections();
  handleScrollTop();
});

window.addEventListener("load", revealSections);

// Add stagger effect to project cards
const projects = document.querySelectorAll('.project');
projects.forEach((project, index) => {
  project.style.animationDelay = `${index * 0.1}s`;
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark theme
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  body.classList.add('light-theme');
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  
  // Save theme preference
  const theme = body.classList.contains('light-theme') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
});