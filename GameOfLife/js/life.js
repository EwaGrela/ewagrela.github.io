document.addEventListener("DOMContentLoaded", function() {

    const body = document.querySelector("body");

    const flexContener = document.querySelector(".flexbox");

    const inputBoardWidth = document.getElementById("inputBoardWidth");

    const inputBoardHeight = document.getElementById("inputBoardHeight");

    const playButton = document.querySelector("#play");

    const pauseButton = document.querySelector("#pause");

    const startButton = document.querySelector("#start");

    const refreshButton = document.getElementById("refresh");

    startButton.addEventListener("click", startProgram);
    //stworzenie klasy GameOfLife
    class GameOfLife {
        constructor(boardWidth, boardHeight){
            this.width = boardWidth;
            this.height = boardHeight;
            this.cells = [];
        }

        createBoard() {
            this.board.style.width = (this.width * 10) + "px";
            this.board.style.height = (this.height * 10) + "px";
            let numberOfFields = this.width * this.height;

            for (let i = 0; i < numberOfFields; i++) {
                const newField = document.createElement("div");
                this.board.appendChild(newField);
                newField.classList.add("boardCell"); //aby odróżnić je od diva contenera, gdy potem będą zbierane do zmiennej
            }
            const allFields = document.querySelectorAll(".boardCell");
            this.cells = allFields;

            for (let i = 0; i < this.cells.length; i++) {
                this.cells[i].classList.remove("boardCell"); //ta klasa nie jest nam już później potrzebna
                this.cells[i].addEventListener("click", function(event) {
                    this.classList.toggle("live");
                });
                }

            }
        defineCoordinates(x, y) { //tworzymy metodę, która zwróci nam komórkę o podanych współrzędnych
            this.x = x;
            this.y = y;
            if (x < 0 || x > this.width - 1 || y < 0 || y > this.width) {
                return undefined;
            }
            let index = this.x + this.y * this.width;
            return this.cells[index];
        }
        setCellState (x, y, state) {
            let index = x + y * this.width;
            this.cells[index].state = state;

            if (this.cells[index].state === "alive") {
                this.cells[index].classList.add("live")
            } else {
                    this.cells[index].classList.remove("live")
            }

        }
        computeCellNextState(x, y) { //metoda, za pomocą której obliczamy stan komórki o danych współrzędnych
            let prospectiveNeighbors = [
                this.defineCoordinates(x - 1, y - 1),
                this.defineCoordinates(x, y - 1),
                this.defineCoordinates(x + 1, y - 1),
                this.defineCoordinates(x - 1, y),
                this.defineCoordinates(x + 1, y),
                this.defineCoordinates(x - 1, y + 1),
                this.defineCoordinates(x, y + 1),
                this.defineCoordinates(x + 1, y + 1)
            ];

            let realNeighbors = [];
            for (let i = 0; i < prospectiveNeighbors.length; i++) {
                if (prospectiveNeighbors[i] != undefined) { // jeżeli ten element zostanie znaleziony, należy go włożyć do tabicy z rzeczywistymi sąsiadami
                    realNeighbors.push(prospectiveNeighbors[i]);
                }
            }

            let aliveNeighbors = [];
            for (let i = 0; i < realNeighbors.length; i++) {
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

        computeNextGeneration() {
            this.nextGeneration = [];
            for (let i = 0; i < this.height; i++) {
                for (let j = 0; j < this.width; j++) {
                    let element = this.computeCellNextState(j, i); //ze względu na to, że iterujemy po rzędach a nie kolumnach
                    this.nextGeneration.push(element);
                }
            }
            return this.nextGeneration;
        }

        printNextGeneration() {
            for (let i = 0; i < this.cells.length; i++) {
                if (this.nextGeneration[i] === 1) {
                    this.cells[i].classList.add("live");
                    this.cells[i].state = "alive";
                } else {
                    this.cells[i].classList.remove("live");
                    this.cells[i].state = "dead";
                }
            }
        }
        firstGlider() {
            this.setCellState(1, 0, "alive");
            this.setCellState(2, 1, "alive");
            this.setCellState(0, 2, "alive");
            this.setCellState(1, 2, "alive");
            this.setCellState(2, 2, "alive");
        }
        secondGlider() {
            this.setCellState(13, 1, "alive");
            this.setCellState(14, 2, "alive");
            this.setCellState(12, 3, "alive");
            this.setCellState(13, 3, "alive");
            this.setCellState(14, 3, "alive");
        }
        thirdGlider() {
            this.setCellState(8, 4, "alive");
            this.setCellState(9, 5, "alive");
            this.setCellState(7, 6, "alive");
            this.setCellState(8, 6, "alive");
            this.setCellState(9, 6, "alive");
        }

    }        
    //funkcja zarządzająca grą:
    function startProgram() {
        //funkcje sterujące programem:
        function createPopup() {
            const popupDiv = document.createElement("div");
            body.insertBefore(popupDiv, flexContener);
            popupDiv.classList.add("popup");
        }    
    
        function createHideButton(){
            const hideButton = document.createElement("button");
            hideButton.innerText = "hide"
            document.querySelector(".popup").appendChild(hideButton);

            hideButton.addEventListener("click", function(event) {
                this.parentNode.removeChild(this);
                const popupDiv = document.querySelector(".popup");
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

        //tworzymy obiekt game będący instancją klasy GameOfLife
        let game = new GameOfLife(inputBoardWidth.value, inputBoardHeight.value);
        const board = document.getElementById("board");
        game.board = board;
        game.createBoard();

        const infoDiv = document.createElement("div");
        body.insertBefore(infoDiv, flexContener);
        infoDiv.innerText = "You have just created a Game of Life board with several gliders. " +
            "You can watch them travel the board and see what happens next, but to make it more interesting, hit pause at any given time and" +
            " make other cells come alive by clicking them! Do it and draw some fancy shapes on your board, expand the glider, and so forth. " +
            "OK, now click below and hide the info board."
        infoDiv.classList.add("info");
        const hideButton = document.createElement("button");
        hideButton.innerText = "hide"
        infoDiv.appendChild(hideButton);
        hideButton.addEventListener("click", function(event) {
            this.parentNode.removeChild(this);
            infoDiv.parentNode.removeChild(infoDiv);
        });
        //stworzenie gliderów
        game.firstGlider();
        game.secondGlider();      
        game.thirdGlider();


        const playButton = document.getElementById("play");
        const pauseButton = document.getElementById("pause");

        playButton.addEventListener("click", function() {
            let interval = setInterval(stepOneGame, 200);
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
        refreshButton.classList.remove("hidden");
        inputBoardWidth.parentNode.removeChild(inputBoardWidth);
        inputBoardHeight.parentNode.removeChild(inputBoardHeight);
        this.parentNode.removeChild(this);
    }

    refreshButton.addEventListener("click", refreshPage);
    function refreshPage(){
        location.reload();
    }

});