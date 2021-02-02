/*create map */ 
var map = L.map('mapid').setView([-27.222633, -49.6455874], 15)
/* create and add tileLayer*/ 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map) //longetude e latitude e zoom//

/*create icon*/ 
const icon = L.icon({
    iconUrl:"images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor: [170,2]
})

// create popup //
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanege"> <img src="/nlw/public/images/arrow-white.svg" > </a>')

//create and add marker//

L.marker([-27.222633, -49.6455874], { icon }).addTo(map)
.addTo(map)
.bindPopup(popup)