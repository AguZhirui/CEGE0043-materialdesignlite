function trackAndCircle(){
	//call dunctions in othe js file
	trackLocation();
	addPointLinePoly();
	getEarthquakes();
}

function startup() {
document.addEventListener('DOMContentLoaded', function() {
trackAndCircle ();
getPort()
}, false);
document.addEventListener('DOMContentLoaded',function(){
loadW3HTML();
}

function loadW3HTML() {
w3.includeHTML();
}