// JavaScript Document
function setWidthP(element, percent){
	element.width=window.innerWidth * percent;
}

function setHeightP(element, percent){
	element.height=window.innerHeight * percent;
}

function collectionToArray(collection){
	var tmp = [];
	for (var i = 0; i < collection.length; i++){
		tmp.push(collection.item(i));
	}
	return tmp;
}

function setH1FontByScreenSize(element){
	element.style.fontSize = ((window.innerWidth > window.innerHeight) ? "2em" : "1.5em");
}

function setH3FontByScreenSize(element){
	element.style.fontSize = ((window.innerWidth > window.innerHeight) ? window.innerWidth/683 : 0) + "em";
}

function setPFontByScreenSize(element){
	element.style.fontSize = ((window.innerWidth > window.innerHeight) ? window.innerWidth/1366 : 0) + "em";
}

function percentToPixels(percent){
	return window.innerWidth * (percent/100);
}

function setDropdownVisible(){
	document.getElementById("ddc1").style.display="block";
}

function setDropdownInvisible(){
	document.getElementById("ddc1").style.display="none";
}