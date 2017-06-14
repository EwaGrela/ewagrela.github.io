document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
    const allFirstParagraphs = document.querySelectorAll("a p:nth-of-type(1)");
    console.log(allFirstParagraphs);
   	
   	const allLinks = document.querySelectorAll("a");
   	console.log(allLinks);
   	for( var i = 0; i<allLinks.length; i++){
   		allLinks[i].addEventListener("mouseover", function(e){
   			console.log(this.firstElementChild, this.firstElementChild.nextElementSibling);
   			const firstChild = this.firstElementChild;
   			const secondChild = this.firstElementChild.nextElementSibling;
   			firstChild.classList.add("invisible");
   			secondChild.classList.remove("invisible");
   		});

   		allLinks[i].addEventListener("mouseleave", function(e){
   			console.log(this.firstElementChild, this.firstElementChild.nextElementSibling);
   			const firstChild = this.firstElementChild;
   			const secondChild = this.firstElementChild.nextElementSibling;
   			firstChild.classList.remove("invisible");
   			secondChild.classList.add("invisible");
   		});
   	}

    
   
});


