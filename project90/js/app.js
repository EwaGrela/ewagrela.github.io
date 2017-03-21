$(function() {
  
    //showing content of hamburger menu

    hamburgerMenu.on("click", function(event) {
        navigation.toggle(2000);
        hamburgerMenu.toggleClass("focus");
    })
    //event button directing to the games
    toTheGamesBtn.on("click", function(event) {
        $(this).hide();
        $(this).parent().hide();
        otherSections.hide();
        footer.hide();
    })

    //scrolling events
    //event scrolling the page up
    var scrollingButton =  footer.find("button");
    scrollingButton.on("click", function(event) {
        event.preventDefault();
        var href = $(this).attr("href");
        console.log(href);
        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, 2000);
    })
    //events for infoSection
    var talkButton = infoSection.find("button");
    talkButton.one("click", function(event){
        $(this).hide();
        $(this).next().removeClass("hidden");
    })

    //events for learn section

    learnBtn.on("click", function(event) {
        var infoBoard = $("<div>", {
            class: "infoBoard"
        });
        infoBoard.appendTo(learnArt);
        var hideBtn = $("<button>", {
            class: "hideBtn"
        });
        infoBoard.css("z-index", 2);
        hideBtn.appendTo(infoBoard);
        var infoParagraph = $("<p>", {
            class: "infoParagraph"
        });
        infoParagraph.prependTo(infoBoard);
        hideBtn.text("hide");
        var index = $(this).index();
        console.log(index);
        infoParagraph.text(texts[index]);
        infoBoard.attr("id", "board"+index);
        
    })


    learnArt.on("click", ".hideBtn", function(event) {
        console.log("działa");
        $(this).parent().remove();
        learnArt.children("div#buttons").fadeIn(1400);
        learnArt.children("h1").show();
        learnArt.children("h2").show();
    })

    //background changing event
    /*
    var backgrounds = ["url('../images/camera-1842535_1920.jpg')","url('../images/camera-1851541_1920.jpg')","url('../images/vhs-1941725_1920.jpg')","url('../images/ghettoblaster-1452077_1920.jpg')","url('../images/polaroid-1288162_1920.jpg')"];
    console.log(backgrounds[2], typeof backgrounds[0]);
    setInterval(function() {
        var index = Math.floor(Math.random() * backgrounds.length);
        console.log(index);
       $("body:before").css("background-image", backgrounds[index]);
    }, 1000);
    */
    // events for memory game:
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
        /*
        var gameBoard = $("<div>", {
            id: "gameBoard"
        });
        var memoryBoard = $(".board");
        gameBoard.appendTo(memoryBoard);
        */
        
        
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

//events for trivia game - dynamic 
    triviaBtn.on("click", function(event) {
        //console.log("trivia");
        var triviaBoard = $("<div>");
        triviaBoard.addClass("board");
        triviaBoard.insertAfter(triviaSectionHeader);
        header.hide();
        sections2.hide();
        footer.hide();
        triviaSection.show();
        triviaBoard.attr("id", "triviaBoard");
        for ( var i = 0; i<3; i++) {
            var button = $("<button></button>");
            button.appendTo(triviaBoard);
            button.attr("class", "startTrivia");
            console.log(button);
        }
        
        var startTrivias = $(".startTrivia");
        startTrivias.eq(0).text("easy");
        startTrivias.eq(1).text("medium");
        startTrivias.eq(2).text("hardcore");
    })


triviaSection.on("click", ".startTrivia", function(event) {
    $(this).hide();
    $(this).siblings().hide()
    var indicator = $(this).index();
    console.log(indicator);
    var index = 0; //index początkowego pytania, będzie wzrastał
    var points = 0;
    var questions = test[indicator];
    var questionSet = questions.length; 
    $(this).parent().prev().hide();
    randomize(questions);
    createQuestion();

        function createQuestion() {
            if (index < questionSet) {
            var answers = questions[index].answers;
            randomize(answers);

                var h5 = $("<h5>", {
                    class: "title"
                });
                h5.appendTo(triviaBoard);
                var quizDiv = $("<div>", {
                    class: "quizDiv"
                });
                quizDiv.insertAfter(h5);
                h5.text(questions[index].title);
                for (var i = 0; i < answers.length; i++) { //w ten sposób tworzysz tyle labeli ile masz odpowiedzi
                    var label = $("<label>");
                    label.appendTo(quizDiv);
                }
                var labels = quizDiv.find("label");
                for (var i = 0; i < labels.length; i++) {
                    $(labels[i]).text(answers[i]); //tekst labelki odpowiada w kolejności tekstowi z tablicy z odpowiedziami

                }
                labels.each(function(index2, value) {
                    var input = $("<input>");
                    input.attr("type", "radio");
                    input.attr("name", "one");
                    input.prependTo($(this));

                })

                var inputs = quizDiv.find("input");
                inputs.each(function(index3, value) {
                    var labText = $(this).parent().text();
                    var correctAns = questions[index].correct;
                    if (labText === correctAns) {
                        $(this).attr("value", "true");
                    } else {
                        $(this).attr("value", "false");
                    }

                })

                var button = $("<button>", {
                    class: "quizButton"
                });
                button.appendTo(quizDiv);
                button.text("next");


            } else {
                createResultsBoard();
            }

        }

        function createResultsBoard() {
            var resultsBoard = $("<div>", {
                class: "resultsBoard"
            });
            resultsBoard.prependTo(triviaBoard);
            if (points < questionSet / 2) {
                resultsBoard.text(points + "/" + questionSet + " points, learn a bit more");
            }
            if (points >= questionSet / 2 && points < questionSet / 1.25) {
                resultsBoard.text(points + "/" + questionSet + " points! not bad at all!");
            }
            if (points >= questionSet / 1.25) {
                resultsBoard.text(points + "/" + questionSet + " points! a true 90s kid!");
            }
            

        }

        

        triviaSection.on("click", ".quizButton", function(event) {
               if (index < questionSet) {
                index++;
                $(this).parent().hide();
                $(this).parent().prev().hide();
                var checked = $(this).siblings("label").find("input:checked");
                //console.log(checked);
                //console.log(checked.length);
                var value = checked.attr("value");
                console.log(value);
            if (value === "true") {
                points++;
            }
                createQuestion();

            } else {
                createResultsBoard();
                alert("you have " + points + " points")
            }
        })

    })

    

})