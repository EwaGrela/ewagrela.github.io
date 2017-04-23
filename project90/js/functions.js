/* 
reusable functions
*/

function getFirebaseData(){
        var triviaRef = firebase.database().ref("/quizes");
        triviaRef.once("value").then(function(data) { 
        test = data.val();
        console.log(test);
        });

        var testRef = firebase.database().ref("/personality");
        testRef.once("value").then(function(data) {
        quiz = data.val();
        console.log(quiz);
        });

        var textRef = firebase.database().ref("/texts");
        textRef.once("value").then(function(data) {
        texts = data.val();
        console.log(texts);
        });

        
    }

function randomize(elements) {
    for (var i = 0; i < elements.length; i++) {
        var j = Math.floor(Math.random() * elements.length);
        var temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
    }
    return elements;
}

function createComebackBtn(element) {
    var button = $("<a>", {
    class: "comeback"
    });
    button.appendTo(element);
    var button = $(".comeback");
    button.text("again");
    button.attr("href", "https://ewagrela.github.io/project90/");         
}

        
var alertText = "Scary Spice is not amused you missed the question";
var background = "url('images/scaryspice.png')";
function createAlertBox(element) {
    var alertBox = $("<div>", {
          class: "alertBox"
    });
    var alertP = $("<p>");
    alertBox.prependTo(element);
    alertP.appendTo(alertBox)
    alertP.text(alertText);
    alertBox.css("background", background).css("background-repeat", "no-repeat").css("background-size", "contain").css("background-position", "top center").css("background-color", " rgba(255,255,255, 0.95)");
    var hideAlertBtn = $("<button>", {
      	class: "hideAlertBtn"
    });
    hideAlertBtn.appendTo(alertBox);
    hideAlertBtn.text("sorry!");
}

function createGameOverBoard(element){
    var gameOver = $("<div>", {class: "gameOver"});
    gameOver.appendTo(element);
    $("#gameBoard").remove();
    gameOver.text("game over!!!")
}
