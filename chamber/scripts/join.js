// Footer Date
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("last-modified");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

// Timestamp for join.html form
const timestampInput = document.getElementById("timestamp");
if (timestampInput) timestampInput.value = new Date().toISOString();

// Directory Page Logic
const container = document.getElementById("members-container");
if (container) {
  const gridBtn = document.getElementById("grid-view");
  const listBtn = document.getElementById("list-view");

  gridBtn?.addEventListener("click", () => container.className = "grid");
  listBtn?.addEventListener("click", () => container.className = "list");

  async function loadMembers() {
    try {
      const response = await fetch("data/members.json");
      const members = await response.json();

      container.innerHTML = "";
      members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("member-card");
        card.innerHTML = `
          <img src="images/${member.image}" alt="${member.name}" />
          <h3>${member.name}</h3>
          <p>${member.description}</p>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><a href="${member.website}" target="_blank">Visit Website</a></p>
          <p><strong>Membership:</strong> ${["Member", "Silver", "Gold"][member.membership - 1]}</p>
        `;
        container.appendChild(card);
      });
    } catch (error) {
      console.error("Error loading members:", error);
    }
  }

  loadMembers();
}

// Modal Logic for join.html
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "block";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.style.display = "none";
}

// Thank You Page Logic
const fnameSpan = document.getElementById("fname");
if (fnameSpan) {
  function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || "Not provided";
  }

  fnameSpan.textContent = getParam("fname");
  document.getElementById("lname").textContent = getParam("lname");
  document.getElementById("email").textContent = getParam("email");
  document.getElementById("phone").textContent = getParam("phone");
  document.getElementById("orgname").textContent = getParam("orgname");
  document.getElementById("timestamp").textContent = getParam("timestamp");
}
visitMessage.js

