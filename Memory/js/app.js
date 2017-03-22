document.addEventListener("DOMContentLoaded", function() {
    console.log("this is a copy you are using");
    var buttons = document.querySelectorAll("button");

    var startButton = document.getElementById("startButton");

    var initiating_buttons = document.querySelectorAll("article button");

    var upperSection = document.querySelector("#controlPanel");
  
    var divContainer = document.getElementById("divContainer");

    var buttonContainer = document.getElementById("buttonContainer");


    var classes = ["blackRose", "carnation", "chrysanthemum", "cornflower", "cymbidium", "falenopsis", "jasminum", "lilac", "obuwik", "peony",
        "rosarugosa", "waterlily", "blackRose", "carnation", "chrysanthemum", "cornflower", "cymbidium", "falenopsis",
        "jasminum", "lilac", "obuwik", "peony", "rosarugosa", "waterlily"
    ]


    var classes2 = ["butterfly1", "butterfly2", "butterfly3", "butterfly4", "butterfly5", "butterfly6", "butterfly7", "butterfly8", "butterfly9",
        "butterfly10", "butterfly11", "butterfly12", "butterfly1", "butterfly2", "butterfly3", "butterfly4", "butterfly5", "butterfly6", "butterfly7", "butterfly8", "butterfly9",
        "butterfly10", "butterfly11", "butterfly12"
    ];


    for ( var i =0; i<initiating_buttons.length; i ++){
        initiating_buttons[i].addEventListener("click", function(event){
            startButton.classList.remove("invisible"); //pokazanie guzika start
            upperSection.parentNode.removeChild(upperSection);
            if(this === initiating_buttons[0]) {
                classes = classes;        
            } else {
                classes = classes2;    
            }
            
        })
    }

    function mixArray(classes) {
        for (var i = 0; i < classes.length; i++) {
            var j = Math.floor(Math.random() * classes.length);
            var temp = classes[i];
            classes[i] = classes[j];
            classes[j] = temp;
        }
        return classes;
    }

    startButton.addEventListener("click", startGame);
    console.log(startButton);
    function startGame(event) {
     //mixowanie klas a potem stworzenie divów i nadanie im tych klas
            mixArray(classes);
            divContainer.classList.remove("hidden");
            for (var i = 0; i < 24; i++) {
                var newDiv = document.createElement("div");
                divContainer.appendChild(newDiv);
                newDiv.classList.add(classes[i]);
            }
            startButton.parentNode.removeChild(startButton); //usuń start

            var hidingTheCardsBtn = document.createElement("button");
            hidingTheCardsBtn.classList.add("eventButtons");
            buttonContainer.appendChild(hidingTheCardsBtn);
            hidingTheCardsBtn.innerText ="hide them";

            hidingTheCardsBtn.addEventListener("click", hideCards);

            var divs = divContainer.children;

                function hideCards() {
                    for ( var i =0; i<divs.length; i++){
                        divs[i].classList.add("covered");
                    }
                    hidingTheCardsBtn.parentNode.removeChild(hidingTheCardsBtn);
                }

                for ( var i = 0; i<divs.length; i++){
                    divs[i].addEventListener("click", uncoverCover);
                    divs[i].addEventListener("click", scorePoints);
                    //divs[i].addEventListener("click", clearClasses)
                    divs[i].addEventListener("click", finishGame);
                }
                var clickCount =0;
                var points =0;
                
                function uncoverCover(event){
                    event.target.classList.remove("covered");
                    var timeout = setTimeout(function(){
                        event.target.classList.add("covered");
                    }, 1500);
                }

                function scorePoints() {
                    var divsMyClass = divContainer.querySelectorAll("."+ this.className); //wszystkie z moją klasą
                    console.log(this.className);
                    console.log(divsMyClass);
                    for(var i = 0; i<divsMyClass.length; i++){
                        console.log(divsMyClass[i].className);
                        if(divsMyClass[0].className ===divsMyClass[1].className){
                            divsMyClass[0].classList.add("hidden"); // inna klasa, jakaś z animacją
                            divsMyClass[1].classList.add("hidden");

                        }
                    }
                }
                
                
                
                function finishGame() {
                    clickCount++
                    var fadedDivs = divContainer.querySelectorAll(".hidden");
                    if(fadedDivs.length===divs.length){
                        var counter = document.createElement("button");
                        divContainer.parentNode.removeChild(divContainer);
                        buttonContainer.appendChild(counter);
                        counter.setAttribute("id", "counter");
                        counter.innerText = "Congrats, you have "+(240 - Math.round(clickCount / 2)) + " points and you clicked " + clickCount + " times";
                                
                        var replay = document.createElement("button");
                        buttonContainer.appendChild(replay);
                        replay.setAttribute("id", "replay");
                        replay.innerText ="Wanna play again?";

                        var playAgain = document.createElement("a");
                        buttonContainer.appendChild(playAgain);
                        playAgain.setAttribute("id", "playAgain");
                        playAgain.setAttribute("href", "https://ewagrela.github.io/Memory/");
                        playAgain.innerText ="Go ahead!";



                    }

                }

    }






});