const hamburger = document.querySelector(".hamburger");
const dropDownMenu = document.querySelector(".drop-down");
hamburger.addEventListener("click", changeDisplay);
function changeDisplay(){
	this.classList.toggle("focus");
	dropDownMenu.classList.toggle("invisible");

};
