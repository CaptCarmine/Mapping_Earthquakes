// Create the map object with a center and zoom level.
// London map Object
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      34.0522, -118.2437
    ],
    zoom: 5
  });

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location,{
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
 });


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
})

streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// L.circleMarker([34.0522, -118.2437],{
//   radius:300,
//   color:"Black",
//   fillColor:'#ffffa1'  
// }).addTo(map);

// L.circle([34.0522, -118.2437], {
//   radius: 100
// }).addTo(map);
