const nav = document.getElementById('mainNav');
const submenu = document.querySelector('.submenu');
const toggleSubmenu = document.querySelector('.toggle-submenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.top = '-50px';
  } else {
    nav.style.top = '0';
  }
});

toggleSubmenu.addEventListener('mouseenter', () => {
  submenu.classList.add('show');
});

toggleSubmenu.addEventListener('mouseleave', () => {
  submenu.classList.remove('show');
});

submenu.addEventListener('mouseenter', () => {
  submenu.classList.add('show');
});

submenu.addEventListener('mouseleave', () => {
  submenu.classList.remove('show');
});

