const apiKey = 'f0b1312c044c64c385c2d3d95c5bfe6a';

const city = 'Bibiani';
const weatherContainer = document.getElementById('weather-data');

async function getWeather() {
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  const [currentRes, forecastRes] = await Promise.all([
    fetch(currentUrl),
    fetch(forecastUrl)
  ]);

  const currentData = await currentRes.json();
  const forecastData = await forecastRes.json();

  const currentTemp = currentData.main.temp;
  const description = currentData.weather[0].description;

  let forecastHTML = '<h3>3-Day Forecast</h3><ul>';
  const days = forecastData.list.filter((item, index) => index % 8 === 0).slice(0, 3);
  days.forEach(day => {
    const date = new Date(day.dt_txt).toDateString();
    forecastHTML += `<li>${date}: ${day.main.temp}°C</li>`;
  });
  forecastHTML += '</ul>';

  weatherContainer.innerHTML = `
    <p>Temperature: ${currentTemp}°C</p>
    <p>Condition: ${description}</p>
    ${forecastHTML}
  `;
}

getWeather();
 
const spotlightContainer = document.getElementById('spotlight-container');

async function loadSpotlights() {
  const res = await fetch('data/members.json');
  const data = await res.json();

  const eligible = data.members.filter(m => m.membership === 2 || m.membership === 3);
  const shuffled = eligible.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 3);

  selected.forEach(member => {
    const card = document.createElement('div');
    card.className = 'spotlight-card';
    card.innerHTML = `
      <h3>${member.name}</h3>
      <p>${member.description}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    spotlightContainer.appendChild(card);
  });
}

loadSpotlights();

document.getElementById("year").textContent = new Date().getFullYear();