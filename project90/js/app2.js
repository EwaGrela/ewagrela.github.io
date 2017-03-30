//functions for personality test
$(function() {
    var collectedAnswers = [];
    var testRef = firebase.database().ref("/personality");
    testRef.once("value").then(function(data){
            quiz = data.val();
             console.log(quiz);
    })
    
    //starting personality test
    var startingBtn = $("button#psychoTest");
    startingBtn.on("click", function(event) {
        $(this).hide();
        header.hide();
        notTestSections.hide();
        footer.hide();
        testSection.show();
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
        console.log(startTest);
        startTest.eq(0).text("90s boyfriend");
        startTest.eq(1).text("friends girls");
        startTest.eq(2).text("harry potter characters");


    })


    testSection.on("click", ".startTest", function(event) {
        var indicator = $(this).index();
        var test = quiz[indicator];
        var questions = test.questions;
        var questionSet = questions.length;
        var index = 0;
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

                inputs.on("change", function(event){
                    $(this).parent().addClass("checked");
                    $(this).parent().siblings("label").removeClass();
                })

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
            var checked = labels.find("input:checked");
            var labelText = checked.parent().text();
            var dataText = checked.parent().attr("data");
            if (index < questionSet) {
                if (dataText === undefined) {
                    createAlertBox($("#testBoard"));
                } else {
                    index++;
                    collectedAnswers.push(dataText);
                    console.log(collectedAnswers, collectedAnswers.length);
                    createQuestions();
                    $(this).parent().remove();
                    $(this).parent().prev().remove();
                }

            } else {
                showResults();
            }

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
            createComebackBtns(resultsBoard);
        }

    })


    testSection.on("click", ".hideAlertBtn", function() {
        //$(this).remove();
        $(this).parent().remove();
    })


    testSection.on("click", "#comeback", function(event) {
        header.show();
        notTestSections.show();
        startingBtn.show();
        footer.show();
        testSection.hide();
        triviaSection.hide();
        $(".comeback").remove();
        $("#testBoard").remove();
        $(".resultsBoard").remove();
    })


})