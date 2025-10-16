const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-links'); 

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navlinks.classList.toggle('show');
});

// Footer Date
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("last-modified");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;
