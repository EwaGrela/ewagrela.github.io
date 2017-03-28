/* 
reusable functions
*/
//functions used everywhere
function randomize(elements) {
    for (var i = 0; i < elements.length; i++) {
        var j = Math.floor(Math.random() * elements.length);
        var temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
    }
    return elements;
}

function createComebackBtns(element) {
            for (var i = 0; i < 2; i++) {
                var button = $("<a>", {
                    class: "comeback"
                });
                button.appendTo(element);
            }

            console.log($(".comeback"));
            var button = $(".comeback");
            console.log(button);
            button.eq(0).text("home");
            button.eq(1).text("play again");
            button.eq(0).attr("href", "https://ewagrela.github.io/project90/");
            button.eq(1).attr("href", "https://ewagrela.github.io/project90/#gameSection");
            addingId();
        }

        function addingId(){
            var button = $(".comeback");
            button.eq(1).attr("id", "comeback");
        }

/* 
tu są f-cje, nad którymi będzie prowadzona praca udoskonalająca, więc muszę zachować oryginał
//1
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

//2

function createQuestions(){
	if(index<questionSet){
		var h5 = $("<h5>", {class: "title"});
		h5.appendTo(testBoard);

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
			$(labels[i]).text(answers[i].answer); //tekst labelki odpowiada w kolejności tekstowi z tablicy z odpowiedziami
			$(labels[i]).attr("data", answers[i].result);
		}

		labels.each(function(index2, value){
			var input = $("<input>");
			input.attr("type", "radio");
			input.attr("name", "one");
			input.prependTo($(this));

		})

		var inputs = quizDiv.find("input");
		var button = $("<button>", { class: "quizButton"});
		button.appendTo(quizDiv);
		button.text("next");
	} else {
		showResults();
	}
	
}
//zostawiam na potem






*/