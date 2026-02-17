var map = L.map('map').setView([28.123, -15.43], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

    L.marker([28.123, -15.43])
    .addTo(map)
    .bindPopup("Hospital 1");

    L.marker([28.135, -15.42])
    .addTo(map)
    .bindPopup("Hospital 2");
