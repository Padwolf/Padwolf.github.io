// JavaScript Document

function openDropDown(id){
	//console.log("dd");
	//document.getElementById("ddMenu").classList.toggle("show");
	if (!document.getElementById(id).classList.contains("show")){
		document.getElementById(id).classList.add("show")
	}
}

function closeDropDown(id){
	if (document.getElementById(id).classList.contains("show")){
		document.getElementById(id).classList.remove("show")
	}
}

/*
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	    console.log("click");
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
*/