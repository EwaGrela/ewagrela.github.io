// events for memory game:
/**/
$(function() {
    console.log("DOM loaded");
    var points = 0;
    var clicks = 0;
    var initiatingBtn = $("button#memoryGame");
    console.log(initiatingBtn);
    initiatingBtn.on("click", function(event) {
        var memoryBoard = $("<div>", {
            id: "gameBoard"
        });
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
        var coveringBtn = $("<button>", {
            id: "coveringBtn"
        });
        coveringBtn.insertAfter(memoryBoard);
        coveringBtn.text("hide them");
        coveringBtn.one("click", function(event) {
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

    gameSection.on("click", ".boardDiv", function(event) {
        //console.log("working");
        //console.log($(this));
        clicks++
        console.log(clicks);
        $(this).removeClass("covered");
        var target = $(this);
        var timeout = setTimeout(function() {
            target.addClass("covered");
        }, 1200);

        var className = $(this).prop("className");
        //console.log(className, typeof className);
        //console.log(className.length);
        var lastLetterIndex = (className.length);
        //var toRemove = className.slice(0,9);
        //console.log(toRemove);
        var properClassName = className.slice(9, lastLetterIndex);
        //console.log(properClassName, properClassName.length);
        var divsSameClass = $("." + properClassName);
        //console.log(divsSameClass);
        for (var i = 0; i < divsSameClass.length; i++) {
            if (divsSameClass.eq(0).prop("className") === divsSameClass.eq(1).prop("className")) {
                divsSameClass.animate({
                    "opacity": 0
                }, 1400)
                divsSameClass.addClass("opaque");
                points++;
                console.log(points, clicks);

            }

        }
        var opaqueDivs = $(".opaque");
        console.log(opaqueDivs.length);
        var finalScore = (points * 10) - clicks;
        if (opaqueDivs.length === 20) {
            $("#gameBoard").hide();
            var resultsDiv = $("<div>");
            resultsDiv.attr("id", "resultsDiv");
            resultsDiv.appendTo(gameSection);
            resultsDiv.text("congrats! you earned " + finalScore + " points!")
        }

    })




})