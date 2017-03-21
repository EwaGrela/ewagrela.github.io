$(function(){
	console.log("ok");
	var questions =[];
	var form = $("form");
	var formSection = $("#formSection");
	//console.log(formSection);
	//console.log(form);
	var header = $("h1");
	var questionInp = $("input[type=text]").eq(0);
	//console.log(questionInp);

	var incorrectInp1 = $("input[type=text]").eq(1);
	//console.log(incorrectInp1);

	var incorrectInp2 = $("input[type=text]").eq(2);
	//console.log(incorrectInp2);

	var incorrectInp3 = $("input[type=text]").eq(3);
	//console.log(incorrectInp3);

	var correctInp = $("input[type=text]").eq(4);
	//console.log(correctInp);

	

	form.on("submit", function(event){
		event.preventDefault();
		var isOK = true;
		var questTitle = questionInp.val();
		var incorrectAnsOne = incorrectInp1.val();
		var incorrectAnsTwo = incorrectInp2.val();
		var incorrectAnsThree = incorrectInp3.val();
		var correctAns = correctInp.val();

		
		if(questTitle.length<1 || questTitle.indexOf("?")<0){
			isOK = false;
			alert("pytanie musi mieć co najmniej 10 znaków i być zakończone znakiem zapytania");
			event.preventDefault();
			
		}
		if(incorrectAnsOne.length<0 || incorrectAnsTwo.length<0 || incorrectAnsThree.length<0){
			isOK = false;
		 	alert("nie zostawiaj wolnego pola");
		 	event.preventDefault();
			
		}
		if (correctAns.length<0 || correctAns ===incorrectAnsOne || correctAns===incorrectAnsTwo || correctAns===incorrectAnsThree) {
			isOK = false;
			alert("podaj poprawną odpowiedź, różniącą się od błędnych");
			event.preventDefault();
		} 
		if (isOK) {
			var question = {
				title: questTitle,
				answers: [incorrectAnsOne, incorrectAnsTwo, incorrectAnsThree, correctAns],
				correct: correctAns
			};
			questions.push(question);
			questionInp.val("");
			incorrectInp1.val("");
			incorrectInp2.val("");
			incorrectInp3.val("");
			correctInp.val("");
			
		}
		//console.log(question);
		//console.log(questions)

	})

	function randomize(elements) {
        for (var i = 0; i < elements.length; i++) {
            var j = Math.floor(Math.random() * elements.length);
            var temp = elements[i];
            elements[i] = elements[j];
            elements[j] = temp;
        }
        return elements;
    }

    var questionSet = questions.length; //to użyte aby dało się dodawać pytania, nie musi być 11, można inną tablicę podać
	console.log(questionSet);
	var index = 0; //index początkowego pytania, będzie wzrastał
	var points = 0; //liczba punktów na starcie gry, równa zero;
	


	var finishedBtn = $("#finishedBtn");
	//console.log(finishedBtn);

	var quizCreatingBtn = $("#creatingQuizBtn");
	//console.log(quizCreatingBtn);
	

	finishedBtn.on("click", function(event){
		console.log("działa");
		console.log(questions);
		console.log(questions[index]);
		console.log(questions[index].answers);
		form.hide();
		header.hide();
		$(this).hide();
		quizCreatingBtn.show();
	});


	function createQuestion(){
		if(index<questions.length){
			var h5 = $("<h5>", {class: "title"});
			h5.appendTo(formSection);

			var answers = questions[index].answers;
			randomize(answers);

			var quizDiv = $("<div>", {class: "quizDiv"});
			quizDiv.insertAfter(h5);
			h5.text(questions[index].title);
			for ( var i = 0; i<answers.length; i++){ //w ten sposób tworzysz tyle labeli ile masz odpowiedzi
				var label = $("<label>");
				label.appendTo(quizDiv);	
			}
			var labels = quizDiv.find("label");
			for ( var i = 0; i<labels.length; i++){
				$(labels[i]).text(answers[i]); //tekst labelki odpowiada w kolejności tekstowi z tablicy z odpowiedziami
				
			}
			labels.each(function(index2, value){
				var input = $("<input>");
				input.attr("type", "radio");
				input.attr("name", "one");
				input.prependTo($(this));

			})

			var inputs = quizDiv.find("input");
			inputs.each(function(index3, value){
				var labText = $(this).parent().text();
				var correctAns = questions[index].correct;
				if(labText ===correctAns){
					$(this).attr("value", "true");
				} else {
					$(this).attr("value", "false");
				}
				
			})

			var button = $("<button>", { class: "quizButton"});
			button.insertAfter(quizDiv);
			button.text("next");
		} else {
			createResultsBoard();
			
		}
		
	}

	quizCreatingBtn.on("click", function(event){
		console.log("ok");
		randomize(questions);
		createQuestion();
		$(this).hide();
	})




	formSection.on("click", ".quizButton", function(event){

		if(index<questions.length){
			index++;

			$(this).prev().hide();
			$(this).hide();
			$("h5").hide();
			var checked = $(this).prev().children("label").find("input:checked");
			
			var value = checked.attr("value");
			console.log(value);
			if(value === "true"){
				points++;
			} 
			
			createQuestion();

		} else {
			
			createResultsBoard();
		}


	})


	function createResultsBoard() {
	var resultsBoard = $("<div>", {id: "resultsBoard"});
	resultsBoard.appendTo(formSection);
	if( points<(questions.length/2 +1)) {
		resultsBoard.text(points +" na "+ questions.length+" - popraw wynik!");
	} 
	if (points>=(questions.length/2+1) && points<questions.length/1.25){
		resultsBoard.text(points +" na "+questions.length+" - nie jest źle!");
	} 
	if (points>=questions.length/1.25) {
		resultsBoard.text(points +" na "+ questions.length +" - dobra robota!");
	}
	
}
	
	
})