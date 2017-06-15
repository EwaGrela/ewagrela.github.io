document.addEventListener("DOMContentLoaded", function() {
    const allLinks = document.querySelectorAll(".squares");
   
    for(var i = 0; i<allLinks.length; i++){
    	allLinks[i].setAttribute("data-click", 0);
    }

    if (matchMedia) {
        var mq = window.matchMedia("(max-width: 595px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }

    function WidthChange(mq) {
        if (mq.matches) {
            for (var i = 0; i < allLinks.length; i++) {
                allLinks[i].addEventListener("click", makeLinksVisibleOnMobile);

                allLinks[i].removeEventListener("mouseover", makeLinksVisible);

                allLinks[i].removeEventListener("mouseleave", makeLinksInvisible);
            }

        } else {
            for (var i = 0; i < allLinks.length; i++) {
                allLinks[i].removeEventListener("click", makeLinksVisibleOnMobile);

                allLinks[i].addEventListener("mouseover", makeLinksVisible);

                allLinks[i].addEventListener("mouseleave", makeLinksInvisible);
            }
        }
    }

    function makeLinksVisibleOnMobile(event) {
        const firstChild = this.firstElementChild;
        const secondChild = this.firstElementChild.nextElementSibling; 
        let clickCount = this.getAttribute("data-click");
        clickCount++;
        this.setAttribute("data-click", clickCount);
        if(clickCount%2===1){
        	firstChild.classList.add("invisible");
        	secondChild.classList.remove("invisible");
        } else {
        	firstChild.classList.remove("invisible");
        	secondChild.classList.add("invisible");
        }
        

    }


    function makeLinksVisible() {
        const firstChild = this.firstElementChild;
        const secondChild = this.firstElementChild.nextElementSibling;
        firstChild.classList.add("invisible");
        secondChild.classList.remove("invisible");
    }

    function makeLinksInvisible() {
        const firstChild = this.firstElementChild;
        const secondChild = this.firstElementChild.nextElementSibling;
        firstChild.classList.remove("invisible");
        secondChild.classList.add("invisible");
    }

});