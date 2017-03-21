$(function(){

var header = $("header");
var footer = $("footer");
	
function randomize(elements) {
        for (var i = 0; i < elements.length; i++) {
            var j = Math.floor(Math.random() * elements.length);
            var temp = elements[i];
            elements[i] = elements[j];
            elements[j] = temp;
        }
        return elements;
    }

	var triviaBtn = $("#triviaGame").find("button");
	//console.log(triviaBtn);

	var triviaSection = $("#triviaSection");
	//console.log(triviaSection);

	var sections = $("section").not(triviaSection);
	//console.log(sections);

	var gamesSection = $("#gamesSection");
    //console.log(gamesSection);

	triviaBtn.on("click", function(event){
		$(this).parent().hide();
		console.log("trivia");
		triviaSection.show();
		sections.hide();
		var triviaBoard = $("<div>");
	 	triviaBoard.addClass("board");
	 	triviaBoard.appendTo(triviaSection);
	 	triviaBoard.attr("id", "triviaBoard");
	 	var button = $("<button>start quiz</button>");
	 	button.appendTo(triviaBoard);
	 	button.attr("id", "startTrivia");
	 	
	})


var indicator = Math.floor(Math.random() * test.length); 
console.log(indicator);
var questions = test[indicator];
console.log(questions);
console.log(test.length);

var questionSet = questions.length; //to użyte aby dało się dodawać pytania, nie musi być 11, można inną tablicę podać
var index = 0; //index początkowego pytania, będzie wzrastał
var points = 0; //liczba punktów na starcie gry, równa zero;


function createQuestion(){
	if(index<questionSet){
		var h5 = $("<h5>", {class: "title"});
		h5.appendTo(triviaBoard);

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
		button.appendTo(quizDiv);
		button.text("next");
	} else {
		createResultsBoard();
	}
	
}

triviaSection.on("click", "#startTrivia", function(event){
	//sections.hide();
	$(this).hide();
	randomize(questions);
	createQuestion();

})

triviaSection.on("click", ".quizButton", function(event){
	if(index<questionSet){
		index++;
		$(this).parent().hide();
		$(this).parent().prev().hide();
		var checked = $(this).siblings("label").find("input:checked");
		//console.log(checked);
		//console.log(checked.length);
		var value = checked.attr("value");
		console.log(value);
		if(value === "true"){
			points++;
		} 

		//console.log(points);
		createQuestion();

	} else {
		createResultsBoard();
	}

})

function createResultsBoard() {
	var resultsBoard = $("<div>", {class: "resultsBoard"});
	resultsBoard.appendTo(triviaSection);
	triviaSection.children().not(resultsBoard).hide();
	if( points<questionSet/2) {
		resultsBoard.text(points +" out of "+ questionSet+" points, learn a bit more");
	} 
	if (points>=questionSet/2 && points<questionSet/1.25){
		resultsBoard.text(points +" out of "+questionSet+" points! not bad at all!");
	} 
	if (points>=questionSet/1.25) {
		resultsBoard.text(points +" out of "+ questionSet +" points! good for you!");
	}
	
}


})