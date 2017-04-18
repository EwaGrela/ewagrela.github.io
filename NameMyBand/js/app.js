$(function() {

    var bandNamingSection = $(".bandNamingSection");
    var startingButton = $(".bandNamingSection button");
    console.log(firebase);
    var bandNameRef = firebase.database().ref("/bandName");
    bandNameRef.once("value").then(function(data) {
        bandName = data.val();
        console.log(bandName);
        var bandNames = bandName[0];
        console.log(bandNames);
        var bandQuestions = bandNames.bandQuestions;
        var bandResults = bandNames.bandResults;
        console.log(bandQuestions, bandResults);

        startingButton.on("click", function() {
            console.log("hello");
            $(this).hide();
            $(this).parent().hide();
            $(this).parent().prev().hide();
            createQuestion(0);
        })
        var bandQuestions = bandNames.bandQuestions;
        var bandResults = bandNames.bandResults;

        function createQuestion(index) {
            var answers = bandQuestions[index].answers;
            var article = $("<article>");
            var buttonDiv = $("<div>", {
                class: "appDiv"
            });
            article.appendTo($(".bandNamingSection"));
            buttonDiv.appendTo(article)
            var title = $("<h3>");
            title.prependTo(article);
            title.text(bandQuestions[index].title);
            console.log(answers);
            for (var i = 0; i < answers.length; i++) {
                var button = $("<button>");
                button.appendTo(buttonDiv);

                button.each(function() {
                    $(this).text(answers[i]);
                    $(this).addClass(answers[i]);
                })
            }

        }


        function generatebandResults() {
            var bandResultsArticle = $("<article>", {
                class: "bandResultsArticle"
            });
            bandResultsArticle.appendTo(bandNamingSection);
        }

        bandNamingSection.on("click", ".yes", function() {
            $(this).parent().parent().hide();
            generatebandResults();
            var randomIndex = Math.floor(Math.random() * bandResults.family.length);
            $(".bandResultsArticle").text(bandResults.family[randomIndex]);
            createHomeBtns($(".bandResultsArticle"));

        });

        bandNamingSection.on("click", ".no", function() {
            $(this).parent().parent().hide();
            createQuestion(1);
            createHomeBtns($(".bandResultsArticle"));

        })
        bandNamingSection.on("click", ".grunge", function() {
            $(this).parent().parent().hide();
            generatebandResults();
            var randomIndex = Math.floor(Math.random() * bandResults.grunge.length);
            $(".bandResultsArticle").text(bandResults.grunge[randomIndex]);
            createHomeBtns($(".bandResultsArticle"));

        })
        bandNamingSection.on("click", ".dance", function() {

            $(this).parent().parent().hide();
            createQuestion(2);
            createHomeBtns($(".bandResultsArticle"));
        })

        bandNamingSection.on("click", ".pop", function() {

            $(this).parent().parent().hide();
            createQuestion(3);
            createHomeBtns($(".bandResultsArticle"));

        })

        bandNamingSection.on("click", ".discopolo", function() {

            $(this).parent().parent().hide();
            generatebandResults();
            var randomIndex = Math.floor(Math.random() * bandResults.discopolo.length);
            $(".bandResultsArticle").text(bandResults.discopolo[randomIndex]);
            createHomeBtns($(".bandResultsArticle"));
        })


        bandNamingSection.on("click", ".eurodance", function() {
            $(this).parent().parent().hide();
            generatebandResults();
            var randomIndex = Math.floor(Math.random() * bandResults.eurodance.length);
            $(".bandResultsArticle").text(bandResults.eurodance[randomIndex]);
            createHomeBtns($(".bandResultsArticle"));
        })

        bandNamingSection.on("click", ".boyband", function() {
            $(this).parent().parent().hide();
            createQuestion(4)
            createHomeBtns($(".bandResultsArticle"));
        })

        bandNamingSection.on("click", ".girlband", function() {

            $(this).parent().parent().hide();
            createQuestion(5)
            createHomeBtns($(".bandResultsArticle"));
        })

        bandNamingSection.on("click", ".nice", function() {

            $(this).parent().parent().hide();
            generatebandResults();
            var randomIndex = Math.floor(Math.random() * bandResults.girlbandGood.length);
            $(".bandResultsArticle").text(bandResults.girlbandGood[randomIndex]);
            createHomeBtns($(".bandResultsArticle"));
        })

        bandNamingSection.on("click", ".wild", function() {

            $(this).parent().parent().hide();
            generatebandResults();
            var randomIndex = Math.floor(Math.random() * bandResults.girlbandBad.length);
            $(".bandResultsArticle").text(bandResults.girlbandBad[randomIndex]);
            createHomeBtns($(".bandResultsArticle"));
        })

        bandNamingSection.on("click", ".good", function() {
            $(this).parent().parent().hide();
            generatebandResults();
            var randomIndex = Math.floor(Math.random() * bandResults.boybandGood.length);
            $(".bandResultsArticle").text(bandResults.boybandGood[randomIndex]);
            createHomeBtns($(".bandResultsArticle"));
        })

        bandNamingSection.on("click", ".bad", function() {
            $(this).parent().parent().hide();
            generatebandResults();
            var randomIndex = Math.floor(Math.random() * bandResults.boybandBad.length);
            $(".bandResultsArticle").text(bandResults.boybandBad[randomIndex]);
            createHomeBtns($(".bandResultsArticle"));
        })

        function createHomeBtns(element) {
            var button = $("<a>", {
                class: "back"
            });
            button.attr("href", "https://ewagrela.github.io/NameMyBand/");
            button.appendTo(element);
            button.text("back")

        }
    });




});