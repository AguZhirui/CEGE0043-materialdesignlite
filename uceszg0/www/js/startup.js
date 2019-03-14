function trackAndCircle(){
	//call dunctions in othe js file
	trackLocation();
	addPointLinePoly();
}

function startup() {
document.addEventListener('DOMContentLoaded', function() {
trackAndCircle ();
}, false);
}
