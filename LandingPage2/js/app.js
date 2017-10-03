const hamburger = document.querySelector(".hamburger");
const dropDownMenu = document.querySelector(".drop-down");
hamburger.addEventListener("click", changeDisplay);
function changeDisplay(){
	this.classList.toggle("focus");
	dropDownMenu.classList.toggle("invisible");

};

$(function(){
	/* making the menu stick */
	const menu = $(".menu");
	const list = menu.find("ul.menu-list");
	const menuPosition = menu.offset();
	const topPosition = menuPosition.top;

	$(window).on("scroll", function(event){
		const scrollTop = $(this).scrollTop();
		(scrollTop>topPosition) ? menu.addClass("sticky") : menu.removeClass("sticky");
	})

	$(window).on("resize", function(event){
		const position = menu.position();
		const scrollTop2 = $(this).scrollTop();
		(scrollTop2>position) ? menu.addClass("sticky") : menu.removeClass("sticky");
	})

	/* making scroll to the content */
	const links = $(".menu").find("a");
	console.log(links);
	links.on("click", function(event){
		event.preventDefault();
		const href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(href).offset().top
		}, 2500)
	})

	const scrollButton = $("#scroll-button");
	scrollButton.on("click", function(event){
		event.preventDefault();
		const href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(href).offset().top
		}, 3500)
	})

})

