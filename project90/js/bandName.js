$(function() {
    //js for the quasi app
    initiatingBtn.on("click", function(){
        bandNamingSection.removeClass("invisible");
        bandNamingSection.attr("id", "bandNamingSection");
        notBandNameSections.hide();
        header.hide();
        footer.hide();
    });
   
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
                    $(this).addClass("nameGenerator");
                    $(this).attr("data", answers[i]);
                })
            }

        }

        //functions for the quasi app
        function createHomeBtns() {
            var button = $("<a>", {
                class: "back"
            });
            button.attr("href", "https://ewagrela.github.io/project90/");
            button.insertAfter($(".bandResultsArticle"));
            button.text("home")

        }

        function generatebandResults() {
            var bandResultsArticle = $("<article>", {
                class: "bandResultsArticle"
            });
            bandResultsArticle.appendTo(bandNamingSection);
            createHomeBtns();   
        }

        
        function deletePreviousQuestion(element) {
            element.parent().parent().hide();
        }

        bandNamingSection.on("click", ".nameGenerator", function(){
            console.log($(this));
            console.log("ok");
            console.log($(this).attr("data"));
            deletePreviousQuestion($(this));
        
            if($(this).attr("data")==="yes"){
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.family.length);
                $(".bandResultsArticle").text(bandResults.family[randomIndex]);
            }

            if($(this).attr("data")==="no"){
                createQuestion(1);
            }

            if($(this).attr("data")==="grunge"){
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.grunge.length);
                $(".bandResultsArticle").text(bandResults.grunge[randomIndex]);
            }

            if($(this).attr("data")==="dance"){
                createQuestion(2);
            }

            if($(this).attr("data")==="pop"){
                createQuestion(3);
            }
            if($(this).attr("data")==="discopolo"){
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.discopolo.length);
                $(".bandResultsArticle").text(bandResults.discopolo[randomIndex]);
            }
            if($(this).attr("data")==="eurodance"){
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.eurodance.length);
                $(".bandResultsArticle").text(bandResults.eurodance[randomIndex]);
            }
            if($(this).attr("data")==="boys"){
                createQuestion(4);
            }
            if($(this).attr("data")==="girls"){
                createQuestion(5);
            }
            if($(this).attr("data")==="good guys"){
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.boybandGood.length);
                $(".bandResultsArticle").text(bandResults.boybandGood[randomIndex]);
            }
            if($(this).attr("data")==="bad boyz") {
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.boybandBad.length);
                $(".bandResultsArticle").text(bandResults.boybandBad[randomIndex]);
            }
            if($(this).attr("data")==="nice"){
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.girlbandGood.length);
                $(".bandResultsArticle").text(bandResults.girlbandGood[randomIndex]);
            }
            if($(this).attr("data")==="wild") {
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.girlbandBad.length);
                $(".bandResultsArticle").text(bandResults.girlbandBad[randomIndex]);
            }
        })

              
    });


});