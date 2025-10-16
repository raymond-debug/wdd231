fetch('data/programs.json')
  .then(res => res.json())
  .then(data => {
    renderPrograms(data);
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderPrograms(data, tab.dataset.category);
      });
    });
  })
  .catch(err => console.error('Error loading programs:', err));
const grid = document.getElementById('programs-grid');
const tabs = document.querySelectorAll('.tab');

function renderPrograms(data, category = 'all') {
  grid.innerHTML = '';
  const filtered = category === 'all' ? data : data.filter(p => p.category === category);
  filtered.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <p>${p.description}</p>
      </div>
    `;
  });
}
