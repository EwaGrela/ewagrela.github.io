document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    const resultSpan = document.getElementById("resultParagraph").children[0];
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
    	if(weightResult<16){
    		console.log("hospital, now")
            descriptionArticle.classList.add("alarm");
            descriptionParagraph.textContent =" You need to put on weight, you seem to be really malnourished. If you suffer from eating disorder, do not hesitate to get help";
    	}
    	if( weightResult>=16 &&weightResult<17){
    		console.log("have been ill recently? put on some weight!");
            descriptionArticle.classList.add("alert");
            descriptionParagraph.textContent =" Seems that you are really underweight. Contact a doctor and try maintaining a varied, balanced diet";
    	}
    	if(weightResult>=17 && weightResult<18.50) {
    		console.log("put on some weight");
            descriptionArticle.classList.add("warning");
            descriptionParagraph.textContent ="It seems that you are a little underweight. Put on some weight and eat a lot of fruits and veggies!"
    	}
    	if(weightResult>=18.50 && weightResult<25){
    		console.log("you are fine, congrats");
            descriptionArticle.classList.add("success");
            descriptionParagraph.textContent ="Congrats! Your weight is ideal. Try maintaining it and keep healthy by eating sensibly and exercising regularly";
    	}
    	if(weightResult>=25 && weightResult<30){
    		console.log("you should loose some pounds");
            descriptionArticle.classList.add("warning");
            descriptionParagraph.textContent ="It is not bad, but loosing a few pounds will help you feel better about yourself and keep healthy in the long run";
    	}
    	if(weightResult>=30 && weightResult<35){
    		console.log("you are obese");
            descriptionArticle.classList.add("alert");
            descriptionParagraph.textContent ="You are obese. Contact a dietician so they can help you lose those excessive pounds and enjoy life more fully";
    	}
    	if(weightResult>=35 && weightResult<40){
    		console.log("this is serious, you are obese, go to doctor");
            descriptionArticle.classList.add("alarm")
            descriptionParagraph.textContent ="You are obese. Contact a dietician, seek help. Your life is too precious to waste it!";

    	}
    	if(weightResult>=40){
    		console.log("you are morbidly obese, loose weight or die");
            descriptionArticle.classList.add("alarm");
            descriptionParagraph.textContent ="You are what they call morbidly obese. Seek help, get your life back on track, even if this means some bariatric surgery";

    	}
    }

});