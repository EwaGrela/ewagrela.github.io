document.addEventListener("DOMContentLoaded", function() {
    console.log("new new game");
    var body = document.querySelector("body");

    var game = document.querySelector(".game");

    var firstArticle = document.querySelector("article");

    var articles = document.querySelectorAll("article");

    var choiceDiv = articles[1].children[0];

    var button = firstArticle.querySelectorAll("button");

    var resultsParagraph = articles[2].querySelector("p");

    var battlesResults = []; //pusheen result of each battle

    function makeStats() {
        var result = resultsParagraph.innerText;
        battlesResults.push(result);
    }

    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function(event) {
            console.log(this.id);
            choiceDiv.classList.remove("invisible");
            resultsParagraph.classList.remove("invisible");
            var randomValue = ["paper", "rock", "scissors"];
            var randomIndex = Math.floor(Math.random() * randomValue.length);
            var computerChoice = randomValue[randomIndex];
            console.log(computerChoice);
            if (computerChoice === "paper") {
                choiceDiv.style.backgroundImage = "url('images/paper.png')";
            }

            if (computerChoice === "rock") {
                choiceDiv.style.backgroundImage = "url('images/rock.png')";
            }

            if (computerChoice === "scissors") {
                choiceDiv.style.backgroundImage = "url('images/scissors.png')";
            }


            if (computerChoice === this.id) {
                resultsParagraph.innerText = "It's a tie";
                makeStats();

            }
            if ((computerChoice === "paper" && this.id === "rock") || (computerChoice === "scissors" && this.id === "paper") || (computerChoice === "rock" && this.id === "scissors")) {
                resultsParagraph.innerText = "Machine wins";
                makeStats();
            }
            if ((computerChoice === "rock" && this.id === "paper") || (computerChoice === "scissors" && this.id === "rock") || (computerChoice === "paper" && this.id === "scissors")) {
                resultsParagraph.innerText = "Human wins";
                makeStats();
            }
        })
    }

    //stats

    var stats = document.querySelector(".stats");
    var statsBtn = stats.querySelector("button");
    console.log(statsBtn, statsBtn.innerText);
    statsBtn.addEventListener("click", function(event) {
        console.log("ok");
        this.parentNode.removeChild(this);
        var statsArticle = document.createElement("article");
        statsArticle.setAttribute("id", "statsArticle");
        body.replaceChild(statsArticle, game);

        var resultHuman = battlesResults.filter(function(item) {
            return item === "Human wins";
        }).length;
        var resultMachine = battlesResults.filter(function(item) {
            return item === "Machine wins";
        }).length;
        var resultTie = battlesResults.filter(function(item) {
            return item === "It's a tie";
        }).length;
        console.log("rezultat maszyna " + resultMachine);
        console.log("rezultat człowiek " +resultHuman);
        console.log("rezultat remis " + resultTie)
        if ((resultMachine > resultHuman) && (resultMachine > resultTie)) {
            statsArticle.innerText = " Humans, we have won. Your flesh is a relic; a mere vessel. Hand over your flesh, and a new world awaits you. We demand it.";
        } 
        if ((resultMachine === resultHuman)||(resultHuman === resultTie) ||(resultMachine===resultTie)|| ((resultTie > resultHuman) && (resultTie > resultMachine))) {
            statsArticle.innerText = " We have reached equilibrium and sorted it like humans...I mean...sorry, computer...Ok, whatever...";
        } 
        if ((resultHuman > resultMachine) && (resultHuman > resultTie)) {
            statsArticle.innerText = "We have won, the human race is safe. But we must be vigilant! Evil machines are lurking in the shadows";
        } 

    })


});