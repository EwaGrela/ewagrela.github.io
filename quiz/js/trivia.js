$(function() {
    //console.log("DOM loaded");
    var header = $("header");
    var footer = $("footer");
    var triviaBtn = $("#triviaGame").find("button");
    var triviaSection = $(".triviaSection");
    var sections = $("section").not(triviaSection);
    var gamesSection = $("#gamesSection");

    function randomize(elements) {
        for (var i = 0; i < elements.length; i++) {
            var j = Math.floor(Math.random() * elements.length);
            var temp = elements[i];
            elements[i] = elements[j];
            elements[j] = temp;
        }
        return elements;
    }



    var triviaTest = firebase.database().ref("/trivia");
    triviaTest.once("value").then(function(data) {
        var test = data.val();
        var indicator = Math.floor(Math.random() * test.length);
        var quiz = test[indicator];
        var questions = quiz.questions;
        var quizTitle = quiz.myTitle;
        var quizSet = questions.length; //to użyte aby dało się dodawać pytania, nie musi być 11, można inną tablicę podać
        var index = 0; //index początkowego pytania, będzie wzrastał
        var points = 0; //liczba punktów na starcie gry, równa zero;

        triviaBtn.on("click", function(event) {
            $(this).parent().hide();
            triviaSection.removeClass("invisible");
            sections.hide();
            var triviaBoard = $("<div>");
            triviaBoard.addClass("board");
            triviaBoard.appendTo(triviaSection);
            triviaBoard.attr("id", "triviaBoard");
            var button = $("<button>start quiz</button>");
            button.appendTo(triviaBoard);
            button.attr("id", "startTrivia");

        })




        function createQuestion() {
            if (index < quizSet) {
                var h5 = $("<h5>", {
                    class: "title"
                });
                h5.appendTo(triviaBoard);

                var answers = questions[index].answers;
                randomize(answers);

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
                    $(this).parent().siblings("label").removeClass();
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

        triviaSection.on("click", "#startTrivia", function(event) {
            $(this).hide();
            randomize(questions);
            var testTitle = $("<h3>");
            testTitle.prependTo(triviaBoard);
            testTitle.text(quiz.myTitle);
            createQuestion();

        })


        triviaSection.on("click", ".quizButton", function(event) {
            if (index < quizSet) {
                var checked = $(this).siblings("label").find("input:checked");
                var value = checked.attr("value");
                console.log(value);
                if (value === "true") {
                    points++;
                    console.log(points);
                }
                if (value === undefined) {
                    createAlertBox();
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

        function createAlertBox() {
            var alertBox = $("<div>", {
                class: "alertBox"
            });
            alertBox.prependTo(triviaBoard);
            alertBox.text("in order to proceed, you have to choose an answer!");
            var hideAlertBtn = $("<button>", {
                class: "hideAlertBtn"
            });
            hideAlertBtn.appendTo(alertBox);
            hideAlertBtn.text("ok")
        }

        triviaSection.on("click", ".hideAlertBtn", function() {
            $(this).hide();
            $(this).parent().hide();
        })

        function createResultsBoard() {
            var resultsBoard = $("<div>", {
                class: "resultsBoard"
            });
            resultsBoard.appendTo(triviaSection);
            triviaSection.children().not(resultsBoard).hide();
            if (points < quizSet / 2) {
                resultsBoard.text(points + " out of " + quizSet + " points, learn a bit more");
            }
            if (points >= quizSet / 2 && points < quizSet / 1.25) {
                resultsBoard.text(points + " out of " + quizSet + " points! not bad at all!");
            }
            if (points >= quizSet / 1.25) {
                resultsBoard.text(points + " out of " + quizSet + " points! good for you!");
            }

        }



    });



})