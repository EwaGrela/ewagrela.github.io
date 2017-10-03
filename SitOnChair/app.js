const hamburger = document.querySelector(".hamburger");

const dropDownMenu = document.querySelector(".dropdown-menu");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu(){
	this.classList.toggle("focus");
	this.nextElementSibling.classList.toggle("invisible");
}

const slider = document.querySelector(".slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const listElements = document.querySelectorAll(".slider li");
const sliderLength = listElements.length;
let index = 0;
listElements[index].classList.add("visible");
nextBtn.addEventListener("click",function(event){
	index ++;
	listElements[index-1].classList.remove("visible");
	if(index>=sliderLength){
		index = 0;
	}
	listElements[index].classList.add("visible");
	
});
prevBtn.addEventListener("click",function(event){
	index --;
	listElements[index+1].classList.remove("visible");
	if(index<0){
		index = sliderLength -1;
	}
	listElements[index].classList.add("visible")
});

