$(function() {
    $('body').scrollTop(0);
    //console.log("trivia & test update");
    //console.log(testBoard);
    /*trivia game */
    var triviaRef = firebase.database().ref("/quizes");
    //put the code regarding quizes inside the reference to the database, so it is accessed
    triviaRef.once("value").then(function(data) {
        var test = data.val();
        //console.log(test);
        triviaBtn.on("click", function(event) {
            //console.log("trivia");
            var triviaBoard = $("<div>");
            triviaBoard.addClass("board");
            triviaBoard.insertAfter(triviaSectionHeader);
            header.hide();
            notTriviaSections.hide();
            footer.hide();
            triviaSection.attr("id", "triviaSection");
            triviaSection.removeClass("invisible");
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

        //create first question after choosing one of the buttons starting quiz
        triviaSection.on("click", ".startTrivia", function(event) {
            $(this).hide();
            $(this).siblings().hide()
            triviaHeaderOne.hide();
            var indicator = $(this).index();
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
                    for (var i = 0; i < answers.length; i++) { //create equal number of labels and answers
                        var label = $("<label>");
                        label.appendTo(quizDiv);
                    }
                    var labels = quizDiv.find("label");
                    for (var i = 0; i < labels.length; i++) {
                        $(labels[i]).text(answers[i]); //label text corresponds to the answer text

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
                        $(this).parent().siblings("label").removeClass(); //ensure you only color the chosen answer
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

            // penalty for not giving answers within time, depending on level there is less time
            if ($(this).index() === 0) {
                var seconds = 10 * questionSet;

            } else if ($(this).index() === 1) {
                var seconds = 8 * questionSet;
            } else {
                var seconds = 5 * questionSet;
            }
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
                    secondsInfo.on("click", function() {
                        location.reload();
                    })
                    points = 0;

                }
                if (index >= questionSet) {
                    clearInterval(interval);
                    console.log(newSeconds);
                    $(".quizDiv").hide();
                    $(".quizDiv").prev().hide();

                }

            }, 1000);

            //each time a 'next' button is hit, the answers are collected, points are counted
            triviaSection.on("click", ".quizButton", function(event) {
                if (index < questionSet) {
                    var checked = $(this).siblings("label").find("input:checked");
                    var value = checked.attr("value");
                    console.log(value);
                    if (value === "true") {
                        points++;
                    }
                    //not giving answer is not reccomended, you can't move forward and the time still is running
                    if (value === undefined) {
                        createAlertBox($("#triviaBoard"));
                    } else {
                        index++;
                        createQuestion();
                        $(this).parent().hide();
                        $(this).parent().prev().hide();

                    }
                    //once there are no more questions to answer, the results are published
                } else {
                    createResultsBoard();
                }


            })

            //this function creates results board and show the calculated results
            function createResultsBoard() {
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
                if (points >= questionSet / 1.3) {
                    resultsBoard.text(points + " out of " + questionSet + " points! a true 90s kid!");
                }
                //allow test repetition, if you want to play again
                createComebackBtn(resultsBoard);
            }

        })
        //alerts need to be removed after you decide to move on with the quiz
        triviaSection.on("click", ".hideAlertBtn", function() {
            $(this).parent().remove();
        })

        //refresh the page when finished and be able to play again
        triviaSection.on("click", ".comeback", function(event) {
            location.reload();
        })

    });


    /*functions & events for personality test - works similarly, but the results are counted differently 
     */

    var collectedAnswers = []; //this array stores your answers, later they are counted
    var testRef = firebase.database().ref("/personality");
    //putting all code  regarding the quiz inside the reference to the database so the data can be accessed
    testRef.once("value").then(function(data) {
        var quiz = data.val();
        //console.log(quiz);
        //starting personality test
        startingBtn.on("click", function(event) {
            $(this).hide();
            header.hide();
            notTestSections.hide();
            footer.hide();
            testSection.attr("id", "testSection");
            testSection.removeClass("invisible");
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
            testTitle.prependTo($("#testBoard"));
            //console.log(test);
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
                    for (var i = 0; i < answers.length; i++) { //create equal number of labels and answers
                        var label = $("<label>");
                        label.appendTo(quizDiv);
                    }

                    var labels = quizDiv.find("label");
                    for (var i = 0; i < labels.length; i++) {
                        $(labels[i]).text(answers[i].answer); //answer text corresponds with label
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
                        $(this).parent().siblings("label").removeClass(); //colour only the chosen label
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
            //hittins "next" button created next question, while the answers are pushed into the array and evaluated
            testSection.on("click", ".quizButton", function(event) {
                var labels = $(this).siblings("label");
                //console.log(labels);
                var checked = labels.find("input:checked");
                //console.log(checked);
                var labelText = checked.parent().text();
                //console.log(labelText);
                var dataText = checked.parent().attr("data");
                if (index < questionSet) {
                    //you cannot move on if no answer is given
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
                    //once the questions are all answered, the results are generated
                } else {
                    showResults();
                }

            })
            //this function counts the occurences of each answer and generates your result
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

        });


        testSection.on("click", ".hideAlertBtn", function() {
            $(this).parent().remove();
        });

        testSection.on("click", ".comeback", function(event) {
            location.reload();
        });


    });



});