$(function() {
    //the game begins once the button is hit and the section is made visible
    initiatingBtn.on("click", function(){
        bandNamingSection.removeClass("invisible");
        bandNamingSection.attr("id", "bandNamingSection");
        notBandNameSections.hide();
        header.hide();
        footer.hide();
    });
   
    var bandNameRef = firebase.database().ref("/bandName");
    //the code is put inside the reference to the database so it is accessed
    bandNameRef.once("value").then(function(data) {
        var bandName = data.val();
        //console.log(bandName);
        var bandNames = bandName[0];
        //console.log(bandNames);
        var bandQuestions = bandNames.bandQuestions;
        var bandResults = bandNames.bandResults;
        var bandVideos = bandNames.bandvideos;
        //console.log(bandQuestions, bandResults, bandVideos);
        

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

        function createHomeBtns() {
            var div = $("<div class='buttonsDiv'>");
            var button = $("<a>", {
                class: "back"
            });
            button.attr("href", "https://ewagrela.github.io/project90/");
            div.insertAfter($(".bandResultsArticle"));
            button.appendTo(div);
            button.text("home")
            createLinkToVideo(div);

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

        function createLinkToVideo(element){
            var linkToRandomVideo = $("<a class='videoLink' target ='_blank'>be inspired</a>");
            linkToRandomVideo.appendTo(element);
        }
        //depending on the attributes of the buttons, a different scenario takes place and different results are generated
        bandNamingSection.on("click", ".nameGenerator", function(){
            console.log($(this));
            console.log("ok");
            console.log($(this).attr("data"));
            deletePreviousQuestion($(this));
        
            if($(this).attr("data")==="yes"){
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.family.length);
                $(".bandResultsArticle").text(bandResults.family[randomIndex]);
                var link = $(".videoLink");
                var randomIndex2 = Math.floor(Math.random() * bandVideos.family.length);
                link.attr("href", bandVideos.family[randomIndex2]);
            }

            if($(this).attr("data")==="no"){
                createQuestion(1);
            }

            if($(this).attr("data")==="grunge"){
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.grunge.length);
                $(".bandResultsArticle").text(bandResults.grunge[randomIndex]);
                var link = $(".videoLink");
                var randomIndex2 = Math.floor(Math.random() * bandVideos.grunge.length);
                link.attr("href", bandVideos.grunge[randomIndex2]);
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
                var link = $(".videoLink");
                var randomIndex2 = Math.floor(Math.random() * bandVideos.discopolo.length);
                link.attr("href", bandVideos.discopolo[randomIndex2]);
            }
            if($(this).attr("data")==="eurodance"){
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.eurodance.length);
                $(".bandResultsArticle").text(bandResults.eurodance[randomIndex]);
                var link = $(".videoLink");
                var randomIndex2 = Math.floor(Math.random() * bandVideos.eurodance.length);
                link.attr("href", bandVideos.eurodance[randomIndex2]);
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
                var link = $(".videoLink");
                var randomIndex2 = Math.floor(Math.random() * bandVideos.boybandGood.length);
                link.attr("href", bandVideos.boybandGood[randomIndex2]);
            }
            if($(this).attr("data")==="bad boyz") {
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.boybandBad.length);
                $(".bandResultsArticle").text(bandResults.boybandBad[randomIndex]);
                var link = $(".videoLink");
                var randomIndex2 = Math.floor(Math.random() * bandVideos.boybandBad.length);
                link.attr("href", bandVideos.boybandBad[randomIndex2]);
            }
            if($(this).attr("data")==="nice"){
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.girlbandGood.length);
                $(".bandResultsArticle").text(bandResults.girlbandGood[randomIndex]);
                var link = $(".videoLink");
                var randomIndex2 = Math.floor(Math.random() * bandVideos.girlbandGood.length);
                link.attr("href", bandVideos.girlbandGood[randomIndex2]);
            }
            if($(this).attr("data")==="wild") {
                generatebandResults();
                var randomIndex = Math.floor(Math.random() * bandResults.girlbandBad.length);
                $(".bandResultsArticle").text(bandResults.girlbandBad[randomIndex]);
                var link = $(".videoLink");
                var randomIndex2 = Math.floor(Math.random() * bandVideos.girlbandBad.length);
                link.attr("href", bandVideos.girlbandBad[randomIndex2]);
            }
        })

              
    });


});