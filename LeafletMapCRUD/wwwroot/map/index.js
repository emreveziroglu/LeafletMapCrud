/* eslint-disable no-undef */
/**
 * Marker grouping width markercluster plugin
 */

// config map
let config = {
  minZoom: 4,
  maxZoom: 18,
};
// magnification with which the map will start
const zoom = 8;
// coordinates
const lat = 40.732540;
const lng = 31.6082;

//40.728205, 30.380734

// coordinate array with popup text
let points = [

  [40.728205, 30.380734, "Sakarya"],
  [40.7887, 30.4071, "Adapazarı Merkez"],

];

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);

// Used to load and display tile layers on the map
// Most tile servers require attribution, which you can set under `Layer`
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// L.MarkerClusterGroup extends L.FeatureGroup
// by clustering the markers contained within
let markers = L.markerClusterGroup();

// Add markers to the layer
for (let i = 0; i < points.length; i++) {
  const [lat, lng, title] = points[i];

  let marker = L.marker(new L.LatLng(lat, lng)).bindPopup(title);
  markers.addLayer(marker);
}

// Add all markers to map
map.addLayer(markers);
