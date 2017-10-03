$(function(){
	const header = $(".header");
	const menuElement = $("menu");
	const links = menuElement.find("a");
	links.on("click", function(event){
		event.preventDefault();
		//console.log("działa");
		const hrefValue = $(this).attr("href"); //pobranie do zmiennej atrybutu href
		console.log(hrefValue);
		const where = $(hrefValue).offset().top
		$("html, body").animate({
			scrollTop: where
		}, 2000)
	})
	
})