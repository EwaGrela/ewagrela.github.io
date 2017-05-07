$(function() {
    //keeping page in position

    $('body').scrollTop(0);
    //showing content of hamburger menu
    hamburgerMenu.on("click", function(event) {
        navigation.toggleClass("invisible");
        $(this).toggleClass("focus");
    });
    //event button directing to the games
    toTheGamesBtn.on("click", function(event) {
        //event.preventDefault();
        var href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, 4000);
    });

    // other scrolling events
    //scrolling to sections
    linksInMenu.on("click", function(event) {
        var href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, 2000);
    });
    //scrolling the page up from footer
    scrollingButton.on("click", function(event) {
        event.preventDefault();
        var href = $(this).attr("href");
        console.log(href);
        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, 2000);
    })
    //events for infoSection
    var talkButton = infoSection.find("button");
    talkButton.on("click", function(event) {
        //$(this).hide();
        var parToShow = $(this).next()
        //console.log(parToShow);
        parToShow.toggle();
        var otherPars = $(this).siblings("p").not(parToShow);
        //console.log(otherPars, otherPars.length);
        otherPars.hide();
    })

    //events for learn section
    var textRef = firebase.database().ref("/texts");
    textRef.once("value").then(function(data) {
        var texts = data.val();
        //console.log(texts);
        learnBtn.on("click", function(event) {
            var infoBoard = $("<article>", {
                class: "infoBoard"
            });
            infoBoard.appendTo(learnSection);
            var hideBtn = $("<button>", {
                class: "hideBtn"
            });
            hideBtn.appendTo(infoBoard);
            var infoParagraph = $("<p>", {
                class: "infoParagraph"
            });
            infoParagraph.prependTo(infoBoard);
            hideBtn.text("hide");
            var index = $(this).index();
            //console.log(index);

            var photoDiv = $("<div>", {
                class: "photoDiv"
            });
            photoDiv.insertAfter(infoParagraph);
            // used so that different articles may have different ilustations;
            photoDiv.attr("id", "board" + (index + 1)); 
            infoParagraph.text(texts[index]);

        })


    });


    learnSection.on("click", ".hideBtn", function(event) {
        $(this).parent().remove();
        learnArt.children("div#buttons").fadeIn(1400);
        learnArt.children("h1").show();
        learnArt.children("h2").show();
    })



})