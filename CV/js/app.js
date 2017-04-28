$(function(){
	console.log("ok");

	var button 
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
			{ title: "Which takeout would you order?",
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
	var index = 0 //index pytania;
	var otherSections = $("section");
	var body = $("body");
	var grid = $(".grid");
	var gridSection = $(".grid-section");
	var content = $(".content");
	var buttons = grid.find("button").not(".contentBtn");

	var firstButton = $("button#diamond1");

	firstButton.on("click", function(){
		content.eq(0).removeClass("invisible");
		buttons.addClass("invisible");

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
		content.eq(1).removeClass("invisible");
		buttons.addClass("invisible");
		createQuestion(0);
	})
	
	function createQuestion(index) {
		var paragraph = $("<p>", {class: "quizParagraph"});
		paragraph.appendTo($(".quiz"));
		var title = $("<h3>", {class:"title"});
		title.appendTo(paragraph);
		title.text(questions[index].title);
		var answers = questions[index].answers;
		for ( var i = 0; i<answers.length; i++){
			var labels = $("<label>");
			labels.insertAfter(title);
		}
		var quizBtns = $("<button>");
		quizBtns.addClass("quizBtns");
		quizBtns.appendTo(paragraph);
		quizBtns.text("ok");
		
		var labels = paragraph.find("label");
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
			console.log(questions[index].correct);
			if($(this).parent().text()=== questions[index].correct){
				$(this).attr("value", "true");
			} else {
				$(this).attr("value", "false");
			}
		})



	}

	body.on("click", ".quizBtns", function(event){
		console.log("yay");
		index ++;
		if(index<questions.length) {
			console.log(index);
			console.log($(this).parent().parent());
			var checkedInput = $(this).siblings().children("input:checked")
			console.log(checkedInput);
			var result = checkedInput.attr("value");
			recordedAnswers.push(result);
			console.log(recordedAnswers);
			$(this).parent().parent().remove();
			createQuestion(index);
		} else {
			//alert("koniec");
			$(this).parent().parent().remove();
			createResultsBoard();
		}
	})

	function createResultsBoard() {
		var article = $("<article>");
		article.addClass("quizArticle");
		article.appendTo($(".quizSection"));
		var paragraph = $("<p>", {class:"quizParagraph"});
		paragraph.appendTo(article);
		paragraph.text("Over");
	}
	
})