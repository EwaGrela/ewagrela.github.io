$(function(){
	console.log("ok");

 

	firstButton.on("click", function(){
		content.removeClass("invisible");
		buttons.addClass("invisible");
		gridLinks.addClass("invisible");

	});

	thirdButton.on("click", function(){
		console.log("ok");
		content.removeClass("invisible");
		$(this).addClass("invisible");
		buttons.parent().parent().addClass("invisible");
	})

	var backBtn = $(".back");
	backBtn.on("click", function(){
		location.reload();
	})

	var quizStartingBtn = $("button.quizInitiator");
	console.log(quizStartingBtn);
	quizStartingBtn.one("click", function(){
		console.log("ok, works");
		$(this).addClass("invisible");
		$(this).parent().remove();;
		//content.removeClass("invisible");
		//buttons.parent().parent().addClass("invisible");
		createQuestion(0);
	})
	
	function createQuestion(index) {
		if(index<questions.length) {
			var article = $("<article>", {class: "quizArticle"});
		article.appendTo(content);
		var paragraph = $("<p>", {class: "quizPar"});
		var title = $("<h3>", {class:"title"});
		title.appendTo(article);
		paragraph.insertAfter(title);
		title.text(questions[index].title);
		var answers = questions[index].answers;
		for ( var i = 0; i<answers.length; i++){
			var labels = $("<label>");
			labels.appendTo(paragraph);
		}
		var quizBtns = $("<button>");
		quizBtns.addClass("quizBtns");
		quizBtns.appendTo(article);
		quizBtns.text("ok");
		
		var labels = article.find("label");
		for( var i =0; i<labels.length; i++){
			$(labels[i]).text(answers[i]);
		}
		labels.each(function(){
			var input = $("<input>");
			input.attr("type", "radio");
			input.attr("name", "one");
			input.prependTo($(this));
			
		})
		
		var inputs = paragraph.find("input");
		

		inputs.each(function(){
			if($(this).parent().text()=== questions[index].correct){
				$(this).attr("value", "true");
			} else {
				$(this).attr("value", "false");
			}

		})

		inputs.on("change", function(){
			$(this).parent().addClass("checked");
            $(this).parent().siblings("label").removeClass();
		});

		}  else {
			showResults();
		}
		


	}

	body.on("click", ".quizBtns", function(event){
		console.log("yay");
		//index ++;
		
		if(index<questions.length) {
			//var checkedInput = $(this).siblings().children("input:checked");
			var checkedInput = $(this).prev().children("label").children("input:checked");
			console.log(checkedInput);
			var result = checkedInput.attr("value");
			console.log(result);
			recordedAnswers.push(result);
			console.log(recordedAnswers);
			if(result ===undefined){
				createAlert();
			}
			if(result ==="true") {
				index ++;
				points ++;
				$(this).parent().remove();
				console.log(points);
				createQuestion(index);
			}
			if(result ==="false"){
				index ++;
				$(this).parent().remove();
				createQuestion(index);
			}
			

		} else {
			showResults();
		}
	})

	function showResults() {
		var board = $("<article>", {class: "alertBox"});
		board.appendTo(content);
		var paragraph = $("<p>", {class: "title"});
		paragraph.appendTo(board);
		if(points<questions.length/2){
			var result = "It seems we are quite different, but this may mean we will learn a lot from each other and this can be very useful. It is best to check!"
		} else if (points>=questions.length/2 && points<(questions.length/10)*8) {
			var result ="We are not 100% compatible and this is great. We are just as similar to not disagree over petty matters and just as different to learn from our differences."
		} else if (points>=(questions.length/10)*8){
			var result = "Seems like we are a match made in heaven and we will be getting along just ideally."
		}
		paragraph.text(result);
	}

	function createAlert(){
		var board = $("<article>", {class: "alertBox"});
		board.appendTo(content);
		var paragraph = $("<p>", {class: "title"});
		paragraph.appendTo(board);
		paragraph.text("In order to proceed, please choose answer!")
		createComebackBtn(board);
	}

	function createComebackBtn(element){
		var button = $("<button>", {class:"back"});
		button.appendTo(element)
		button.text("ok")
	}

	content.on("click", ".back", function(){
		$(this).parent().remove();
	})

	
	
})