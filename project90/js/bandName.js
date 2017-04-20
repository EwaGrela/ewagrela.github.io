$(function() {
    //js for the quasi app
    initiatingBtn.on("click", function(){
        bandNamingSection.show();
        notBandNameSections.hide();
        header.hide();
        footer.hide();
    });
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
                    $(this).addClass("nameGenerator");
                    $(this).attr("data", answers[i]);
                })
            }

        }


        function generatebandResults() {
            var bandResultsArticle = $("<article>", {
                class: "bandResultsArticle"
            });
            bandResultsArticle.appendTo(bandNamingSection);
        }
        function createHomeBtns(element) {
            var button = $("<a>", {
                class: "back"
            });
            button.attr("href", "https://ewagrela.github.io/project90/");
            button.appendTo(element);
            button.text("home")

        }
          /*
        bandNamingSection.on("click", ".nameGenerator", function(){
    
            $(this).parent().parent().hide();
            if($(this).hasClass("yes")){
               
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.family.length);
                $(".bandResultsArticle").text(bandResults.family[randomIndex]);
                createHomeBtns($(".bandResultsArticle"));

            } else {
    
                createQuestion(1);
                createHomeBtns($(".bandResultsArticle"));
            }

            if($(this).hasClass("grunge")){
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.grunge.length);
                $(".bandResultsArticle").text(bandResults.grunge[randomIndex]);
                createHomeBtns($(".bandResultsArticle"));

            } 
            if ($(this).hasClass("dance")) {
               
                createQuestion(2);
                createHomeBtns($(".bandResultsArticle"));

            } 
            if($(this).hasClass("pop")) {
                
                createQuestion(3);
                createHomeBtns($(".bandResultsArticle"));
            }

            if($(this).hasClass("eurodance")){
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.eurodance.length);
                $(".bandResultsArticle").text(bandResults.eurodance[randomIndex]);
                createHomeBtns($(".bandResultsArticle"));

            } 
            if($(this).hasClass("discopolo")) {
                
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.discopolo.length);
                $(".bandResultsArticle").text(bandResults.discopolo[randomIndex]);
                createHomeBtns($(".bandResultsArticle"));
            }

            if($(this).hasClass("boys")){
                
                createQuestion(4)
                createHomeBtns($(".bandResultsArticle"));
            } 
            if($(this).hasClass("girls")){
                
                createQuestion(5)
                createHomeBtns($(".bandResultsArticle"));
            }

            if($(this).hasClass("good")){
               
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.boybandGood.length);
                $(".bandResultsArticle").text(bandResults.boybandGood[randomIndex]);
                createHomeBtns($(".bandResultsArticle"));

            } 
            if( $(this).hasClass("bad")){
                
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.boybandBad.length);
                $(".bandResultsArticle").text(bandResults.boybandBad[randomIndex]);
                createHomeBtns($(".bandResultsArticle"));

            }

            if($(this).hasClass("wild")) {
                
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.girlbandBad.length);
                $(".bandResultsArticle").text(bandResults.girlbandBad[randomIndex]);
                createHomeBtns($(".bandResultsArticle"));

            } 
            if($(this).hasClass("nice")){
                
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.girlbandGood.length);
                $(".bandResultsArticle").text(bandResults.girlbandGood[randomIndex]);
                createHomeBtns($(".bandResultsArticle"));
            }
        })
        */
        
      
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

        bandNamingSection.on("click", ".boys", function() {
            $(this).parent().parent().hide();
            createQuestion(4)
            createHomeBtns($(".bandResultsArticle"));
        })

        bandNamingSection.on("click", ".girls", function() {

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
        
        
    });




});