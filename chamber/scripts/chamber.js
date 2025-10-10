const container = document.getElementById("members-container");
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");

gridBtn.addEventListener("click", () => container.className = "grid");
listBtn.addEventListener("click", () => container.className = "list");

async function loadMembers() {
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
}

loadMembers();

// Footer Date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// js/thankyou.js
function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name) || "Not provided";
}

document.getElementById("fname").textContent = getParam("fname");
document.getElementById("lname").textContent = getParam("lname");
document.getElementById("email").textContent = getParam("email");
document.getElementById("phone").textContent = getParam("phone");
document.getElementById("orgname").textContent = getParam("orgname");
document.getElementById("timestamp").value = getParam("timestamp");

