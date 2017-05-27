document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    const resultParagraph = document.getElementById("resultParagraph");
    const resultSpan = resultParagraph.children[0];
    const input = document.getElementsByTagName("input");
    console.log(resultParagraph, resultSpan);
    const section = document.querySelector("section");
    document.myForm.addEventListener("submit", function(event){
    	event.preventDefault();
    	var isOK =true;
    	console.log(this);
    	const weight = this.weight;
    	const height = this.height;
    	if( weight.value.length<2 || weight.value.length>3){
    		console.log("wut")
    		isOK =false;
    		resultSpan.textContent = "Something went wrong";

    	}
    	if( height.value.length<3 || height.value.length>3){
    		console.log("sure it is ok?")
    		isOK =false;
    		resultSpan.textContent = "Something went wrong";

    	}
    	if(isOK){
    		const roundedHeight = height.value/100;
    		resultSpan.textContent = (weight.value/(roundedHeight*roundedHeight)).toFixed(2);
    		resultParagraph.classList.remove("invisible");
    		this.classList.add("invisible");
    		createResultDescription();
            this.classList.add("invisible");
    	}
    	this.reset();
    })

    function createResultDescription(){
    	const weightResult = resultSpan.textContent;
    	console.log(weightResult);
    	const descriptionArticle = document.createElement("article");
    	section.append(descriptionArticle);
        descriptionArticle.classList.add("descriptionArticle");
        descriptionParagraph = document.createElement("p");
        descriptionArticle.append(descriptionParagraph);
        descriptionParagraph.classList.add("descriptionParagraph");
        const lowestWeight = (18.50 * (input[1].value/100) * (input[1].value/100)).toFixed(1);
        const highestWeight = (24.99 * (input[1].value/100) * (input[1].value/100)).toFixed(1);
        createRefreshBtn(descriptionArticle);
    	if(weightResult<16){
            descriptionArticle.classList.add("alarm");
            descriptionParagraph.textContent =" You need to put on weight,  you should weight between " + lowestWeight + " kg and " +highestWeight +" kg. " + "If you suffer from eating disorder, do not hesitate to get help.";
    	}
    	if( weightResult>=16 &&weightResult<17){
            descriptionArticle.classList.add("alert");
            descriptionParagraph.textContent =" Seems that you are really underweight, you should weight between " + lowestWeight + " kg and " + highestWeight +" kg. " + "Contact a doctor and try maintaining a varied, balanced diet.";
    	}
    	if(weightResult>=17 && weightResult<18.50) {
            descriptionArticle.classList.add("warning");
            descriptionParagraph.textContent ="It seems that you are a little underweight you should weight between " + lowestWeight + " kg and " +highestWeight +" kg. " +"Put on some weight and eat a lot of fruits and veggies!"
    	}
    	if(weightResult>=18.50 && weightResult<25){
            descriptionArticle.classList.add("success");
            descriptionParagraph.textContent ="Congrats! Your weight is ideal. Try maintaining it and keep healthy by eating sensibly and exercising regularly";
    	}
    	if(weightResult>=25 && weightResult<30){
            descriptionArticle.classList.add("warning");
            descriptionParagraph.textContent ="It is not bad, but you should weight between " + lowestWeight + " kg and " +highestWeight +" kg. "+"Loosing a few pounds will help you feel better about yourself and keep healthy in the long run.";
    	}
    	if(weightResult>=30 && weightResult<35){
            descriptionArticle.classList.add("alert");
            descriptionParagraph.textContent ="You are obese, you should weight between " + lowestWeight + " kg and " +highestWeight +" kg. " +"Contact a dietician so they can help you lose those excessive pounds and enjoy life more fully.";
    	}
    	if(weightResult>=35 && weightResult<40){
            descriptionArticle.classList.add("alarm")
            descriptionParagraph.textContent ="You are obese, you should weight between " + lowestWeight + " kg and " +highestWeight +" kg. " + "Contact a dietician, seek help. Your life is too precious to waste it!";

    	}
    	if(weightResult>=40){
    		console.log("you are morbidly obese, loose weight or die");
            descriptionArticle.classList.add("alarm");
            descriptionParagraph.textContent ="You are what they call morbidly obese, you should weight between " + lowestWeight + "kg and " +highestWeight +"kg. "+ "Seek help, get your life back on track, even if this means some bariatric surgery.";

    	}
    }

    function createRefreshBtn(element){
    	const refreshBtn = document.createElement("a");
    	element.append(refreshBtn);
    	refreshBtn.classList.add("refreshBtn")
    	refreshBtn.textContent = "refresh";
    	refreshBtn.setAttribute("href", "https://ewagrela.github.io/BMI/")
    }

});