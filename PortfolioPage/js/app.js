$(function(){
	console.log("ok");

 
var compability ={
		questions: [
			{title:"Tea or coffee?",
			answers: ["tea", "coffee", "energy drinks"],
			correct:"energy drinks"
			},
			{title: "You prefer to work?",
			answers: ["orderly", "creatively", "why not both!"],
			correct: "why not both!"
			},
			{ title: "Which take-away would you order?",
			answers:["pizza", "chinese", "indian"],
			correct: "indian"
			},
			{ title: "What is more important?",
			answers: ["passion", "perfection", "50/50"],
			correct: "50/50"
			},
			{ title: "Your ideal coworker is...?",
			answers: ["extroverted", "introverted", "whatever"],
			correct: "extroverted"
			},
			{ title: "You think talkative people are...",
			answers: ["silly", "honest", "as long as they do their work, cool"],
			correct: "as long as they do their work, cool"
			},
			{ title: "People graduating from bootcamps...",
			answers: ["know the basics, hardworking", "never will be true programmers", "ignorant posers"],
			correct: "know the basics, hardworking"
			},
			{ title: "You are looking for...",
			answers: ["HTML/CSS coder", "JavaScript Dev/FrontEndDev", "someone...?"],
			correct: "JavaScript Dev/FrontEndDev"
			},
			{ title: "Do you know what DRY and KISS is?",
			answers: ["sure!", "let me google that!", "err...what?!"],
			correct: "sure"
			},
			{ title: "FrontEndDevs are...",
			answers: ["not as smart as BackEndDevs", "creative and awesome", "what is a FrontEndDev?"],
			correct: "creative and awesome"
			},

		]
	}

	var questions = compability.questions;
	var recordedAnswers = [];
	var points = 0;
	var index = 0 //index pytania;
	var otherSections = $("section");
	var body = $("body");
	var grid = $(".grid");
	var gridSection = $(".grid-section");
	var content = $(".content");
	var buttons = grid.find("button").not(".contentBtn");
	var gridLinks = grid.find("a");
	var firstButton = $("button#diamond1");

	firstButton.on("click", function(){
		content.eq(0).removeClass("invisible");
		buttons.addClass("invisible");
		gridLinks.addClass("invisible");

	});

	var nextBtn = $(".contentBtn");
	nextBtn.on("click", function(){
		$(this).parent().addClass("invisible");
		$(this).parent().next().removeClass("invisible");
	})

	var backBtn = $(".back");
	backBtn.on("click", function(){
		location.reload();
	})

	var quizStartingBtn = $("button#diamond3");
	console.log(quizStartingBtn);
	quizStartingBtn.one("click", function(){
		console.log("ok, works");
		$(this).addClass("invisible");
		content.removeClass("invisible");
		buttons.parent().parent().addClass("invisible");
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
		if(points<questions.length){
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