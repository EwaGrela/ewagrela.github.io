document.addEventListener("DOMContentLoaded", function() {
    console.log("bettergame");
    var body = document.querySelector("body");

    var header = document.querySelector("header");

    var startGameBtn = document.getElementById("start");

    var intro = document.querySelector(".intro");

    var game = document.querySelector(".game");

    var gameHeader = game.querySelectorAll("h3");
    
    var machineChoiceHeader = gameHeader[1];

    var firstArticle = game.querySelector("article");

    var articles = document.querySelectorAll("article");

    var choiceDiv = articles[1].children[0];

    var button = firstArticle.querySelectorAll("button");

    var resultsParagraph = articles[2].querySelector("p");

    var battlesResults = []; // here push result of each battle
    var footer = document.querySelector("footer");

    var footerParagraph = footer.querySelector("p");
    var clickCount = 10;
    var roundCounter = document.querySelector("h4");

    var stats = document.querySelector(".stats");
    var statsBtn = stats.querySelector("button");

    //starting game
    


    function makeStats() { //collecting results and pushing it to battleResults
        var result = resultsParagraph.innerText;
        battlesResults.push(result);
    }

    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function(event) {
        
          	clickCount --;
          	
          	roundCounter.classList.remove("invisible");
          	machineChoiceHeader.classList.remove("invisible");
          	roundCounter.innerText = "rounds left: " + clickCount;
            choiceDiv.classList.remove("invisible");
            resultsParagraph.classList.remove("invisible");
            var randomValue = ["paper", "rock", "scissors"];
            var randomIndex = Math.floor(Math.random() * randomValue.length);
            var computerChoice = randomValue[randomIndex];
        
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

            if(clickCount<=0){
          		game.parentNode.removeChild(game);
          		stats.classList.remove("invisible");
          	}
        })
    }

    //stats events 
    statsBtn.addEventListener("click", function(event) {
        this.parentNode.removeChild(this);
        var statsArticle = document.createElement("article");
        statsArticle.setAttribute("id", "statsArticle");
        stats.append(statsArticle);
        footerParagraph.classList.remove("invisible");
        var resultHuman = battlesResults.filter(function(item) {
            return item === "Human wins";
        }).length;
        var resultMachine = battlesResults.filter(function(item) {
            return item === "Machine wins";
        }).length;
        var resultTie = battlesResults.filter(function(item) {
            return item === "It's a tie";
        }).length;
        console.log(resultHuman);
        console.log(resultMachine);
        console.log(resultTie);
        console.log(battlesResults.length)
        var majority = battlesResults.length/2;
        console.log(majority);
       	if(resultHuman >= majority && resultMachine<majority){
       		statsArticle.innerText = "We have won, the human race is safe for another year. But we must be vigilant! Evil machines are lurking in the shadows...";

       	} else if (resultMachine >= majority && resultHuman<majority){
       		statsArticle.innerText = " Humans, we have won. Your flesh is a relic; a mere vessel. Hand it over and a new world awaits you. LOL, just kidding. It is our turn though.";

       	} 
       	else {
       		statsArticle.innerText ="Machine, you and I have an unfinished business! Like hell we do, Human...";
       	}
       	
 		//play again
        var replayBtn = document.createElement("a");
        replayBtn.classList.add("replay");
        footer.insertBefore(replayBtn, footerParagraph);
        
        
        if( statsArticle.innerText ==="Machine, you and I have an unfinished business! Like hell we do, Human...") {
        	replayBtn.innerText= "fight to establish the winner";
            replayBtn.setAttribute("href", "game.html");
        } else {
        	replayBtn.innerText= "one year later";
            replayBtn.setAttribute("href", "index.html");
        }
        
        
        
        replayBtn.setAttribute("href", "https://ewagrela.github.io/PaperRockScissors/");



    })




});