document.addEventListener("DOMContentLoaded", function(){
    console.log("date game");
    // findin DOM elements and other viariables
    var startGameButton = document.querySelector(".intro button");
    //console.log(startGameButton);
    var gameSection = document.querySelector(".game");
    console.log(gameSection);
    var gameBoard = gameSection.querySelector(".container");

    var results = document.getElementById("results");
    console.log(results);
    //events
    startGameButton.addEventListener("click", function(){
        this.parentElement.classList.add("invisible");
        gameSection.classList.remove("invisible");

    })

    //creating a board for the game
    function drawBoard(){
        for(var i = 0; i<100; i++){
            var boardDiv = document.createElement("div");
            gameBoard.append(boardDiv);

        }
    }
    drawBoard();



    var collectedSpoons = 0;
    var dollarsEarned= 0;
    var pluckedRoses = 0;

    var Johny = function(x,y, direction){
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    var Spoon = function(x,y){
        this.x = x;
        this.y = y;
    }
    
    var Dollar = function(x,y){
        this.x = x;
        this.y = y;
    }

    var Rose = function(x,y){
        this.x = x;
        this.y = y;

    }

    var Game = function(){
        this.johny = new Johny(0, 0, "right");
        this.spoon = new Spoon(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
        this.dollar = new Dollar(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
        this.rose = new Rose(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10));
        this.board = document.querySelectorAll(".container div");
        this.score =0;
    }

    var game = new Game();

    //count your position on a board
    Game.prototype.countPosition = function(x, y) { 
        return (x + y * 10);
    }

    Game.prototype.showSpoon = function(){
        this.spoon.x = Math.floor(Math.random() * 10);
        this.spoon.y = Math.floor(Math.random() * 10);
        var index = this.spoon.x + this.spoon.y *10;
        this.board[index].classList.add("spoon");
       

    }

    
    var interval = setInterval(function() {
             game.showSpoon();   
    }, 1500);
    
    Game.prototype.hideSpoon = function(){
    	var spoons = document.querySelectorAll(".spoon");
    	for( var i = 0; i<spoons.length; i++ ){
    		spoons[i].classList.remove("spoon");
    		
    	}
    }
    var interval2 = setInterval(function() {
             game.hideSpoon();   
    }, 4000);
   //ograniczenie czasowe zbierania łyżek
   var timeForSpoons = 40;
   results.innerText = "You can collect spoons for " + timeForSpoons;
   var timer = setInterval(function(){
   		timeLeft = timeForSpoons -1;
   		timeForSpoons = timeLeft;
   		results.innerText = "You can collect spoons for " + timeLeft;
   }, 1000)

   
   // usuwanie przedmiotów
   Game.prototype.collectItems= function(){
   		//console.log(this.board);
   		for( var i = 0; i<this.board.length; i++){
   			this.board[i].addEventListener("click", function(){
  
   				if(this.className==="spoon"){
   					this.classList.remove("spoon");
   					collectedSpoons ++;
   					console.log(collectedSpoons);
   					
   				}
   				if(this.className ==="dollar"){
   					this.classList.remove("dollar");
   					dollarsEarned++;
   					console.log(dollarsEarned);
   				}
   				if(collectedSpoons>=20 && timeLeft===0){
   						console.log("zebrano łyżki")				
   						clearInterval(interval);
   						clearInterval(interval2);
   						clearInterval(timer);
   						game.removeAllItems("spoon");
   						var interval3 = setInterval(function() {
              				game.showMoney();
    					}, 1500);
    					var interval4 = setInterval(function() {
             				game.hideMoney();   
   						}, 3000);

   						var timeForDollars = 100;
					   	results.innerText = "You can earn money for "+ timeForDollars;
					   	var timer2 = setInterval(function(){
					   		leftTime = timeForDollars -1;
					   		timeForDollars = leftTime;
					   		results.innerText = "You can earn money for "+ leftTime;
					   })
					   	if(leftTime ===0 && dollarsEarned<50 ){
		  					clearInterval(timer2);
		  					console.log("game over");
		  				}
		  				if(leftTime ===0 &&dollarsEarned>=50){
		  					clearInterval(interval3);
		  					clearInterval(interval4);
		  					clearInterval(timer2);
		  					game.removeAllItems("dollar");
		  				}
  				}

  				if(timeLeft ===0 && collectedSpoons<20){
  					console.log("game over");
  					clearInterval(timer);
  					game.removeAllItems("spoon");
  					
  				}
  				

   			})
   		}

   }
   game.collectItems();
   

   Game.prototype.removeAllItems = function(className) {
   		for( var i =0; i<this.board.length; i ++){
   			this.board[i].classList.remove(className);
   		}
   }
   

   Game.prototype.showMoney = function(){
   		this.dollar.x = Math.floor(Math.random() * 10);
        this.dollar.y = Math.floor(Math.random() * 10);
        var index = this.dollar.x + this.dollar.y *10;
        this.board[index].classList.add("dollar");

   }

   Game.prototype.hideMoney = function(){
   		this.dollar.x = Math.floor(Math.random() * 10);
        this.dollar.y = Math.floor(Math.random() * 10);
        var index = this.dollar.x + this.dollar.y *10;
        this.board[index].classList.remove("dollar");

   }

   


   
  
   

});