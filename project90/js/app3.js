 /*
 var clicks = 0;
    var score =0;
    initiatingBtn.on("click", function() {
        var memoryBoard = $("<div>", {id:"gameBoard"});
        memoryBoard.addClass("board");
        memoryBoard.appendTo(gameSection);

        lowerContent.remove();
        otherSections.hide();
        header.hide();
        footer.hide();
        $(this).hide();
        
        
        
        for (var i = 0; i < 20; i++) {
            var newDiv = $("<div>", {
                class: "boardDiv"
            });
            newDiv.appendTo(memoryBoard);

        }
        randomize(classes);
        var boardDiv = $(".boardDiv");
        var coveringBtn = $("<button>", {id: "coveringBtn"});
        coveringBtn.insertAfter(memoryBoard);
        coveringBtn.text("hide them");
        coveringBtn.one("click", function(event){
            //console.log("ok");
            boardDiv.addClass("covered");
            $(this).remove();
        })

        function addRandomClass(classes) {
            boardDiv.each(function(index) {
                $(this).addClass(classes[index]);
            });
        }
        addRandomClass(classes);
        
    })

    

    gameSection.on("click", ".covered", function(event) {
        $(this).removeClass("covered");
        var uncoveredDivs = $(".boardDiv").not(".covered");
        var className = $(this).prop("className");
        clicks++;
        uncoveredDivs.each(function(index, value) {
            var divsLength = uncoveredDivs.length
            if (uncoveredDivs.length ===2 && uncoveredDivs[0].className === uncoveredDivs[1].className) {
                uncoveredDivs.animate({
                    "opacity": 0
                }, 1400);
                score++;
                uncoveredDivs.addClass("uncovered").removeClass("covered");
                var doneDivs = $(".uncovered");
                console.log(doneDivs.length);

            } else {
                var target = $(this);
                setTimeout(function() {
                    target.addClass("covered");
                }, 2000);
            }
       })
        var finalScore = (score * 10) - (clicks / 2);
        console.log(finalScore,  typeof finalScore, clicks);
        var doneDivs = $(".uncovered");
        if(doneDivs.length ===20) {
            $("#gameBoard").hide();
           var resultsDiv = $("<div>");
           resultsDiv.attr("id","resultsDiv");
           resultsDiv.appendTo(gameSection);
           resultsDiv.text("congrats! you earned " + finalScore + " points!")
        }

    })
 */
 // events for memory game:
/**/
 $(function(){
    console.log("DOM loaded");
    var points = 0;
    var clicks = 0;
    initiatingBtn.on("click", function(event){
        var memoryBoard = $("<div>", {id:"gameBoard"});
        memoryBoard.addClass("board");
        memoryBoard.appendTo(gameSection);
        lowerContent.remove();
        otherSections.hide();
        header.hide();
        footer.hide();
        $(this).hide();
        
        
        
        for (var i = 0; i < 20; i++) {
            var newDiv = $("<div>", {
                class: "boardDiv"
            });
            newDiv.appendTo(memoryBoard);

        }
        randomize(classes);
        var boardDiv = $(".boardDiv");
        var coveringBtn = $("<button>", {id: "coveringBtn"});
        coveringBtn.insertAfter(memoryBoard);
        coveringBtn.text("hide them");
        coveringBtn.one("click", function(event){
            //console.log("ok");
            boardDiv.addClass("covered");
            $(this).remove();
        })

        function addRandomClass(classes) {
            boardDiv.each(function(index) {
                $(this).addClass(classes[index]);
            });
        }
        addRandomClass(classes);
        
    })

    gameSection.on("click", ".boardDiv", function(event){
            //console.log("working");
            //console.log($(this));
            clicks ++
            console.log(clicks);
            $(this).removeClass("covered");
            var target = $(this);
            var timeout = setTimeout(function() {
                    target.addClass("covered");
                }, 2000);

        var className = $(this).prop("className");
        //console.log(className, typeof className);
        //console.log(className.length);
        var lastLetterIndex = (className.length);
        //var toRemove = className.slice(0,9);
        //console.log(toRemove);
        var properClassName = className.slice(9,lastLetterIndex);
        //console.log(properClassName, properClassName.length);
        var divsSameClass = $("."+properClassName);
        //console.log(divsSameClass);
        for ( var i=0; i<divsSameClass.length; i++) {
            if(divsSameClass.eq(0).prop("className")===divsSameClass.eq(1).prop("className")){
                divsSameClass.animate({
                    "opacity" : 0
                }, 1400)
                divsSameClass.addClass("opaque");
                //var opaqueDivs = $(".opaque");
                //console.log(opaqueDivs.length);
                points ++;
                console.log(points, clicks);
                
            }

        }
        var opaqueDivs = $(".opaque");
        console.log(opaqueDivs.length);
        var finalScore = (points * 10) - clicks;
        if(opaqueDivs.length ===20) {
            $("#gameBoard").hide();
           var resultsDiv = $("<div>");
           resultsDiv.attr("id","resultsDiv");
           resultsDiv.appendTo(gameSection);
           resultsDiv.text("congrats! you earned " + finalScore + " points!")
        }

    })

    
    


    




 })
    