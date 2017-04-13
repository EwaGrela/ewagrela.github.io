document.addEventListener("DOMContentLoaded", function() {
    console.log("changed");
    // DOM elements and other viariables
    var collectedSpoons = 0;
    var dollarsEarned = 0;
    var pluckedRoses = 0;
    var body = document.querySelector("body");
    var startGameButton = document.querySelector(".intro button");
    var introSection = document.querySelector(".intro");
    var gameSection = document.querySelector(".game");
    var gameBoard = gameSection.querySelector(".container");
    var results = document.getElementById("results");
    var stats = document.getElementById("stats");
    var statsSpan = stats.querySelector("span");
    statsSpan.innerText = collectedSpoons + " " + dollarsEarned + " " + pluckedRoses;

    // starting game;
    startGameButton.addEventListener("click", function() {
        this.parentElement.classList.add("invisible");
        gameSection.classList.remove("invisible");
        //ograniczenie czasowe zbierania łyżek
        var timeForSpoons = 40;
        results.innerText = "Time left: " + timeForSpoons;
        var timer = setInterval(function() {
            timeLeft = timeForSpoons - 1;
            timeForSpoons = timeLeft;
            results.innerText = "Time left: " + timeLeft;

            if (timeLeft === 0 && collectedSpoons < 5) {
                clearInterval(timer);
                clearInterval(interval);
                clearInterval(interval2);
                console.log("game over");
                game.gameOver();
                timeLeft = 0
                game.removeAllSpoons();


            }
            if (timeLeft === 0 && collectedSpoons >= 5) {
                console.log("zebrano łyżki")
                clearInterval(timer);
                clearInterval(interval);
                clearInterval(interval2);
                timeLeft = 0;
                game.removeAllSpoons();
                var interval3 = setInterval(function() {
                    game.showMoney();
                }, 1500);
                var interval4 = setInterval(function() {
                    game.hideMoney();
                }, 3000);

                var timeForDollars = 50;
                results.innerText = "Time left: " + timeForDollars;
                var timer2 = setInterval(function() {
                    leftTime = timeForDollars - 1;
                    timeForDollars = leftTime;
                    results.innerText = "Time left: " + leftTime;

                    if (leftTime === 0 && dollarsEarned < 2) {
                        clearInterval(timer2);
                        clearInterval(interval3);
                        clearInterval(interval4);
                        leftTime = 0;
                        game.removeAllMoney();
                        console.log("game over");
                        game.gameOver();
                    }
                    if (leftTime === 0 && dollarsEarned >= 2) {
                        clearInterval(interval3);
                        clearInterval(interval4);
                        clearInterval(timer2);
                        leftTime = 0;
                        game.removeAllMoney();
                        console.log("congrats, time for roses");
                        var interval5 = setInterval(function() {
                            game.showRose();
                        }, 1000);
                        var interval6 = setInterval(function() {
                            game.hideRose();
                        }, 2000);

                        var timeForRoses = 50;
                        results.innerText = "Time left: " + timeForRoses;
                        var timer3 = setInterval(function() {
                            var timeRemaining = timeForRoses - 1;
                            timeForRoses = timeRemaining;
                            results.innerText = "Time left: " + timeRemaining;
                            if (timeRemaining === 0 && pluckedRoses < 2) {
                                clearInterval(interval5);
                                clearInterval(interval6);
                                clearInterval(timer3);
                                timeRemaining = 0;
                                game.removeAllRoses();
                                console.log("game over");
                                game.gameOver();

                            }
                            if (timeRemaining === 0 && pluckedRoses >= 2) {
                                clearInterval(interval5);
                                clearInterval(interval6);
                                clearInterval(timer3)
                                timeRemaining = 0;
                                game.removeAllRoses();
                                console.log("date time!")
                                game.dateTime();
                            }


                        }, 1000)
                    }
                }, 1000)


            }


        }, 1000)

        drawBoard();
        var interval = setInterval(function() {
            game.showSpoon();
        }, 1500);

        var interval2 = setInterval(function() {
            game.hideSpoon();
        }, 4000);

        //enemies attack
        var interval7 = setInterval(function() {
            game.claudetteNagging();
        }, 3000);

        var interval8 = setInterval(function() {
            game.chrisRAttack();
        }, 4000);

        var interval9 = setInterval(function() {
            game.claudetteGone();
        }, 6000);
        var interval10 = setInterval(function() {
            game.chrisRGone();
        }, 6000);

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
            //this.sounds = [];
            //this.soundInit();
        }

        var game = new Game();

        /* Metody do gry*/
        /*
        Game.prototype.soundInit = function () {
        var sounds = document.querySelectorAll("audio");
            this.sounds.spoon = sounds[0];
            this.sounds.dollar = sounds[1];
            this.sounds.rose = sounds[2];
        }
        
        */
        
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

        Game.prototype.showSpoon = function() {
            this.spoon.x = Math.floor(Math.random() * 10);
            this.spoon.y = Math.floor(Math.random() * 10);
            var index = this.spoon.x + this.spoon.y * 10;
            this.board[index].classList.add("spoon");

        }


        Game.prototype.hideSpoon = function() {
            var spoons = document.querySelectorAll(".spoon");
            for (var i = 0; i < spoons.length; i++) {
                spoons[i].classList.remove("spoon");

            }
        }


        Game.prototype.removeAllSpoons = function() {
            for (var i = 0; i < this.board.length; i++) {
                this.board[i].classList.remove("spoon");
            }
        }


        Game.prototype.showMoney = function() {
            this.dollar.x = Math.floor(Math.random() * 10);
            this.dollar.y = Math.floor(Math.random() * 10);
            var index = this.dollar.x + this.dollar.y * 10;
            this.board[index].classList.add("dollar");

        }

        Game.prototype.hideMoney = function() {
            var dollars = document.querySelectorAll(".dollar");
            for (var i = 0; i < dollars.length; i++) {
                dollars[i].classList.remove("dollar");

            }

        }

        Game.prototype.removeAllMoney = function() {
            for (var i = 0; i < this.board.length; i++) {
                this.board[i].classList.remove("dollar");
            }
        }
        Game.prototype.showRose = function() {
            this.rose.x = Math.floor(Math.random() * 10);
            this.rose.y = Math.floor(Math.random() * 10);
            var index = this.rose.x + this.rose.y * 10;
            this.board[index].classList.add("rose");

        }

        Game.prototype.hideRose = function() {
            var roses = document.querySelectorAll(".rose");
            for (var i = 0; i < roses.length; i++) {
                roses[i].classList.remove("rose");

            }

        }

        Game.prototype.removeAllRoses = function() {
            for (var i = 0; i < this.board.length; i++) {
                this.board[i].classList.remove("rose");
            }
        }

        Game.prototype.claudetteNagging = function() {
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

        Game.prototype.claudetteGone = function() {
            var claudettes = document.querySelectorAll(".claudette");
            for (var i = 0; i < claudettes.length; i++) {
                claudettes[i].classList.remove("claudette");
            }
        }

        Game.prototype.chrisRGone = function() {
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
                    game.hideJohny(x, y);
                    game.moveJohny(x - 1, y);
                    game.collectSpoons();
                    game.earnMoney();
                    game.pluckRoses();
                    game.collideWithEnemy();
                    game.collideWithWall();

                }
                if (event.keyCode === 39) {
                    self.johny.direction = "right";
                    game.hideJohny(x, y);
                    game.moveJohny(x + 1, y);
                    game.collectSpoons();
                    game.earnMoney();
                    game.pluckRoses();
                    game.collideWithEnemy();
                    game.collideWithWall();
                }
                if (event.keyCode === 38) {
                    self.johny.direction = "up";
                    game.hideJohny(x, y);
                    game.moveJohny(x, y - 1);
                    game.collectSpoons();
                    game.earnMoney();
                    game.pluckRoses();
                    game.collideWithEnemy();
                    game.collideWithWall();

                }
                if (event.keyCode === 40) {
                    self.johny.direction = "down";
                    game.hideJohny(x, y);
                    game.moveJohny(x, y + 1);
                    game.collectSpoons();
                    game.earnMoney();
                    game.pluckRoses();
                    game.collideWithEnemy();
                    game.collideWithWall();
                }
            }
        }
        game.moveAround();


        //methods removing stuff
        Game.prototype.collectSpoons = function() {
            for (var i = 0; i < this.board.length; i++) {
                if (this.board[i].className === "johny spoon" || this.board[i].className === "spoon johny") {
                    this.board[i].classList.remove("spoon");
                    collectedSpoons++;
                    console.log(collectedSpoons);
                    //this.sounds.spoon.play();
                    statsSpan.innerText = collectedSpoons + " " + dollarsEarned + " " + pluckedRoses;

                }

            }

        }


        Game.prototype.earnMoney = function() {
            for (var i = 0; i < this.board.length; i++) {
                if (this.board[i].className === "johny dollar" || this.board[i].className === "dollar johny") {
                    this.board[i].classList.remove("dollar");
                    dollarsEarned++;
                    console.log(dollarsEarned);
                    statsSpan.innerText = collectedSpoons + " " + dollarsEarned + " " + pluckedRoses;
                }

            }

        }

        Game.prototype.pluckRoses = function() {
            for (var i = 0; i < this.board.length; i++) {
                if (this.board[i].className === "johny rose" || this.board[i].className === "rose johny") {
                    this.board[i].classList.remove("rose");
                    pluckedRoses++;
                    console.log(pluckedRoses);
                    statsSpan.innerText = collectedSpoons + " " + dollarsEarned + " " + pluckedRoses;
                }

            }

        }
        //collisions
        //collision with enemy
        Game.prototype.collideWithEnemy = function() {
            for (var i = 0; i < this.board.length; i++) {
                if (this.board[i].className === " johny claudette" || this.board[i].className === "claudette johny") {
                    game.gameOver();
                }
                if (this.board[i].className === "johny chrisR" || this.board[i].className === "chrisR johny") {
                    game.gameOver();
                }
            }

        }

        //collision with wall 
        Game.prototype.collideWithWall = function() {
            //this.johny.x = x;
            //this.johny.y = y;
            x = this.johny.x;
            y = this.johny.y;
            var index = this.johny.x + this.johny.y * 10;
            if ((x < 0 || x > 9 || y < 0 || y > 9)) {
                console.log("you outta your mind? where you going?");
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
            gameOverBoard.innerText = " Game over! No sweet lovin' for you! You are tearing me apart!"
        }

        //date happening:

        Game.prototype.dateTime = function(){
            var dateBoard = document.createElement("section");
            dateBoard.classList.add("dateTime");
            gameSection.parentNode.removeChild(gameSection);
            introSection.parentNode.removeChild(introSection);
            body.append(dateBoard);
            dateBoard.innerText =" The date night is on! Do not drink to much scotchka!"
        }

    })




});