var client;
//create function to add the Earthquake layer
function getEarthquakes() {
client = new XMLHttpRequest();
client.open('GET','https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
client.onreadystatechange = earthquakeResponse; // note don't use earthquakeResponse() with brackets as that doesn't work
client.send();
}
//  create the loadGeoJSONLayer
function loadEarthquakeData() {
// call the getEarthquakes code
// keep the alert message so that we know something is happening
alert("Loading Earthquakes");
getEarthquakes();
}
// create the code to wait for the response from the data server, and process the response once it is received
function earthquakeResponse() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// once the data is ready, process the data
var earthquakedata = client.responseText;
loadEarthquakelayer(earthquakedata);
}
}