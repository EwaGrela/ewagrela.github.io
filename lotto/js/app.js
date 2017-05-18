document.addEventListener("DOMContentLoaded", function(e){
    const body = document.querySelector("body");
    const section = document.querySelector("section");
    const articleLotto = document.querySelector("article");
    const articleBalls = document.getElementsByTagName("article")[1];
    const numbers = [];
    const balls = document.getElementsByClassName("ball");
    const drawnNums = [];
    const chosenByMachine = [];
    function createNumberBoard(number){
        const board = document.createElement("div");
        board.classList.add("board")
        articleLotto.append(board);
        for( let i = 0; i<number; i ++){
            const div = document.createElement("div");
            div.classList.add("boardDiv")
            board.append(div);
        }
        const boardDivs = document.getElementsByClassName("boardDiv");
        for( let i =0; i<boardDivs.length; i++){
            boardDivs[i].setAttribute("data-number", i+1);
            const number = boardDivs[i].getAttribute("data-number");
            numbers.push(number);
            boardDivs[i].textContent = number;
        }
    }
    createNumberBoard(49); //ten for now, we are checking how to eliminate the same -done! :)

    const board = document.querySelector(".board");
    const boardDivs = document.querySelectorAll(".boardDiv");
    function drawNumbers(){
        boardDivs.forEach(boardDiv => boardDiv.addEventListener("click", selectNums));
        function selectNums(){
            const number = parseInt(this.dataset.number, 10);
            if(this.hasAttribute("data-number")){
                drawnNums.push(number);
                this.removeAttribute("data-number");
                this.classList.add("crossedOut");

            } 
            if(drawnNums.length=== 6){
                //board.classList.remove("board"); //not a very elegant solution, but this will remove the problem with overriding styles
                boardDivs.forEach( boardDiv => boardDiv.removeAttribute("data-number")); 
                let startDraw = document.querySelector(".startDraw");
                if(startDraw === null){ // you have to prevent creating the button if it is already there!
                    createButtonForMachineDraw();
                } else {
                    return;
                }
                //hideElement(board);

            }
            //return drawnNums;
        }
        
        return drawnNums;

    }
    drawNumbers();

    function machineDraw(){
        const numbers = [];
        for( let i =0; i<boardDivs.length; i++){
            numbers.push(i+1);
        }

        for( let i =0; i<6; i++){
            const idx = Math.floor(Math.random() * numbers.length)
            chosenByMachine.push(numbers[idx]);
            numbers.splice(idx,1);

        }
        const btnToRemove = document.querySelector(".startDraw");
        btnToRemove.parentNode.removeChild(btnToRemove);
        return chosenByMachine;

    }
    //machineDraw();

    function createButtonForMachineDraw(){
    	const startDraw = document.createElement("button");
    	startDraw.classList.add("startDraw");
    	body.append(startDraw);
    	startDraw.textContent ="release the balls";
    	startDraw.addEventListener("click", machineDraw);
    	startDraw.addEventListener("click", compareArrays);
    	
    }

    function compareArrays(){
            const tim1 = setTimeout(()=>{
                balls[0].classList.remove("invisible");
            }, 1000);
            const tim2 = setTimeout(()=>{
                balls[1].classList.remove("invisible");
            }, 2000);
            const tim3 = setTimeout(()=>{
                balls[2].classList.remove("invisible");
            }, 3000);
            const tim4 = setTimeout(()=>{
                balls[3].classList.remove("invisible");
            }, 4000);
            const tim5 = setTimeout(()=>{
                balls[4].classList.remove("invisible");
            }, 5000);
            const tim6 = setTimeout(()=>{
                balls[5].classList.remove("invisible");
            }, 6000);
        for( let i =0; i<balls.length; i++){
            //balls[i].classList.remove("invisible");
            balls[i].textContent = chosenByMachine[i];
        }
        const common =[];
        const arr1 = chosenByMachine;
        const arr2 = drawnNums;
            for(let i = 0; i<arr1.length; i++){
                for(let j= 0; j<arr2.length; j++){
                    if(arr1[i]===arr2[j]){
                        common.push(arr1[i]);
                    }
                }
            }
            function generateResult(){
                const resultsBoard = document.createElement("article");
                section.append(resultsBoard);
                const paragraph = document.createElement("p");
                resultsBoard.append(paragraph);
                resultsBoard.classList.add("resultsBoard");
                resultsBoard.classList.add("invisible");
                if( common.length< 3){
                    paragraph.textContent ="Outta luck, only " + common.length + " and no money ";
                } else if(common.length ===3) {
                    paragraph.textContent ="Not bad, you have " + common.length + " , here's twenty ";
                } else if(common.length ===4){
                    paragraph.textContent ="Not bad, you have " + common.length + " , here's your hundred ";
                } else if( common.length ===5){
                    paragraph.textContent ="Not bad, you have " + common.length + " , here's your thousand ";
                }
                else if(common.length===6){
                    paragraph.textContent ="A true winner " + common.length + " here's your million";
                }
            }
        const timeout = setTimeout(()=>{
            document.querySelector(".resultsBoard").classList.remove("invisible"); //well, you cannot acces this outside the code
        }, 8000)
        generateResult();
        makeComebackBtn();

        function makeComebackBtn(){
            console.log("make a button in the morning");
        }
    }
    
    
    

})