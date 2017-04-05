$(function(){
	
	var list = $("ul");
	var slider = $(".slider");
	var allLis = list.find("li");
	var image = $("img");
	var next = $("button:nth-of-type(2)");
	var prev = $("button:nth-of-type(1)");
	console.log(next, prev);
	var section = slider.parent();

	var firstClone = allLis.first().clone();
	firstClone.appendTo(list);

	var lastClone = allLis.last().clone();
	lastClone.prependTo(list);

	var imageWidth = image.width();
	var imageHeight = image.height();
	var numberOfSlides = (allLis.length +2);
	
	
	section.css("width", imageWidth+"px");
	slider.css("width", imageWidth+"px").css("height", imageHeight+"px");
	list.css("width", numberOfSlides*imageWidth+"px").css("position", "relative");;
	list.css("left", "-"+imageWidth+"px");
	var index = 1;
	next.on("click", function(event){
			list.animate({
				left: "-="+imageWidth+"px"
				},1000, function(){
					index++;
					if(index===(numberOfSlides)){
						index=1;
						list.css("left", "-"+imageWidth+"px");
					}
				})

		
		
	})

	
	prev.on("click", function(event){
		list.animate({
			left: "+="+imageWidth+"px"
		}, 1000, function(){
			index--;
			if(index===0){
				index = numberOfSlides;
				list.css("left","-"+(imageWidth*numberOfSlides)+"px");
			}
		})
	})
})