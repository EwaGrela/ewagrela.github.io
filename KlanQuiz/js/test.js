const section = document.querySelector("section");
const beginBtn = document.getElementById("beginBtn");
const klanQuizData = firebase.database().ref("/quizData");

klanQuizData.once("value").then(function(data){
	const klanQuiz = data.val();
	beginBtn.addEventListener("click", createQuestion);
	beginBtn.addEventListener("click", deleteIntro);
	let index = 0;
	let correctAnswers = 0;
	const questions = klanQuiz.questions;
	randomize(questions);
	function createQuestion(){
		if(index<questions.length){
			const questionContainer = document.createElement("div");
		    questionContainer.classList.add("questionContainer")
		    section.append(questionContainer);
		    const questionNumber = document.createElement("p");
		    questionContainer.append(questionNumber);
		    questionNumber.classList.add("questionNumber");
		    questionNumber.textContent = "Pytanie " + (index+1) + " z " + questions.length;
		    const questionTitle = document.createElement("h3");
		    questionContainer.append(questionTitle);
		    questionTitle.textContent = klanQuiz.questions[index].questionTitle;
		    const answersContainer = document.createElement("div");
		    answersContainer.classList.add("answersContainer");
		    questionContainer.append(answersContainer);
		    const answers = klanQuiz.questions[index].answers;
		    randomize(answers);
		    for( let i =0; i<klanQuiz.questions[index].answers.length; i++){
		    	const answerButton = document.createElement("button");
		    	answerButton.classList.add("answerButton");
		    	answersContainer.append(answerButton);
		    	answerButton.textContent = klanQuiz.questions[index].answers[i].answer;
		    	answerButton.setAttribute("data-value",klanQuiz.questions[index].answers[i].isCorrect)
		    }
		    const answerButtons = document.querySelectorAll(".answerButton");
		    answerButtons.forEach(answerButton=>answerButton.addEventListener("click", countPoints));
		    answerButtons.forEach(answerButton=>answerButton.addEventListener("click", deletePreviousQuestion));  
		}	else {
			displayResults();
		}
	     
	}

	
	function countPoints(){
		if(index < questions.length){
			index++;
			if(this.getAttribute("data-value")==="true"){
				correctAnswers ++;
				createQuestion();
			} else {
				createQuestion();
			}
			
		} //else {
			//displayResults();
		//}	
		console.log( index, correctAnswers);	
	}
	function displayResults(){
		console.log("koniec");
		const resultsArticle = document.createElement("article");
		resultsArticle.classList.add("resultsArticle");
		section.append(resultsArticle);
		const resultsDiv = document.createElement("div");
		resultsArticle.append(resultsDiv);
		const resultsHeader = document.createElement("h2");
		resultsArticle.append(resultsHeader);
		resultsHeader.classList.add("resultsHeader");
		resultsArticle.classList.add("resultsArticle");
		const resultsParagraph = document.createElement("p");
		section.append(resultsParagraph);
		resultsParagraph.classList.add("resultsParagraph");
		function computeResults(){
			resultsDiv.textContent = correctAnswers + " punktów na "+ questions.length + " możliwych";
			if(correctAnswers>=questions.length/10*9){
				resultsHeader.textContent = klanQuiz.descriptions[0].result;
				resultsParagraph.textContent = klanQuiz.descriptions[0].description;
			} else if(correctAnswers<questions.length/10*9&&correctAnswers>=questions.length/10*7) {
				resultsHeader.textContent = klanQuiz.descriptions[1].result;
				resultsParagraph.textContent = klanQuiz.descriptions[1].description;
			} else if(correctAnswers<questions.length/10*7){
				resultsHeader.textContent =klanQuiz.descriptions[2].result;
				resultsParagraph.textContent = klanQuiz.descriptions[2].description;
			}
		}
		computeResults();
	}

});
//other functions making the quiz work:
function randomize(elements) {
        for (var i = 0; i < elements.length; i++) {
            var j = Math.floor(Math.random() * elements.length);
            var temp = elements[i];
            elements[i] = elements[j];
            elements[j] = temp;
        }
        return elements;
}

function deleteIntro(){
	const articleToRemove = this.parentElement;
	const titleToRemove = this.parentElement.previousElementSibling;
	articleToRemove.remove(articleToRemove);
	titleToRemove.remove(titleToRemove);

}

function deletePreviousQuestion(){
	let toRemove = this.parentElement.parentElement;
	toRemove.parentNode.removeChild(toRemove);
}



