/* 
reusable functions
*/
//functions used everywhere
function randomize(elements) {
    for (var i = 0; i < elements.length; i++) {
        var j = Math.floor(Math.random() * elements.length);
        var temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
    }
    return elements;
}

function createComebackBtns(element) {
            for (var i = 0; i < 2; i++) {
                var button = $("<a>", {
                    class: "comeback"
                });
                button.appendTo(element);
            }

            //console.log($(".comeback"));
            var button = $(".comeback");
            //console.log(button);
            button.eq(0).text("home");
            button.eq(1).text("play again");
            button.eq(0).attr("href", "https://ewagrela.github.io/project90/");
            button.eq(1).attr("href", "https://ewagrela.github.io/project90/#gameSection");
            addingId();
        }

        function addingId(){
            var button = $(".comeback");
            button.eq(1).attr("id", "comeback");
            
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
    alertBox.css("background", background).css("background-repeat", "no-repeat").css("background-size", "contain").css("background-position", "top center").css("background-color", " rgba(255,255,255, 0.8)");
    var hideAlertBtn = $("<button>", {
      	class: "hideAlertBtn"
    });
    hideAlertBtn.appendTo(alertBox);
    hideAlertBtn.text("ok");
}
