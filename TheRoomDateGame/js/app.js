document.addEventListener("DOMContentLoaded", function() {
    console.log("we cant stop we wont stop");
    // DOM elements and other variables
    var collectedSpoons = 0;
    var dollarsEarned = 0;
    var pluckedRoses = 0;
    var body = document.querySelector("body");
    var startGameButton = document.querySelector(".intro button");
    var introSection = document.querySelector(".intro");
    var gameSection = document.querySelector(".game");
    console.log(gameSection.parentElement);
    var gameBoard = gameSection.querySelector(".container");
    var timingDiv = document.getElementById("timer");
    var infoRoundParagraph = document.getElementById("quality");
    var stats = document.getElementById("stats");
    var statsSpan = stats.querySelector("span");
    statsSpan.innerText = collectedSpoons + " " + dollarsEarned + " " + pluckedRoses;

    // starting game;
    startGameButton.addEventListener("click", playGame); 
    function playGame() {
        this.parentElement.classList.add("invisible");
        gameSection.classList.remove("invisible");
        //spoons show and hide
        var interval = setInterval(function() {
            game.showItem("spoon")
        }, 1500);

        var interval2 = setInterval(function() {
            game.hideItem("spoon")
        }, 10000);

        //enemies attack & retreat
        setInterval(function() {
            game.claudetteAttack();    
        }, 3000);
        
        setInterval(function() {
            game.chrisRAttack();
        }, 4000);
    
        setInterval(function() {
            game.enemiesGone();
        }, 6000); 

        var timeForSpoons = 50;
        timingDiv.innerText = "Time left: " + timeForSpoons;

        var timer = setInterval(function() {
            timeLeft = timeForSpoons - 1;
            timeForSpoons = timeLeft;
            timingDiv.innerText = "Time left: " + timeLeft;

            if (timeLeft === 0 && collectedSpoons < 10) {
                clearInterval(timer);
                clearInterval(interval);
                clearInterval(interval2);
                game.gameOver();
                timeLeft = 0
                game.removeItems("spoon");

            }
            if (timeLeft === 0 && collectedSpoons >= 10) {
                clearInterval(timer);
                clearInterval(interval);
                clearInterval(interval2);
                timeLeft = 0;
                game.removeItems("spoon");
                var interval3 = setInterval(function() {
                    //game.showMoney();
                    game.showItem("dollar");
                }, 2000);
                var interval4 = setInterval(function() {
                    //game.hideMoney();
                    game.hideItem("dollar");
                }, 8000);

                var timeForDollars = 45;
                timingDiv.innerText = "Time left: " + timeForDollars;
                infoRoundParagraph.innerText ="Money time"
                var timer2 = setInterval(function() {
                    leftTime = timeForDollars - 1;
                    timeForDollars = leftTime;
                    timingDiv.innerText = "Time left: " + leftTime;
                    if (leftTime === 0 && dollarsEarned < 11) {
                        clearInterval(timer2);
                        clearInterval(interval3);
                        clearInterval(interval4);
                        leftTime = 0;
                        game.removeItems("dollar");
                        game.gameOver();
                    }
                    if (leftTime === 0 && dollarsEarned >= 11) {
                        clearInterval(interval3);
                        clearInterval(interval4);
                        clearInterval(timer2);
                        leftTime = 0;
                        
                        game.removeItems("dollar");
                        var interval5 = setInterval(function() {
                            game.showItem("rose");
                        }, 1500);
                        var interval6 = setInterval(function() {
                            game.hideItem("rose");
                        }, 8000);

                        var timeForRoses = 40;
                        timingDiv.innerText = "Time left: " + timeForRoses;
                        infoRoundParagraph.innerText= "Roses time"
                        var timer3 = setInterval(function() {
                            var timeRemaining = timeForRoses - 1;
                            timeForRoses = timeRemaining;
                            timingDiv.innerText = "Time left: " + timeRemaining;
                            if (timeRemaining === 0 && pluckedRoses < 12) {
                                clearInterval(interval5);
                                clearInterval(interval6);
                                clearInterval(timer3);
                                timeRemaining = 0;
                                game.removeItems("rose");     
                                game.gameOver();

                            }
                            if (timeRemaining === 0 && pluckedRoses >= 12) {
                                clearInterval(interval5);
                                clearInterval(interval6);
                                clearInterval(timer3)
                                timeRemaining = 0;
                                game.removeItems("rose");
                                game.dateTime();
                            }
                        }, 1000)
                    }
                }, 1000)
            }
        }, 1000)


        drawBoard();
        
        //creating a board for the game
        function drawBoard() {
            for (var i = 0; i < 100; i++) {
                var boardDiv = document.createElement("div");
                gameBoard.append(boardDiv);

            }
        }



        var Johny = function(x, y, direction) {
            this.x = x;
            this.y = y;
            this.direction = direction;
        }

        var Spoon = function(x, y) {
            this.x = x;
            this.y = y;
        }

        var Dollar = function(x, y) {
            this.x = x;
            this.y = y;
        }

        var Rose = function(x, y) {
            this.x = x;
            this.y = y;

        }
        var Claudette = function(x, y) {
            this.x = x;
            this.y = y;
        }
        var ChrisR = function(x, y) {

        }


        var Game = function() {
            this.johny = new Johny(0, 0, "right");
            this.spoon = new Spoon(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
            this.dollar = new Dollar(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
            this.rose = new Rose(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
            this.board = document.querySelectorAll(".container div");
            this.claudette = new Claudette(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
            this.chrisR = new ChrisR(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
            this.sounds = document.querySelectorAll("audio")
            this.sounds.spoon = this.sounds[0];
            this.sounds.spoon.volume = 0.5;
            this.sounds.dollar = this.sounds[1];
            this.sounds.rose = this.sounds[2];
            this.sounds.over = this.sounds[3];
            this.sounds.over.volume = 0.2;
            this.sounds.date = this.sounds[4];
            this.sounds.date.volume = 0.7;
            this.sounds.background = this.sounds[5];
            this.sounds.background.volume =0.02;
        }

        
        var game = new Game();

        game.sounds.background.play();
        //game action
   

        /* Metody do gry*/
        //count your position on a board
        Game.prototype.countPosition = function(x, y) {
            return (x + y * 10);
        }

        Game.prototype.showJohny = function(x, y) {
            var index = this.countPosition(x, y);
            this.board[index].classList.add("johny");
        }
        game.showJohny(0, 0);

        Game.prototype.hideJohny = function(x, y) {
            this.johny.x = x;
            this.johny.y = y;
            if (!(x < 0 || x > 9 || y < 0 || y > 9)) {
                var index = this.johny.x + this.johny.y * 10;
                this.board[index].classList.remove("johny");
            }
        }


        Game.prototype.moveJohny = function(x, y) {
            this.johny.x = x;
            this.johny.y = y;
            if (!(x < 0 || x > 9 || y < 0 || y > 9)) {
                var index = x + y * 10;
                this.board[index].classList.add("johny");
            }

        }

        // objects appering on board methods 
        Game.prototype.showItem = function(className){
            if(className ==="spoon"){
                this.spoon.x = Math.floor(Math.random() * 10);
                this.spoon.y = Math.floor(Math.random() * 10);
                var index = this.spoon.x + this.spoon.y * 10;
                this.board[index].classList.add("spoon");
            }

            if(className ==="dollar") {
                this.dollar.x = Math.floor(Math.random() * 10);
                this.dollar.y = Math.floor(Math.random() * 10);
                var index = this.dollar.x + this.dollar.y * 10;
                this.board[index].classList.add("dollar");
            }

            if(className ==="rose") {
                this.rose.x = Math.floor(Math.random() * 10);
                this.rose.y = Math.floor(Math.random() * 10);
                var index = this.rose.x + this.rose.y * 10;
                this.board[index].classList.add("rose");
            }
        }

        Game.prototype.hideItem = function(className){
            if(className ==="spoon"){
                var spoons = document.querySelectorAll(".spoon");
                for (var i = 0; i < spoons.length; i++) {
                    spoons[i].classList.remove("spoon");

                }
            }
            if(className ==="dollar"){
                var dollars = document.querySelectorAll(".dollar");
                for (var i = 0; i < dollars.length; i++) {
                    dollars[i].classList.remove("dollar");

                }
            }
            if( className ==="rose") {
                var roses = document.querySelectorAll(".rose");
                for (var i = 0; i < roses.length; i++) {
                    roses[i].classList.remove("rose");

                }
            }
        }

        Game.prototype.removeItems = function(className) {
            for( var i = 0; i< this.board.length; i++) {
                this.board[i].classList.remove(className);
            }
        }
        
        
        Game.prototype.claudetteAttack = function() {
            this.claudette.x = Math.floor(Math.random() * 10);
            this.claudette.y = Math.floor(Math.random() * 10);
            var index = this.claudette.x + this.claudette.y * 10;
            this.board[index].classList.add("claudette");
        }

        Game.prototype.chrisRAttack = function() {
            this.chrisR.x = Math.floor(Math.random() * 10);
            this.chrisR.y = Math.floor(Math.random() * 10);
            var index = this.chrisR.x + this.chrisR.y * 10;
            this.board[index].classList.add("chrisR");
        }
        
        Game.prototype.enemiesGone = function() {
            var claudettes = document.querySelectorAll(".claudette");
            for (var i = 0; i < claudettes.length; i++) {
                claudettes[i].classList.remove("claudette");
            }

            var chrises = document.querySelectorAll(".chrisR");
            for (var i = 0; i < chrises.length; i++) {
                chrises[i].classList.remove("chrisR");
            }

        }
      
        Game.prototype.moveAround = function() {
            var self = this;
            document.addEventListener("keydown", movingAround);
            function movingAround(event) {
                var x = self.johny.x;
                var y = self.johny.y;
                if (event.keyCode === 37) {
                    self.johny.direction = "left";
                    
                }
                if (event.keyCode === 39) {
                    self.johny.direction = "right";
                    
                }
                if (event.keyCode === 38) {
                    self.johny.direction = "up";
                    

                }
                if (event.keyCode === 40) {
                    self.johny.direction = "down";
                    
                }
            }
        }
        game.moveAround();

        //johny moves on his own
        var singleMoveInterval = setInterval(singleMove, 300); //need to clear this interval if game over!

            function singleMove(){
                this.game = game;
                var johny = game.johny;
                var x = johny.x;
                var y = johny.y;
                if( johny.direction ==="left"){
                    game.hideJohny(x, y);
                    game.moveJohny(x - 1, y);
                    game.collectItems();
                    game.collideWithEnemy();
                    game.collideWithWall();

                }
                if(johny.direction ==="right") {
                    game.hideJohny(x, y);
                    game.moveJohny(x + 1, y);
                    game.collectItems();
                    game.collideWithEnemy();
                    game.collideWithWall();
                }

                if(johny.direction ==="up"){
                    game.hideJohny(x, y);
                    game.moveJohny(x, y - 1);
                    game.collectItems();
                    game.collideWithEnemy();
                    game.collideWithWall();
                }
                if(johny.direction ==="down"){
                    game.hideJohny(x, y);
                    game.moveJohny(x, y + 1);
                    game.collectItems();
                    game.collideWithEnemy();
                    game.collideWithWall();
                }
            }

        //method removing stuff
        Game.prototype.collectItems = function() {
            for ( var i = 0; i < this.board.length; i++){
                statsSpan.innerText = collectedSpoons + " " + dollarsEarned + " " + pluckedRoses;
                if (this.board[i].className === "johny spoon" || this.board[i].className === "spoon johny") {
                    this.board[i].classList.remove("spoon");
                    collectedSpoons++;
                    this.sounds.spoon.play();
                 
                }
                if (this.board[i].className === "johny dollar" || this.board[i].className === "dollar johny") {
                    this.board[i].classList.remove("dollar");
                    dollarsEarned++;
                    this.sounds.dollar.play();
                    
                }
                if (this.board[i].className === "johny rose" || this.board[i].className === "rose johny") {
                    this.board[i].classList.remove("rose");
                    pluckedRoses++;
                    this.sounds.rose.play();
                    
                }

            }
        }

       
        //collisions
        //collision with enemy
        Game.prototype.collideWithEnemy = function() {
            for (var i = 0; i < this.board.length; i++) {
                if (this.board[i].className === " johny claudette" || this.board[i].className === "claudette johny") {
                    clearInterval(singleMoveInterval);
                    game.gameOver();
                }
                if (this.board[i].className === "johny chrisR" || this.board[i].className === "chrisR johny") {
                    clearInterval(singleMoveInterval);
                    game.gameOver();
                }
            }

        }

        //collision with wall 
        Game.prototype.collideWithWall = function() {
            x = this.johny.x;
            y = this.johny.y;
            var index = this.johny.x + this.johny.y * 10;
            if ((x < 0 || x > 9 || y < 0 || y > 9)) {
            	clearInterval(singleMoveInterval);
                game.gameOver();

            }

        }

        //game over

        Game.prototype.gameOver = function() {
            var gameOverBoard = document.createElement("section");
            gameOverBoard.classList.add("gameOver");
            gameSection.parentNode.removeChild(gameSection);
            introSection.parentNode.removeChild(introSection);
            body.append(gameOverBoard);
            pictureDiv(gameOverBoard);
            var paragraph = document.createElement("p");
            gameOverBoard.append(paragraph);
            paragraph.innerText = " Game over! No sweet lovin' for you! You are tearing me apart!"
            this.sounds.over.play();
            this.sounds.background.volume = 0.00;
            comeBack(gameOverBoard)
        }

        //date happening:

        Game.prototype.dateTime = function(){
            var dateBoard = document.createElement("section");
            dateBoard.classList.add("dateTime");
            gameSection.parentNode.removeChild(gameSection);
            introSection.parentNode.removeChild(introSection);
            body.append(dateBoard);
            pictureDiv(dateBoard);
            var paragraph = document.createElement("p");
            dateBoard.append(paragraph);
            paragraph.innerText =" The date night is on! Do not drink to much scotchka!"
            this.sounds.date.play();
            this.sounds.background.volume = 0.00;
            comeBack(dateBoard);
        }


        function pictureDiv(element){
            var pictureDiv = document.createElement("div");
            pictureDiv.classList.add("pictureDiv");
            element.append(pictureDiv);
        }
        function comeBack(element){
            var comeBack = document.createElement("a");
            element.append(comeBack);
            comeBack.setAttribute("href", "https://ewagrela.github.io/TheRoomDateGame/");
            comeBack.innerText = "play again";
            comeBack.classList.add("comeback");
        }

    }

        


});