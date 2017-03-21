document.addEventListener("DOMContentLoaded", function() {
    console.log("My game of life - this WILL be a challenge!");

    var body = document.querySelector("body");

    var flexContener = document.querySelector(".flexbox");

    var inputBoardWidth = document.getElementById("inputBoardWidth");

    var inputBoardHeight = document.getElementById("inputBoardHeight");

    var playButton = document.querySelector("#play");

    var pauseButton = document.querySelector("#pause");

    var startButton = document.querySelector("#start");

    startButton.addEventListener("click", startProgram);

    function startProgram() {
        var GameOfLife = function(boardWidth, boardHeight) { /*tworzymy obiekt GameOfLife przy pomocy konstruktora */
            this.width = boardWidth;
            this.height = boardHeight;
            this.cells = [];
        };

        function createPopup() {
	    var popupDiv = document.createElement("div");
            body.insertBefore(popupDiv, flexContener);
            popupDiv.classList.add("popup");
	}    
	
	function createHideButton(){
            var hideButton = document.createElement("button");
            hideButton.innerText = "hide"
          document.querySelector(".popup").appendChild(hideButton);

	    hideButton.addEventListener("click", function(event) {
                this.parentNode.removeChild(this);
		var popupDiv = document.querySelector(".popup");
                popupDiv.parentNode.removeChild(popupDiv);
            });
	}
        if (inputBoardWidth.value < 20 || inputBoardHeight.value < 20) {
            createPopup();
            document.querySelector(".popup").innerText = "Come on, you can do better. Size sometimes matters :) Twenty is a nice number, for instance";
	    createHideButton();
            return false;
        }
        if (inputBoardWidth.value > 70 || inputBoardHeight.value > 70) {
            createPopup();
            document.querySelector(".popup").innerText = "It is NOT an infinite board, you know. Make it a wee bit smaller, seventy is the biggest you can get :)";
            createHideButton();
            return false;
        }
        if (inputBoardWidth.value !== inputBoardHeight.value) {
	    createPopup();
            document.querySelector(".popup").innerText = "Make it a square board, please. It is a nice shape, after all :)"
            createHideButton();
            return false;
        }

        //tworzymy obiekt game będący obiektem typu GameOfLife
        var game = new GameOfLife(inputBoardWidth.value, inputBoardHeight.value);
        console.log(game);

        var board = document.getElementById("board");
        console.log(board);

        game.board = board;
        console.log(game);
        //tworzymy tablicę przy pomocy metody createBoard();
        GameOfLife.prototype.createBoard = function() {
            this.board.style.width = (this.width * 10) + "px";
            this.board.style.height = (this.height * 10) + "px";
            var numberOfFields = this.width * this.height;

            for (var i = 0; i < numberOfFields; i++) {
                var newField = document.createElement("div");
                this.board.appendChild(newField);
                newField.classList.add("boardCell"); //aby odróżnić je od diva contenera, gdy potem będą zbierane do zmiennej
            }
            var allFields = document.querySelectorAll(".boardCell");
            this.cells = allFields;

            for (var i = 0; i < this.cells.length; i++) {
                console.log(this.cells[i].className);
                this.cells[i].classList.remove("boardCell"); //ta klasa nie jest nam już później potrzebna
                this.cells[i].addEventListener("click", function(event) {
                    this.classList.toggle("live");
                });
            }

        }
        game.createBoard();

        var infoDiv = document.createElement("div");
        body.insertBefore(infoDiv, flexContener);
        infoDiv.innerText = "You have just created a Game of Life board with several gliders. " +
            "You can watch them travel the board and see what happens next, but to make it more interesting, hit pause at any given time and" +
            " make other cells come alive by clicking them! Do it and draw some fancy shapes on your board, expand the glider, and so forth. " +
            "OK, now click below and hide the info board."
        infoDiv.classList.add("info");
        var hideButton = document.createElement("button");
        hideButton.innerText = "hide"
        infoDiv.appendChild(hideButton);
        hideButton.addEventListener("click", function(event) {
            this.parentNode.removeChild(this);
            infoDiv.parentNode.removeChild(infoDiv);
        });
        GameOfLife.prototype.defineCoordinates = function(x, y) { //tworzymy metodę, która zwróci nam komórkę o podanych współrzędnych
            this.x = x;
            this.y = y;
            //console.log(this);
            if (x < 0 || x > this.width - 1 || y < 0 || y > this.width) {
                return undefined;
            }
            index = this.x + this.y * this.width;
            return this.cells[index];
        }


        GameOfLife.prototype.setCellState = function(x, y, state) {
            var index = x + y * this.width;
            this.cells[index].state = state;

            if (this.cells[index].state === "alive") {
                this.cells[index].classList.add("live")
            } else {
                this.cells[index].classList.remove("live")
            }

        }

        GameOfLife.prototype.firstGlider = function() {
            this.setCellState(1, 0, "alive");
            this.setCellState(2, 1, "alive");
            this.setCellState(0, 2, "alive");
            this.setCellState(1, 2, "alive");
            this.setCellState(2, 2, "alive");
        }

        game.firstGlider();
        GameOfLife.prototype.secondGlider = function() {
            this.setCellState(13, 1, "alive");
            this.setCellState(14, 2, "alive");
            this.setCellState(12, 3, "alive");
            this.setCellState(13, 3, "alive");
            this.setCellState(14, 3, "alive");
        }

        game.secondGlider();

        GameOfLife.prototype.thirdGlider = function() {
            this.setCellState(8, 4, "alive");
            this.setCellState(9, 5, "alive");
            this.setCellState(7, 6, "alive");
            this.setCellState(8, 6, "alive");
            this.setCellState(9, 6, "alive");
        }

        game.thirdGlider();

        GameOfLife.prototype.computeCellNextState = function(x, y) { //metoda, za pomocą której obliczamy stan komórki o danych współrzędnych

            var prospectiveNeighbors = [
                this.defineCoordinates(x - 1, y - 1),
                this.defineCoordinates(x, y - 1),
                this.defineCoordinates(x + 1, y - 1),
                this.defineCoordinates(x - 1, y),
                this.defineCoordinates(x + 1, y),
                this.defineCoordinates(x - 1, y + 1),
                this.defineCoordinates(x, y + 1),
                this.defineCoordinates(x + 1, y + 1)
            ];

            var realNeighbors = [];
            for (var i = 0; i < prospectiveNeighbors.length; i++) {
                if (prospectiveNeighbors[i] != undefined) { // jeżeli ten element zostanie znaleziony, należy go włożyć do tabicy z rzeczywistymi sąsiadami
                    realNeighbors.push(prospectiveNeighbors[i]);
                }
            }

            var aliveNeighbors = [];
            for (var i = 0; i < realNeighbors.length; i++) {
                if (realNeighbors[i].className === "live") { //spośród prawdziwych sąsiadów znajdujemy żywych
                    aliveNeighbors.push(realNeighbors[i]);
                }
            }

            if (this.defineCoordinates(x, y).state == "alive") {
                if (aliveNeighbors.length < 2 || aliveNeighbors.length > 3) {
                    return 0;
                } else {
                    return 1;
                }
            } else {
                if (aliveNeighbors.length === 3) {
                    return 1;
                } else {
                    return 0;
                }
            }

        }


        GameOfLife.prototype.computeNextGeneration = function() {
            //console.log(this.width, this.height);
            console.log(this);
            this.nextGeneration = [];
            for (var i = 0; i < this.height; i++) {
                for (var j = 0; j < this.width; j++) {
                    var element = this.computeCellNextState(j, i); //ze względu na to, że iterujemy po rzędach a nie kolumnach
                    this.nextGeneration.push(element);
                }
            }
            return this.nextGeneration;
        }


        GameOfLife.prototype.printNextGeneration = function() {
            console.log(this.nextGeneration);
            for (var i = 0; i < this.cells.length; i++) {
                if (this.nextGeneration[i] === 1) {
                    this.cells[i].classList.add("live");
                    this.cells[i].state = "alive";
                } else {
                    this.cells[i].classList.remove("live");
                    this.cells[i].state = "dead";
                }
            }
        }


        var playButton = document.getElementById("play");
        console.log(playButton);

        var pauseButton = document.getElementById("pause");
        console.log(pauseButton);

        playButton.addEventListener("click", function() {
            var interval = setInterval(stepOneGame, 200);
            document.interval = interval;
        });


        function stepOneGame() {
            game.computeNextGeneration();
            game.printNextGeneration();

        }

        pauseButton.addEventListener("click", pauseGame);

        function pauseGame() {
            clearInterval(document.interval);
        }
        inputBoardWidth.value = "";
        inputBoardHeight.value = "";
        playButton.classList.remove("hidden");
        pauseButton.classList.remove("hidden");
        inputBoardWidth.parentNode.removeChild(inputBoardWidth);
        inputBoardHeight.parentNode.removeChild(inputBoardHeight);
        this.parentNode.removeChild(this);
    }


});