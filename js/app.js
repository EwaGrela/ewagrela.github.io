document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
    var grid = document.querySelector(".grid");
    console.log(grid);
    var links = grid.querySelectorAll("a");
    console.log(links);
    for( var i =0; i<links.length; i++){
      
       links[i].addEventListener("mouseover", function(event){
           
            var diamond = this.nextElementSibling;
           
            diamond.classList.remove("invisible");
            if(diamond.hasAttribute("data", "hovered")){
                diamond.classList.add("invisible");
            }
            
            var timeout2 = setTimeout(function(){
                diamond.setAttribute("data", "hovered");
               diamond.classList.add("invisible");
               //diamond.parentNode.removeChild(diamond);
            }, 2200);

       })
       
    }
    


});


