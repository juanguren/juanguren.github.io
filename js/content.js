
/*var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List 
images[0] = "images/green.jpg";
images[1] = "images/co.jpg";
images[2] = "images/sun.jpg";
images[3] = "images/sf.jpg";
images[4] = "images/knowledge.jpg";
images[5] = "images/hold.jpg"; */

window.onload = function() {

  document.getElementById('spotify').style.display = 'none';
  document.getElementById('px_photo').style.display = 'none';
};

function mostrar_spot(){

	var sp = document.getElementById("spotify");
	if (sp.style.display === "none")
{
		sp.style.display = "block";
}	else {
		sp.style.display = "none";
	}
}

function mostrar_px(){

	var px = document.getElementById("px_photo");
	if (px.style.display === "none")
{
		px.style.display = "block";
}	else {
		px.style.display = "none";
	}
}

/*// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg; */

function show_text() {
	document.getElementById("show").style.display = "inline"; 
}

setTimeout("show_text()",13000);


