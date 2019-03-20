

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

function show_text() {
	document.getElementById("show").style.display = "inline"; 
}

setTimeout("show_text()",13000);
