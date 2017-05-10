document.addEventListener("DOMContentLoaded", function() {

    /* DOM elements*/

    var header1 = document.querySelector("h1");
    var header2 = document.querySelector("h2");
    var randomizingButton = document.getElementById("randomizer");

    var articles = document.querySelectorAll(".container article");

    var resultsArticle = document.querySelector(".resultsOfDraw");

    var numberPlaceholder = document.getElementById("numberPlaceholder");

    var backButton = document.querySelector(".back");

    /*
    paragraphs informing of number properties
    */
    var allInfoPar = document.querySelectorAll(".numberInfo");
    for( var i = 0; i<allInfoPar.length; i++){
        console.log(allInfoPar[i]);
        var span = document.createElement("span");
        allInfoPar[i].append(span);
    }
    
    
    /* 
    event listeners
    */
    randomizingButton.addEventListener("click", function(){
        drawRandomNumber();
        header1.classList.add("invisible");
        resultsArticle.classList.remove("invisible");
        this.parentElement.nextElementSibling.classList.remove("invisible");
        this.parentElement.classList.add("invisible");
        
    });

    backButton.addEventListener("click", function(){
        console.log(this.parentElement.previousElementSibling.previousElementSibling);
        header1.classList.remove("invisible");
        this.parentElement.classList.add("invisible");
        this.parentElement.previousElementSibling.classList.add("invisible");
        this.parentElement.previousElementSibling.previousElementSibling.classList.remove("invisible");
    })
    


    /* functions */
    function drawRandomNumber(){
        var randomNum = Math.floor((Math.random() * 1000) + 1); 
        numberPlaceholder.innerText = randomNum;
        allInfoPar[0].innerHTML = " The number you drew is <span></span>";
        var span = allInfoPar[0].firstElementChild;
        span.innerText = randomNum;
        isDivisibleByFive(randomNum);
        isEven(randomNum);
        showDivisors(randomNum);
        sumDivisors(randomNum);
        isPerfect(randomNum);
        isPrime(randomNum);
    }
    function isDivisibleByFive(number){
        if(number % 5 ===0){
         
            allInfoPar[1].innerHTML = " It is <span>divisible</span> by <span>5</span>. ";
        } else {

            allInfoPar[1].innerHTML =" It is <span>not divisible</span> by <span>5</span>.";
        }
    }
   

    function isEven(number){
        if(number % 2 ===0){

            allInfoPar[4].innerHTML =" It is also<span> even</span>."
        } else {

            allInfoPar[4].innerHTML =" It is also <span>odd</span>."
 
        }
    }
    //isEven(33);

    function showDivisors(number) {
        var divisors = [];
        for ( var i = 1; i <=number; i ++){
            if( number % i ===0) {
                divisors.push(i);
            }
        }
        allInfoPar[5].innerHTML =" It has got  " +"<span>" + divisors.length +"</span>" + " divisors. "; 
        allInfoPar[6].innerHTML =" These are: " + "<span>" +divisors+ "</span>";
        return divisors;
    }
    

    function sumDivisors(number){
        var divisors = [];
        for ( var i = 1; i<=number; i++){
            if(number %i ===0){
                divisors.push(i);
            }
        }

        var sum = 0;
        for ( var i = 0; i<divisors.length; i++){
            sum = sum + divisors[i];
        }
        //return sum;
        allInfoPar[7].innerHTML = " Its divisors sum up to " +"<span>" +sum+"</span>";
  
    }
    
    //sumdivisors(5);
    function isPerfect(number){
        var divisors= [];
        for( var i = 0; i<number; i++){
            if(number %i ===0){
                divisors.push(i);
            }
        }
        var sum = 0;
        for(var i = 0; i<divisors.length; i ++){
            sum = sum + divisors[i];

        }
        if( sum ===number){
            allInfoPar[2].innerHTML =" It is <span>a perfect</span> number. "
        } else {
          
            allInfoPar[2].innerHTML =" It is <span>not a perfect</span> number. "
        }

    }

    function isPrime(number){
        if(number ===1 || number ===2){
            allInfoPar[3].innerHTML = " It is <span>a prime</span> number. "
        } 
        var divisors =[];
        for ( var i =2; i<number; i++) {
            if(number %i ===0){
                divisors.push(i);
            }
        }
      
        if( divisors.length >0){
           
            allInfoPar[3].innerHTML = " It is <span>not a prime</span> number. "
        } else {
          
            allInfoPar[3].innerHTML = " It is <span>a prime</span> number. "
        }
    }
   


});