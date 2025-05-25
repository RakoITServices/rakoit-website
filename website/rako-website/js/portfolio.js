// Dark mode theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
});

// Loader animation
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.style.display = 'none', 1000);
});
