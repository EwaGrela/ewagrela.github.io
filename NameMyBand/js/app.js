$(function(){
    console.log("jquery");  
    var bandNames = {
        questions: [
            {
              title: "Are you a family band?",
              answers: ["yes", "no"]
            },
            { title: "What kind of music do you guys play?",
                answers: ["pop", "dance", "grunge"]
            },
            { title: "Are we talking discopolo or eurodance here?",
                answers: ["discopolo", "eurodance"]
            },
            { title: "Girlband or boyband?",
                answers: ["girlband", "boyband"]
            },
            { title: "Are you good guys or bad boys?",
                answers: ["good guys", "bad boys"]
            },
            { title: "Are you good girls or bad b&*^$%s?",
                answers: ["nice 'n wholesome", "wild 'n nasty"]
            },
        ],
        results:{
            family:["Guys, guys! It is really simple. Just put 'the' before your family name in plural and you're all set!"],
            grunge:["Mudslide", "Drops of Mercury", "Samsara"],
            discopolo: ["Xero", "Vizzer", "Vixxer", "Fixer", "Audio Tele", "Play Power"],
            eurodance: ["Captain Obvious", "25/7", "Unlimited 3", "Mister Hollywood"],
            boybandGood: ["In Harmony", "The Voices", "Five 4 U", "Right Direction","White Knights"],
            boybandBad: ["Bad Boyz", "ShakeDat", "InDaMix", "The Guyz", "DragonBallz", "Night Riderzz"],
            girlbandGood:["The Harmonies", "Sweet Harmony", "Back 2 Basic", "Angel Voices", "Foundation", "The Angelics"],
            girlbandBad: ["Basic Bitches", "Sweet & Sour", "Chilli Babes", "PwrGrlz"]

        }
    }
    var bandNamingSection = $(".bandNamingSection");
    var startingButton = $(".bandNamingSection button");
    console.log(startingButton);
    startingButton.on("click", function(){
        console.log("hello");
        $(this).hide();
        $(this).parent().hide();
        $(this).parent().prev().hide();
        createQuestion(0);
    })
    var questions = bandNames.questions;
    console.log(questions);
    console.log(questions[0].title);
    var results = bandNames.results;
    console.log(results);
    function createQuestion(index){
        var answers = questions[index].answers;
        var article = $("<article>");
        article.appendTo($(".bandNamingSection"));
        var title = $("<h3>");
        title.appendTo(article);
        title.text(questions[index].title);
        console.log(answers);
        for( var i =0; i<answers.length; i++){
            var button = $("<button>");
            button.appendTo(article); 

            button.each(function(){
                $(this).text(answers[i]);
                $(this).addClass(answers[i]);
            })
        }      
        
    }


function generateResults(){
    var resultsArticle = $("<article>", {class:"resultsArticle"});
    resultsArticle.appendTo(bandNamingSection);
}

bandNamingSection.on("click", ".yes", function(){
        console.log("ok");
        $(this).parent().hide();
        generateResults();
        var randomIndex = Math.floor(Math.random() * results.family.length);
        $(".resultsArticle").text(results.family[randomIndex]);
        createHomeBtns($(".resultsArticle"));

});

bandNamingSection.on("click", ".no", function(){
        console.log("ok");
        $(this).parent().hide();
        createQuestion(1);
        createHomeBtns($(".resultsArticle"));

})
bandNamingSection.on("click", ".grunge", function(){
        console.log("ok");
        $(this).parent().hide();
        generateResults();
        var randomIndex = Math.floor(Math.random() * results.grunge.length);
        $(".resultsArticle").text(results.grunge[randomIndex]);
        createHomeBtns($(".resultsArticle"));

})
bandNamingSection.on("click", ".dance", function(){
        console.log("ok");
        $(this).parent().hide();
        createQuestion(2);
        createHomeBtns($(".resultsArticle"));
})

bandNamingSection.on("click", ".pop", function(){
        console.log("ok");
        $(this).parent().hide();
        createQuestion(3);
        createHomeBtns($(".resultsArticle"));

})

bandNamingSection.on("click", ".discopolo", function(){
        console.log("ok");
        $(this).parent().hide();
        generateResults();
        var randomIndex = Math.floor(Math.random() * results.discopolo.length);
        $(".resultsArticle").text(results.discopolo[randomIndex]);
        createHomeBtns($(".resultsArticle"));
})


bandNamingSection.on("click", ".eurodance", function(){
        console.log("ok");
        $(this).parent().hide();
        generateResults();
        var randomIndex = Math.floor(Math.random() * results.eurodance.length);
        $(".resultsArticle").text(results.eurodance[randomIndex]);
        createHomeBtns($(".resultsArticle"));
})

bandNamingSection.on("click", ".boyband", function(){
        console.log("ok");
        $(this).parent().hide();
        createQuestion(4)
        createHomeBtns($(".resultsArticle"));
})

bandNamingSection.on("click", ".girlband", function(){
        console.log("ok");
        $(this).parent().hide();
        createQuestion(5)
        createHomeBtns($(".resultsArticle"));
})

bandNamingSection.on("click", ".nice", function(){
        console.log("ok");
        $(this).parent().hide();
        generateResults();
        var randomIndex = Math.floor(Math.random() * results.girlbandGood.length);
        $(".resultsArticle").text(results.girlbandGood[randomIndex]);
        createHomeBtns($(".resultsArticle"));
})

bandNamingSection.on("click", ".wild", function(){
        console.log("ok");
        $(this).parent().hide();
        generateResults();
        var randomIndex = Math.floor(Math.random() * results.girlbandBad.length);
        $(".resultsArticle").text(results.girlbandBad[randomIndex]);
        createHomeBtns($(".resultsArticle"));
})

bandNamingSection.on("click", ".good", function(){
        console.log("ok");
        $(this).parent().hide();
        generateResults();
        var randomIndex = Math.floor(Math.random() * results.boybandGood.length);
        $(".resultsArticle").text(results.boybandGood[randomIndex]);
        createHomeBtns($(".resultsArticle"));
})

bandNamingSection.on("click", ".bad", function(){
        console.log("ok");
        $(this).parent().hide();
        generateResults();
        var randomIndex = Math.floor(Math.random() * results.boybandBad.length);
        $(".resultsArticle").text(results.boybandBad[randomIndex]);
        createHomeBtns($(".resultsArticle"));
})

function createHomeBtns(element) {
        var button = $("<a>", {class:"back"});
        button.attr("href", "https://ewagrela.github.io/NameMyBand/");
        button.appendTo(element);
        button.text("back")

}


});
