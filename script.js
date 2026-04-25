function mesaj() {
  alert("İstanbul'u keşfetmeye hazır mısın?");
}

var map = L.map('map').setView([41.0082, 28.9784], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

L.marker([41.0082, 28.9784]).addTo(map)
  .bindPopup('İstanbul Merkez')
  .openPopup();
