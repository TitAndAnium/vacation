
const map = L.map('map').setView([36.5, -4.7], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors'
}).addTo(map);

fetch('./data/poi_data.json')
  .then(response => response.json())
  .then(pois => {
    pois.forEach(poi => {
      const marker = L.marker([poi.lat, poi.lng]).addTo(map);
      const popup = `<b>${poi.title}</b><br>${poi.description}<br>
                     <img src="${poi.image}" width="200"/><br>
                     <a href="${poi.link}" target="_blank">Meer info</a>`;
      marker.bindPopup(popup);
    });
  });
