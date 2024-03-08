const appCardGrid = document.getElementById('app-card-grid');
const appCard = document.getElementById('app-card');

for (let i = 0; i < 20; i++) {
  appCardGrid.appendChild(appCard.cloneNode(true));
}
