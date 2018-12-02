
window.onload = function() {

  document.getElementById('spotify').style.display = 'none';
  document.getElementById('px_photo').style.display = 'none';

};

function mostrar_spot(){

	var a = document.getElementById("spotify");
	if (a.style.display === "none")
{
		a.style.display = "block";
}	else {
		a.style.display = "none";
	}
}

function mostrar_px(){

	var b = document.getElementById("px_photo");
	if (b.style.display === "none")
{
		b.style.display = "block";
}	else {
		b.style.display = "none";
	}
}

