// Footer Date
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("last-modified");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

const visitSection = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitSection.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  visitSection.textContent = days < 1
    ? "Back so soon! Awesome!"
    : `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
}
localStorage.setItem("lastVisit", now);

// cards.js
fetch("data/places.json")
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector(".grid-container");
    data.forEach((place, i) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.gridArea = `card${i + 1}`;
      card.innerHTML = `
        <h2>${place.name}</h2>
        <figure><img src="${place.image}" alt="${place.name}" loading="lazy"></figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
      `;
      container.appendChild(card);
    });
  });