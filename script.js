const yerler = [
  {
    isim: "Ayasofya",
    aciklama: "Tarihi yapı",
    lat: 41.0055,
    lng: 28.9768
  },
  {
    isim: "Taksim Meydanı",
    aciklama: "Şehrin merkezi",
    lat: 41.0369,
    lng: 28.9862
  }
];

const liste = document.getElementById("liste");

yerler.forEach(yer => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `<h3>${yer.isim}</h3><p>${yer.aciklama}</p>`;
  liste.appendChild(div);
});

var map = L.map('map').setView([41.0082, 28.9784], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

yerler.forEach(yer => {
  L.marker([yer.lat, yer.lng]).addTo(map)
    .bindPopup(yer.isim);
});
