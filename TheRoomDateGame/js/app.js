document.addEventListener("DOMContentLoaded", function(){
    console.log("date game");
    // findin DOM elements and other viariables
    var startGameButton = document.querySelector(".intro button");
    //console.log(startGameButton);
    var gameSection = document.querySelector(".game");
    //console.log(gameSection);
    var gameBoard = gameSection.querySelector(".container");

    var results = document.getElementById("results");
    //console.log(results);
    //events
    startGameButton.addEventListener("click", function(){
        this.parentElement.classList.add("invisible");
        gameSection.classList.remove("invisible");
        //ograniczenie czasowe zbierania łyżek
		var timeForSpoons = 40;
		results.innerText = "You can collect spoons for " + timeForSpoons;
        var timer = setInterval(function(){
	   		timeLeft = timeForSpoons -1;
	   		timeForSpoons = timeLeft;
	   		results.innerText = "You can collect spoons for " + timeLeft;

	   		if(timeLeft === 0 &&collectedSpoons<10){
		  			clearInterval(timer);
		  			clearInterval(interval);
		  			clearInterval(interval2);
		  			console.log("game over");
		  			timeLeft =0
		  			game.removeAllSpoons();
		  			
  					
  				}
  				if(timeLeft ===0 && collectedSpoons>=10){
   					console.log("zebrano łyżki")
   					clearInterval(timer);				
   					clearInterval(interval);
   					clearInterval(interval2);
   					timeLeft = 0;
   					game.removeAllSpoons();
   					

  				}	


   		}, 1000)
   		
        drawBoard();
        var interval = setInterval(function() {
             game.showSpoon();   
    	}, 1500);
    	var interval2 = setInterval(function() {
             game.hideSpoon();   
    	}, 4000);

    	    //creating a board for the game
    function drawBoard(){
        for(var i = 0; i<100; i++){
            var boardDiv = document.createElement("div");
            gameBoard.append(boardDiv);

        }
    }
   



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

/* Metody do gry*/
    //count your position on a board
    Game.prototype.countPosition = function(x, y) { 
        return (x + y * 10);
    }

    Game.prototype.showJohny = function(x,y){
    	var index = this.countPosition(x, y);
        this.board[index].classList.add("johny");
    }
    game.showJohny(0,0);

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

    Game.prototype.moveAround = function(){
    	var self = this;
    	document.addEventListener("keydown", movingAround);
    	function movingAround(event){

    		var x = self.johny.x;
    		var y = self.johny.y;
    		if (event.keyCode === 37) {
                self.johny.direction = "left";
                game.hideJohny(x,y);
                game.moveJohny(x-1, y);
                game.collectSpoons();
                
            }
            if (event.keyCode === 39) {
                self.johny.direction = "right";
                game.hideJohny(x,y);
                game.moveJohny(x+1, y);
                game.collectSpoons();
                
            }
            if (event.keyCode === 38) {
                self.johny.direction = "up";
                game.hideJohny(x,y);
                game.moveJohny(x, y-1);
                game.collectSpoons();
               
            }
            if (event.keyCode === 40) {
                self.johny.direction = "down";
                game.hideJohny(x,y);
                game.moveJohny(x, y+1);
                game.collectSpoons();
            }
    	}
    }
    game.moveAround();

    Game.prototype.showSpoon = function(){
        this.spoon.x = Math.floor(Math.random() * 10);
        this.spoon.y = Math.floor(Math.random() * 10);
        var index = this.spoon.x + this.spoon.y *10;
        this.board[index].classList.add("spoon");
       
    }

       
    Game.prototype.hideSpoon = function(){
    	var spoons = document.querySelectorAll(".spoon");
    	for( var i = 0; i<spoons.length; i++ ){
    		spoons[i].classList.remove("spoon");
    		
    	}
    }
    
    
   Game.prototype.removeAllSpoons = function() {
   		for( var i =0; i<this.board.length; i ++){
   			this.board[i].classList.remove("spoon");
   		}
   }
   

   Game.prototype.showMoney = function(){
   		this.dollar.x = Math.floor(Math.random() * 10);
        this.dollar.y = Math.floor(Math.random() * 10);
        var index = this.dollar.x + this.dollar.y *10;
        this.board[index].classList.add("dollar");

   }

   Game.prototype.hideMoney = function(){
   		var dollar = document.querySelectorAll(".dollar");
    	for( var i = 0; i<spoons.length; i++ ){
    		spoons[i].classList.remove("dollar");
    		
    	}

   }

   Game.prototype.removeAllMoney = function() {
   		for( var i =0; i<this.board.length; i ++){
   			this.board[i].classList.remove("dollar");
   		}
   }
   Game.prototype.showRose = function(){
   		this.dollar.x = Math.floor(Math.random() * 10);
        this.dollar.y = Math.floor(Math.random() * 10);
        var index = this.dollar.x + this.dollar.y *10;
        this.board[index].classList.add("rose");

   }

   Game.prototype.hideRose = function(){
   		var roses = document.querySelectorAll(".rose");
    	for( var i = 0; i<spoons.length; i++ ){
    		spoons[i].classList.remove("rose");
    		
    	}

   }

   Game.prototype.removeAllRoses = function() {
   		for( var i =0; i<this.board.length; i ++){
   			this.board[i].classList.remove("rose");
   		}
   }

   
// usuwanie przedmiotów
   Game.prototype.collectSpoons= function(){
   		//console.log(this.board);
   		//console.log(this);
   		//console.log(this.johny);
   		for ( var i = 0; i<this.board.length; i++){
   			if(this.board[i].className ==="johny spoon" || this.board[i].className ==="spoon johny") {
   				this.board[i].classList.remove("spoon");
   				collectedSpoons ++;
   				console.log(collectedSpoons);
   			}
   			
   		}

   	}

   
   game.collectSpoons();


   Game.prototype.collectMoney = function(){
   		var interval3 = setInterval(function() {
              game.showMoney();
    	}, 1500);
    	var interval4 = setInterval(function() {
             game.hideMoney();   
   		}, 3000);

   		var timeForDollars = 50;
		results.innerText = "You can earn money for "+ timeForDollars;
		var timer2 = setInterval(function(){
		leftTime = timeForDollars -1;
		timeForDollars = leftTime;
		results.innerText = "You can earn money for "+ leftTime;
		console.log(leftTime);
		
		}, 1000)
   		for( var i = 0; i<this.board.length; i++){
   			function collecting2(){
   				if(this.className ==="dollar"){
		   					this.classList.remove("dollar");
		   					dollarsEarned++;
		   					console.log(dollarsEarned);
   				}

   				if(leftTime === 0 && dollarsEarned<20){
					clearInterval(timer2);
					clearInterval(interval3);
				  	clearInterval(interval4);
				  	game.removeAllMoney();
				  	event.target.removeEventListener("click", collecting2)
				  	leftTime = 0;
					console.log("game over");
				}
				if( leftTime ===0 && dollarsEarned>=20){
					clearInterval(interval3);
					clearInterval(interval4);
					clearInterval(timer2);
					game.removeAllMoney();
					leftTime = 0;
					game.removeAllItems("dollar");
					event.target.removeEventListener("click", collecting2)
					console.log("congrats, time for roses");
				}
   			}
   			this.board[i].addEventListener("click", collecting2);
   		}
   }
var timeout = setTimeout(function(){
game.collectMoney();
}, 40000);
  


Game.prototype.collectRoses = function(){

	   	var interval5 = setInterval(function() {
              game.showRose();
    	}, 1000);
    	var interval6 = setInterval(function() {
             game.hideRose();   
   		}, 2000);

   		var timeForRoses = 50;
		results.innerText = "You can pluck roses for "+ timeForRoses;
		var timer3 = setInterval(function(){
		timeRemaining = timeForRoses -1;
		timeForRoses = timeRemaining;
		results.innerText = "You can pluck roses for "+ timeRemaining;
		console.log(timeRemaining);
		
		}, 1000)
   		for( var i = 0; i<this.board.length; i++){
   			function collecting3(){
   				if(this.className ==="rose"){
		   					this.classList.remove("rose");
		   					pluckedRoses++;
		   					console.log(pluckedRoses);
   				}

   				if(timeRemaining === 0 && pluckedRoses<20){
					clearInterval(timer3);
					clearInterval(interval5);
				  	clearInterval(interval6);
				  	
				  	event.target.removeEventListener("click", collecting3);
				  	timeRemaining = 0;
					console.log("game over");
				}
				if( timeRemaining ===0 && pluckedRoses>=20){
					clearInterval(interval5);
					clearInterval(interval6);
					clearInterval(timer3);
					
					timeRemaining = 0;
					event.target.removeEventListener("click", collecting3);
					console.log("congrats, it is done");
				}
   			}
   			this.board[i].addEventListener("click", collecting3);
   		}

}

var timeout2 = setTimeout(function(){
	game.collectRoses();
}, 90000)



})


   


   
  
   

});