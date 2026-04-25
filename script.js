function mesaj() {
  alert("İstanbul'u keşfetmeye hazır mısın?");
}

// 📍 VERİ SİSTEMİ
const yerler = [
  {
    isim: "Ayasofya",
    aciklama: "Tarihi ve büyüleyici yapı",
    lat: 41.0055,
    lng: 28.9768
  },
  {
    isim: "Taksim Meydanı",
    aciklama: "İstanbul’un kalbi",
    lat: 41.0369,
    lng: 28.9862
  },
  {
    isim: "Galata Kulesi",
    aciklama: "Manzarası efsane",
    lat: 41.0256,
    lng: 28.9744
  }
];

// 🗺️ HARİTA
var map = L.map('map').setView([41.0082, 28.9784], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

// 📌 OTOMATİK NOKTA EKLEME
yerler.forEach(yer => {
  L.marker([yer.lat, yer.lng]).addTo(map)
    .bindPopup(`<b>${yer.isim}</b><br>${yer.aciklama}`);
});
