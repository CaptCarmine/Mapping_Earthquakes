// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/Streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
})

let satelliteStreets  = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets 
};

// Create the map object with a center and zoom level.
// London map Object
// let map = L.map('mapid').setView([40.7, -94.5], 4);
// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
// We create the dark view tile layer that will be an option for our map.

// Accessing the Toronto GeoJSON URL

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/CaptCarmine/Mapping_Earthquakes/main/torontoNeighborhoods.json";


// Grabbing our GeoJSON data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data).addTo(map);
});


// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);  
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data)
// .addTo(map);
// });

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);  
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data, {
//   // We turn each feature into a marker on the map.
//   onEachFeature: function(feature, layer) {
//     // console.log(layer);
//     layer.bindPopup("<h2>" + "Airport code: " + feature.properties.faa + "</h2> <hr> <h3>" + "Airport Name: " + feature.properties.name + "</h3>");
//   }
// }).addTo(map);
// });







