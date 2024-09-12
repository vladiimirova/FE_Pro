document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 2000
    }).mount();


    const map = L.map('map').setView([51.505, -0.09], 2); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.505, -0.09]).addTo(map)
        .bindPopup('London')
        .openPopup();

    L.marker([38.642, 34.827]).addTo(map)
        .bindPopup('Cappadocia')
        .openPopup();

    L.marker([40.7128, -74.0060]).addTo(map)
        .bindPopup('New York')
        .openPopup();

    L.marker([38.7223, -9.1393]).addTo(map)
        .bindPopup('Lisbon')
        .openPopup();

    L.marker([39.4699, -0.3763]).addTo(map)
        .bindPopup('Valencia')
        .openPopup();
});
