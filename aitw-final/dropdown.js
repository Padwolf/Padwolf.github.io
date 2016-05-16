// JavaScript Document

function dropDown(){
	document.getElementById("ddMenu").classList.toggle("show");
}

window.onclick = function(event) {
	Console.log("Click");
	if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
  		var i;
	    for (i = 0; i < dropdowns.length; i++) {
		    var openDropdown = dropdowns[i];
	    	if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
    	}
	}
}