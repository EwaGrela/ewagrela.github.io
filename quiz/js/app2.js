$(function() {


    function randomize(elements) {
        for (var i = 0; i < elements.length; i++) {
            var j = Math.floor(Math.random() * elements.length);
            var temp = elements[i];
            elements[i] = elements[j];
            elements[j] = temp;
        }
        return elements;
    }

    var startingBtn = $("#psychoTest").find("button");
    var testSection = $("#testSection");
    var sections = $("section").not(testSection);
    var header = $("header");
    var footer = $("footer");
    var h1 = testSection.find("h1");
    var gamesSection = $("#gamesSection");
    var collectedAnswers = [];

    var psychoTest = firebase.database().ref("/psychotest");
    psychoTest.once("value").then(function(data) {
        quiz = data.val();
        console.log(quiz);
        startingBtn.on("click", function(event) {
            $(this).hide();
            sections.hide();
            testSection.show();
            var testBoard = $("<div>");
            testBoard.addClass("board");
            testBoard.appendTo(testSection);
            testBoard.attr("id", "testBoard");
            var button = $("<button>start test</button>");
            button.appendTo(testBoard);
            button.attr("id", "startTest");
        })



        var indicator = Math.floor(Math.random() * quiz.length);

        var test = quiz[indicator];

        var questions = test.questions;

        //console.log(quiz[indicator].results[0]);
        testSection.on("click", "#startTest", function(event) {
            $(this).hide();
            randomize(questions);
            var testTitle = $("<h3>");
            testTitle.prependTo(testBoard);
            testTitle.text(test.myTitle);
            createQuestion();
        })

        var questionSet = questions.length;
        var index = 0;

        function createQuestion() {
            if (index < questionSet) {
                var h5 = $("<h5>", {
                    class: "title"
                });
                h5.appendTo(testBoard);

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
                inputs.on("change", function(event){
                    $(this).parent().addClass("checked");
                    $(this).parent().siblings("label").removeClass();
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
            console.log(labelText);
            var dataText = checked.parent().attr("data");
            if (index < questionSet) {
                if (dataText === undefined) {
                    //alert("choose answer!");
                    createAlertBox();
                } else {
                    index++;
                    collectedAnswers.push(dataText);
                    console.log(collectedAnswers, collectedAnswers.length);
                    createQuestion();
                    $(this).parent().hide();
                    $(this).parent().prev().hide();
                }

            } else {
                showResults();
            }



        })

        function createAlertBox() {
            var alertBox = $("<div>", {
                class: "alertBox"
            });
            alertBox.prependTo(testBoard);
            alertBox.text("in order to proceed, you have to choose an answer! otherwise, you shall not pass");
            var hideAlertBtn = $("<button>", {
                class: "hideAlertBtn"
            });
            hideAlertBtn.appendTo(alertBox);
            hideAlertBtn.text("hide me")
        }

        testSection.on("click", ".hideAlertBtn", function() {
            $(this).hide();
            $(this).parent().hide();
        })


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

        }

    });




})