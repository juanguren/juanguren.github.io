
window.onload = function() {

  document.getElementById('spotify').style.display = 'none';
  document.getElementById('instagram').style.display = 'none';
};

function mostrar_spot(){
	var sp = document.getElementById("spotify");

	if (sp.style.display === "none") {
		sp.style.display = "block";
	} else{
		sp.style.display = "none";
	}
}

const instaleap = document.getElementById("instaLink");
instaleap.style.textDecoration = "none";

function show_text() {
	document.getElementById("show").style.display = "inline"; 
}

setTimeout("show_text()", 7000);
