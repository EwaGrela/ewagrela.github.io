// events for memory game:
$(function() {
    //keeping scroll in position
    $('body').scrollTop(0);
    var points = 0;
    var clicks = 0;
    //starting game : drawing a board and randomizing cards
    initiatingMemory.on("click", function(event) {
        console.log("working");
        var memoryBoard = $("<div>", {
            id: "gameBoard"
        });
        memoryBoard.addClass("board");
        memoryBoard.appendTo(gameSection); 
        gameSection.addClass("transparency");
        lowerContent.hide();
        otherSections.hide();
        header.hide();
        footer.hide();
        $(this).hide();
        for (var i = 0; i <20; i++) {
            var newDiv = $("<div>", {
                class: "boardDiv"
            });
            newDiv.appendTo(memoryBoard);

        }
        randomize(classes);
        var boardDiv = $(".boardDiv");
        var coveringBtn = $("<button>", {
            id: "coveringBtn"
        });
        coveringBtn.insertBefore(memoryBoard);
        var time = 10;
         coveringBtn.text("start in: " + time + " secs");
        var interval2 = setInterval(function() {
            var newTime = time -1;
            time = newTime;
            coveringBtn.text("start in: " + time + " secs");
            if(newTime ===0){
                clearInterval(interval2);
                coveringBtn.remove();
                boardDiv.addClass("covered");
                $(this).addClass("invisible");
                var gameInfo = $("<article>", {id: "gameInfo"});
                gameInfo.prependTo(gameSection);
                var clickInfo = $("<p>", {class:"clickInfo"});
                clickInfo.text(" clicks: " + clicks);
                clickInfo.prependTo(gameInfo);
            }
        },1000);
        
        function addRandomClass(classes) {
            boardDiv.each(function(index) {
                $(this).addClass(classes[index]);
            });
        }
        addRandomClass(classes);

    })
    // the countdown and the game starts once the first element on board is clicked 
    gameSection.one("click", ".boardDiv", function(event){
            var timeInfo = $("<p>", {class:"clickInfo"});
            var clickInfo =$(".clickInfo").eq(0);
            timeInfo.insertAfter(clickInfo);
            timeInfo.addClass("invisible");
            var seconds = 60;
            timeInfo.text(" time left: " + seconds + " secs");
            timeInfo.removeClass("invisible");      
            var interval = setInterval(function() {
            var newSeconds = seconds -1;
            seconds = newSeconds;
            var opaqueDivs = $(".opaque");
            timeInfo.text(" time left: " + newSeconds + " secs");
            //end the game if run out of time and not all cards are uncovered
            if((newSeconds === 0) && (opaqueDivs.length<20)){
                clearInterval(interval);  
                createGameOverBoard(gameSection);
                gameSection.removeClass("transparency");
                createComebackBtn(gameSection);
             //if all are uncovered within time, clear interval
            }
            if(opaqueDivs.length===20){
                clearInterval(interval);
            }
          
        }, 1000);

        
    })

    gameSection.on("click", ".boardDiv", function(event) {
        clicks++;
        var clickInfo = $(".clickInfo").eq(0);
        clickInfo.text(" clicks: " + clicks);
        $(this).removeClass("covered");
        var target = $(this);
        var timeout = setTimeout(function() {
            target.addClass("covered");
        }, 1200);

        var className = $(this).prop("className");
        var lastLetterIndex = (className.length);
        var properClassName = className.slice(9, lastLetterIndex);
        var divsSameClass = $("." + properClassName);
        for (var i = 0; i < divsSameClass.length; i++) {
            if (divsSameClass.eq(0).prop("className") === divsSameClass.eq(1).prop("className")) {
                divsSameClass.animate({
                    "opacity": 0
                }, 1000)
                divsSameClass.addClass("opaque");
                points++;
                
            }

        }
        var opaqueDivs = $(".opaque");
       //calculate final results if you complete the game within time
        var finalScore = (points * 10) - clicks;
        if (opaqueDivs.length === 20) {
            $("#gameBoard").hide();
            var resultsDiv = $("<div>");
            resultsDiv.attr("id", "resultsDiv");
            resultsDiv.appendTo(gameSection);
            gameSection.removeClass("transparency");
            resultsDiv.text("Congrats! You earned " + finalScore + " points!");
            createComebackBtn(gameSection);
        }

    });
    //if you want to play more, refresh the site
    gameSection.on("click", ".comeback", function(){
        location.reload();    
    });

});