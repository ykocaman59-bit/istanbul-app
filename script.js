function mesaj() {
  alert("İstanbul'u keşfetmeye hazır mısın?");
}

// Harita oluştur
var map = L.map('map').setView([41.0082, 28.9784], 11);

// Harita katmanı
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// Noktalar
L.marker([41.0082, 28.9784]).addTo(map)
  .bindPopup('İstanbul Merkez')
  .openPopup();

L.marker([41.0369, 28.9862]).addTo(map)
  .bindPopup('Taksim Meydanı');

L.marker([41.0055, 28.9768]).addTo(map)
  .bindPopup('Ayasofya');
