$(function() {

    console.log("changing this");
    //showing content of hamburger menu
    hamburgerMenu.on("click", function(event) {
        navigation.toggleClass("invisible");
        hamburgerMenu.toggleClass("focus");
    });
    //event button directing to the games

    toTheGamesBtn.on("click", function(event) {
        //event.preventDefault();
        var href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, 4000);
    });

    // other scrolling events
    //events scrolling to sections
    linksInMenu.on("click", function(event) {
        var href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, 2000);
    });
    //event scrolling the page up from footer

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
    talkButton.on("click", function(event) {
        //$(this).hide();
        var parToShow = $(this).next()
        //console.log(parToShow);
        parToShow.toggle();
        var otherPars = $(this).siblings("p").not(parToShow);
        //console.log(otherPars, otherPars.length);
        otherPars.hide();
    })

    //events for learn section
    var textRef = firebase.database().ref("/texts");
        textRef.once("value").then(function(data) {
        texts = data.val();
        console.log(texts);
        learnBtn.on("click", function(event) {
        var infoBoard = $("<article>", {
            class: "infoBoard"
        });
        infoBoard.appendTo(learnSection);
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
        
        var photoDiv = $("<div>", {class: "photoDiv"});
        photoDiv.insertAfter(infoParagraph);
        photoDiv.attr("id", "board" + (index+1)); //ten fragment kodu jeszcze nie wiem, czy wykorzystam - miał być, by dawać zdj. w tle inne każdemu art.

        infoParagraph.text(texts[index]);

    })


    });
    

    learnSection.on("click", ".hideBtn", function(event) {
        $(this).parent().remove();
        learnArt.children("div#buttons").fadeIn(1400);
        learnArt.children("h1").show();
        learnArt.children("h2").show();
    })


    //events for trivia game - dynamic 

    var triviaRef = firebase.database().ref("/quizes");
    triviaRef.once("value").then(function(data) { //put it inside the reference to the database, so the code is accessed
        test = data.val();
        console.log(test);

        triviaBtn.on("click", function(event) {
            //console.log("trivia");
            var triviaBoard = $("<div>");
            triviaBoard.addClass("board");
            triviaBoard.insertAfter(triviaSectionHeader);
            header.hide();
            notTriviaSections.hide();
            footer.hide();
            triviaSection.show();
            triviaBoard.attr("id", "triviaBoard");
            for (var i = 0; i < 3; i++) {
                var button = $("<button></button>");
                button.appendTo(triviaBoard);
                button.attr("class", "startTrivia");

            }

            var startTrivias = $(".startTrivia");
            startTrivias.eq(0).text("Easy");
            startTrivias.eq(1).text("Medium");
            startTrivias.eq(2).text("Hard");

        })


        triviaSection.on("click", ".startTrivia", function(event) {
            $(this).hide();
            $(this).siblings().hide()
            triviaHeaderOne.hide();
            var indicator = $(this).index();
            //console.log(indicator);
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
                    inputs.on("change", function(event) {
                        $(this).parent().addClass("checked");
                        $(this).parent().siblings("label").removeClass(); //w ten sposób kolorujemy zaznaczoną labelkę i tylko nią
                    });
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
                    resultsBoard.text(points + " out of " + questionSet + " points, learn a bit more");
                }
                if (points >= questionSet / 2 && points < questionSet / 1.25) {
                    resultsBoard.text(points + " out of " + questionSet + " points! not bad at all!");
                }
                if (points >= questionSet / 1.25) {
                    resultsBoard.text(points + " out of " + questionSet + " points! a true 90s kid!");
                }

                createComebackBtn(resultsBoard);
            }



            triviaSection.on("click", ".quizButton", function(event) {
                if (index < questionSet) {
                    var checked = $(this).siblings("label").find("input:checked");
                    var value = checked.attr("value");
                    console.log(value);
                    if (value === "true") {
                        points++;
                        //console.log(points);
                    }
                    if (value === undefined) {
                        createAlertBox($("#triviaBoard"));
                    } else {
                        index++;
                        createQuestion();
                        $(this).parent().hide();
                        $(this).parent().prev().hide();

                    }
                } else {

                    createResultsBoard();
                }



            })

        })
        
        triviaSection.on("click", ".hideAlertBtn", function() {
            //$(this).remove();
            $(this).parent().remove();
        })
        
        triviaSection.on("click", ".comeback", function(event) {
            location.reload();
        })




    });




})