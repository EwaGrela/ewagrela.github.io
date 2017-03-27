$(function() {
    console.log("ok");
    //functions for personality test
    var alerts = ["Scary Spice is not amused you missed the question", "Justin feels sad 'cause you did not choose the answer"]
    var alertIndicator = Math.floor(Math.random() * alerts.length);
    var alertText = alerts[alertIndicator];
    console.log(alerts[alertIndicator]);
    var backgrounds = ["url('images/scaryspice.png')", "url('images/justin.png')"];
    var alertBcg = backgrounds[alertIndicator];
    console.log(backgrounds[alertIndicator]);
    function createAlertBox() {
        var alertBox = $("<div>", {
            class: "alertBox"
        });
        var alertP = $("<p>");
        alertBox.prependTo(testBoard);
        alertP.appendTo(alertBox)
        alertP.text(alertText);
        alertBox.css("background", alertBcg).css("background-repeat", "no-repeat").css("background-size", "contain").css("background-position", "top center").css("background-color", " rgba(255,255,255, 0.8)");
        var hideAlertBtn = $("<button>", {
            class: "hideAlertBtn"
        });
        hideAlertBtn.appendTo(alertBox);
        hideAlertBtn.text("ok");
    }



    //starting personality test
    console.log(startingBtn);
    startingBtn.on("click", function(event) {
        $(this).hide();
        header.hide();
        sections.hide();
        footer.hide();
        testSection.show();
        var testBoard = $("<div>");
        testBoard.addClass("board");
        testBoard.appendTo(testSection);
        testBoard.attr("id", "testBoard");
        var divContainer = $("<div>");
        divContainer.attr("id", "divContainer");
        divContainer.appendTo(testBoard);
        for ( var i =0; i <3; i++){
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
                    createAlertBox();
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
                function createComebackBtns(element){
                    for(var i = 0; i<2; i++){
                        var button = $("<a>", {class: "comeback"});
                        button.appendTo(element);
                    }
                    
                    console.log($(".comeback"));
                    var button = $(".comeback");
                    console.log(button);
                    button.eq(0).text("home");
                    button.eq(1).text("play again");
                    button.eq(0).attr("href", "https://ewagrela.github.io/project90/");
                    button.eq(1).attr("href", "https://ewagrela.github.io/project90/#gameSection");
                    button.eq(1).attr("id", "comeback2")
                }


    })


    testSection.on("click", ".hideAlertBtn", function() {
        //$(this).remove();
        $(this).parent().remove();
    })

    
    testSection.on("click", "#comeback2", function(event){
        header.show();
        notTestSections.show();
        footer.show();
        testSection.hide();
        triviaSection.hide();
    })


})