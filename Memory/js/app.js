document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("button");

    var startButton = document.getElementById("startButton");


    var initiating_buttons = document.querySelectorAll("article button");
    

    var upperSection = document.querySelector("#controlPanel");
    
  
    var divContainer = document.getElementById("divContainer");

    var hideButton = document.querySelectorAll(".hideBtn");

    var buttonContainer = document.getElementById("buttonContainer");

    var hideButtonLeft = document.querySelector(".hideBtn");


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
            startButton.classList.remove("invisible");
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

    function startGame(event) {
            mixArray(classes);
            divContainer.classList.remove("hidden");
            for (var i = 0; i < 24; i++) {
                var newDiv = document.createElement("div");
                divContainer.appendChild(newDiv);
                newDiv.classList.add(classes[i]);
            }

        startButton.parentNode.removeChild(startButton); 
        var hideButtonLeft = document.createElement("button");
        buttonContainer.appendChild(hideButtonLeft);
        hideButtonLeft.classList.add("hideBtn");
        hideButtonLeft.classList.add("eventButtons");
        hideButtonLeft.innerText = "Hide them";

        hideButtonLeft.addEventListener("click", hidePictures);

        function hidePictures() {
            var divs = document.querySelectorAll("div");
            for (var i = 0; i < divs.length; i++) {
                divs[i].classList.add("covered");
            }
            hideButtonLeft.parentNode.removeChild(hideButtonLeft);

            var revealButton = document.createElement("button");
            revealButton.classList.add("eventButtons");
            buttonContainer.appendChild(revealButton);
            revealButton.innerText = "Look again";

            revealButton.addEventListener("click", revealPictures);

            function revealPictures() {
                var divs = document.querySelectorAll("div");
                for (var i = 0; i < divs.length; i++) {
                    divs[i].classList.remove("covered");
                }
                revealButton.parentNode.removeChild(revealButton);
                var hideButtonRight = document.createElement("button");
                hideButtonRight.classList.add("eventButtons");
                buttonContainer.appendChild(hideButtonRight);
                hideButtonRight.innerText = "Memorize them";

                hideButtonRight.addEventListener("click", hideThemAgain);

                function hideThemAgain() {
                    var divs = document.querySelectorAll("div");
                    for (var i = 0; i < divs.length; i++) {
                        divs[i].classList.add("hidden");
                    }
                    hideButtonRight.parentNode.removeChild(hideButtonRight);
                    var lastButton = document.createElement("button");
                    buttonContainer.appendChild(lastButton);
                    lastButton.classList.add("eventButtons");
                    lastButton.innerText = "Start playing";

                    lastButton.addEventListener("click", startForReal);

                    clickCount = 0;

                    function startForReal() {
                        var divs = document.querySelectorAll("div");
                        for (var i = 0; i < divs.length; i++) {
                            divs[i].classList.add("covered");
                            divs[i].classList.remove("hidden");
                        }
                        lastButton.parentNode.removeChild(lastButton);

                        for (var i = 0; i < divs.length; i++) {
                            divs[i].addEventListener("click", uncoverCover);
                            divs[i].addEventListener("click", scorePoints);
                            divs[i].addEventListener("click", countPoints);
                        }

                        function uncoverCover(event) {
                            event.target.classList.remove("covered");
                            setTimeout(function() {
                                event.target.classList.add("covered");
                            }, 1500);
                        }



                        function scorePoints() {
                            var divsMyClass = document.querySelectorAll("." + this.className); // tu mówię: znajdź mi divy, które mają tę samą klasę, co kliknięty
                            for (var i = 0; i < divsMyClass.length; i++) {
                                if (divsMyClass[0].className === divsMyClass[1].className) {
                                    divsMyClass[0].classList.add("hidden");
                                    divsMyClass[1].classList.add("hidden");
                                }

                            }

                        }

                        function countPoints() {
                            clickCount++;
                            var invisibleDivs = document.querySelectorAll(".hidden");
                            if (invisibleDivs.length === 24) {
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
                }
            }
        }


    }




});