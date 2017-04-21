$(function() {
     $('body').scrollTop(0);

    /*trivia game */
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
            triviaSection.css("display", "flex"); //cannot use show(), because it overrides flex display
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


        triviaSection.on("click", ".startTrivia", function(event) { //create first question
            $(this).hide();
            $(this).siblings().hide()
            triviaHeaderOne.hide();
            var indicator = $(this).index();
            //console.log(indicator);
            var index = 0; //index of first question
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

            // this gives penalty for not giving answers within time wanted
            var seconds = 10 * questionSet; //you get 10secs per question
            var secondsInfo = $("<section>", {
                class: "secondsInfo"
            });
            secondsInfo.insertAfter(triviaSection);
            
            secondsInfo.text("quiz time limit: " + seconds + " secs");
            var interval = setInterval(function() {
                var newSeconds = seconds - 1;
                seconds = newSeconds;
                secondsInfo.text(" quiz time limit: " + newSeconds + " secs");
                if (newSeconds === 0) { //
                    clearInterval(interval);
                    triviaSection.remove();
                    secondsInfo.text("Game over! Start over!");
                    secondsInfo.on("click", function(){
                        location.reload();
                    })
                    points = 0;

                }
                if (index >= createQuestion) {
                    clearInterval(interval);
                    $(".quizDiv").hide();
                    $(".quizDiv").prev().hide();

                }

            }, 1000);




            triviaSection.on("click", ".quizButton", function(event) { //collect answers and count points
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


            function createResultsBoard() { // do it when question list over
                var resultsBoard = $("<div>", {
                    class: "resultsBoard"
                });
                clearInterval(interval);
                secondsInfo.remove();
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

                createComebackBtn(resultsBoard); //allow test repetition
            }




        })

        triviaSection.on("click", ".hideAlertBtn", function() {
            //$(this).remove();
            $(this).parent().remove();
        })

        triviaSection.on("click", ".comeback", function(event) { //refresh the page when finished and be able to play again
            location.reload();
        })




    });


//functions & events for personality test

    var collectedAnswers = [];
    var testRef = firebase.database().ref("/personality");
    //putting all code inside the reference to the database so the data can be accessed
    testRef.once("value").then(function(data) {
        quiz = data.val();
        console.log(quiz);
        //starting personality test
        startingBtn.on("click", function(event) {
            $(this).hide();
            header.hide();
            notTestSections.hide();
            footer.hide();
            testSection.css("display", "flex"); //cannot use show(), because it overrides flex display
            var testBoard = $("<div>");
            testBoard.addClass("board");
            testBoard.appendTo(testSection);
            testBoard.attr("id", "testBoard");
            var divContainer = $("<div>");
            divContainer.attr("id", "divContainer");
            divContainer.appendTo(testBoard);
            for (var i = 0; i < 3; i++) {
                var button = $("<button>start test</button>");
                button.appendTo(divContainer);
                button.attr("class", "startTest");
            }

            var startTest = $(".startTest");
            startTest.eq(0).text("90s boyfriend");
            startTest.eq(1).text("Friends girls");
            startTest.eq(2).text("Harry Potter");


        })


        testSection.on("click", ".startTest", function(event) {
            var indicator = $(this).index();
            var test = quiz[indicator];
            var questions = test.questions;
            var questionSet = questions.length;
            var index = 0;
            testHeaderOne.hide();
            testSectionHeader.hide();
            var siblings = $(this).siblings();
            var parent = $(this).parent();
            $(this).remove();
            siblings.remove();
            parent.remove();
            randomize(questions);
            var testTitle = $("<h3>");
            testTitle.prependTo(testBoard);
            testTitle.text(test.myTitle);
            createQuestions();

            function createQuestions() {
                if (index < questionSet) {
                    var answers = questions[index].answers;
                    randomize(answers);

                    var h5 = $("<h5>", {
                        class: "title"
                    });
                    h5.appendTo(testBoard);
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
                        $(labels[i]).text(answers[i].answer); //tekst labelki odpowiada w kolejności tekstowi z tablicy z odpowiedziami
                        $(labels[i]).attr("data", answers[i].result);
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

                    var button = $("<button>", {
                        class: "quizButton"
                    });
                    button.appendTo(quizDiv);
                    button.text("next");


                } else {
                    showResults();
                }

            }

            testSection.on("click", ".quizButton", function(event) {
                var labels = $(this).siblings("label");
                //console.log(labels);
                var checked = labels.find("input:checked");
                //console.log(checked);
                var labelText = checked.parent().text();
                //console.log(labelText);
                var dataText = checked.parent().attr("data");
                if (index < questionSet) {
                    if (dataText === undefined) {
                        createAlertBox($("#testBoard"));
                    } else {
                        index++;
                        collectedAnswers.push(dataText);
                        console.log(collectedAnswers, collectedAnswers.length);
                        createQuestions();
                        $(this).parent().hide();
                        $(this).parent().prev().hide();
                    }

                } else {
                    showResults();
                }

            })
            //console.log(index);
            function showResults() {
                var resultsBoard = $("<div>", {
                    class: "resultsBoard"
                });
                resultsBoard.appendTo(testSection);
                testSection.children().not(resultsBoard).hide();
                var resultsParagraph = $("<p>", {
                    class: "resultsParagraph"
                })
                resultsParagraph.appendTo(resultsBoard);
                var result0 = collectedAnswers.filter(function(item) {
                    return item === quiz[indicator].results[0];
                }).length;
                var result1 = collectedAnswers.filter(function(item) {
                    return item === quiz[indicator].results[1];
                }).length;
                var result2 = collectedAnswers.filter(function(item) {
                    return item === quiz[indicator].results[2];
                }).length;
                console.log(result0, result1, result2);
                if (result0 > result1 && result0 > result2) {
                    resultsParagraph.text(quiz[indicator].descriptions[0]);
                } else if (result1 > result0 && result1 > result2) {
                    resultsParagraph.text(quiz[indicator].descriptions[1]);
                } else if (result2 > result0 && result2 > result1) {
                    resultsParagraph.text(quiz[indicator].descriptions[2]);
                } else {
                    resultsParagraph.text(quiz[indicator].descriptions[3]);
                }
                createComebackBtn(resultsBoard);
            }

        })


        testSection.on("click", ".hideAlertBtn", function() {
            //$(this).remove();
            $(this).parent().remove();
        })

        testSection.on("click", ".comeback", function(event) {
            location.reload();
        })




    })



});