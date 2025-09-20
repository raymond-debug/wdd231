// ✅ Responsive Navigation Toggle
const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-links'); 

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navlinks.classList.toggle('show');
});