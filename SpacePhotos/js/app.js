$(function(){
	console.log("ok");
	
	var url = "https://api.nasa.gov/planetary/apod?api_key=KccPwISO0s0riweKaFrZWI36je61zICPmtHqVt86"
	var welcomeSection = $("#welcomeSection");
	var header1 = welcomeSection.find("h1");
	var header2 = welcomeSection.find("h2");
	var header3 = welcomeSection.find("h3");
	var buttonMore = welcomeSection.find("button");
	var descriptionSection = $("#descriptionSection");
	var descriptionPar = $("#descriptionArticle").find("p");
	buttonMore.on("click", function(event) {
        //event.preventDefault();
        var href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, 2000);
    });
	//console.log(header1, header2);
	function insertContent(photos) {
    	$.each(photos, function(indexPhoto, photo) {
        	welcomeSection.css("background-image", "url("+photo.url+")");
        	header1.text(photo.title);
        	header2.text(photo.date);
        	header3.text(photo.url);
        	descriptionPar.text("photo source: " + photo.explanation);
    	});
  	}
  	
  	insertContent()


	$.ajax({
		method : "GET",
		url: url,
		dataType: 'json',
	
	}).done(function(response){
		insertContent([response]);
	}).fail(function(error){
		console.log(error);
		console.log("błąd");
	});

//commented out so the APOD loads faster
/*
	var gallerySection = $("#gallerySection");
	var gallery = $("#pictureGallery");

	var newUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=HQ1pvJvn0Hj1mDjGjiEXtboTU2jM6mQmxPkaOV3S"
	function insertPhotos(images) {
    	$.each(images, function(index, image) {
    		//console.log(image, index);
    		//console.log(image.img_src);
    		console.log(image.earth_date);
    		if(index<3){
    			var img = $("<img>");
    			img.attr("src", image.img_src);
    			img.appendTo(gallery);
    		}
    		
    			
    	});
  	}
  	insertPhotos();
  	
  	$.ajax({
		method : "GET",
		url: newUrl,
		dataType: 'json',
	}).done(function(response){
		insertPhotos(response.photos);
	}).fail(function(error){
		console.log(error);
		console.log("błąd");
	});
	
	var loadingBtn = $("<button id='loadingBtn'>");
	loadingBtn.text("load more");
	loadingBtn.insertBefore(gallery);
	loadingBtn.one("click", function(event){
		$(this).remove();
		var invisiblePics = $("img").not(":visible");
		invisiblePics = invisiblePics.slice(4,25);
		
		for(var i=0; i<invisiblePics.length; i++){
			$(invisiblePics[i]).show();
		} 

	})
	
	function insertMorePhotos(images) {
    	$.each(images, function(index, image) {
    			var img = $("<img>");
    			//img.text(image.earth_date);
    			img.attr("src", image.img_src);
    			img.appendTo(gallery);
    			img.hide();
    			
    	});
  	}
  	insertMorePhotos();



  	$.ajax({
		method : "GET",
		url: newUrl,
		dataType: 'json',
	//data: myObject
	//data: JSON.stringify(myObject)
	}).done(function(response){
		insertMorePhotos(response.photos);
	}).fail(function(error){
		console.log(error);
		console.log("błąd");
	});

*/	
	
})