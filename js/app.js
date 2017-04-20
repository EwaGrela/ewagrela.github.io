document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
    var bigSquares = document.querySelectorAll(".square-big");
    console.log(bigSquares);
    for (var i = 0; i<bigSquares.length; i++){
    	bigSquares[i].addEventListener("mouseover", function(){
    			this.children[1].classList.remove("invisible");
    	})
    	bigSquares[i].addEventListener("mouseout", function(){
    			this.children[1].classList.add("invisible");
    	})
    }
    


});


