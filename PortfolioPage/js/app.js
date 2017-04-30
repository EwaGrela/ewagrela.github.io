$(function(){
	console.log("ok");

 
	
	firstButton.on("click", function(){
		content.removeClass("invisible");
		buttons.addClass("invisible");
		gridLinks.addClass("invisible");
		$(this).parent().parent().parent().remove()
		var article = $("<article>", {class:"introductionArticle", id:"introductionArticle"});
		article.appendTo(content);
		var paragraph = $("<p>Hello world! My name is Ewa and I am an aspiring front-end developer. I recently graduated from Coders Lab programming school. I am looking for opportunities in the IT industry. This site is my personal portfolio. There are several projects I made throughout the course so feel free to take a look at them by clicking on the 'My projects' button. My adventure with programming started in April 2016. I was working as a school receptionist in The British School back then. to find out what made me change my career path, you need to click the button for more details</p>")
		paragraph.appendTo(article);
		var button = $("<button class='moreInfo'>more</button>");
		button.insertAfter(paragraph);
		
	});

	content.on("click", ".moreInfo", function(){
		$(this).prev().remove();
		$(this).next().remove();
		$(this).parent().remove();
		createMoreContent();
		$("button").addClass("comeback")
	});

	function createMoreContent(){
		var article = $("<article>", {class: "introductionArticle", id: "moreInfoArticle"});
		article.appendTo(content);
		var paragraph = $("<p> In Spring 2016 I started the advanced Excel course and I really liked it. However, this seemed not enough, I started thinking about learning the 'true' programming. I began with simple tutorials on Codecademy and decided time has come to move forward and give it a shot for real. I applied for the Coders Lab course and loved every minute of it! That is how a florist/receptionist became an aspiring front-end developer </p>");
		paragraph.appendTo(article);
		createBackBtn(article);
	}

	thirdButton.on("click", function(){
		console.log("ok");
		content.removeClass("invisible");
		$(this).addClass("invisible");
		buttons.parent().parent().addClass("invisible");
		var article = $("<article>", {class: "introductionArticle"});
		article.appendTo(content);
		var paragraph1 = $("<p>First things first - the best way to find out if I am the one you are looking for, is taking a look at my code. So, if you haven't yet, click on the link below. Click on the squares and you will be directed to the projects I was able to complete so far. </p>");
		paragraph1.appendTo(article);
		var linkToProjects = $("<a  href= 'projects.html' class='myWork'> my work</a>");
		linkToProjects.insertAfter(paragraph1)
		var paragraph2 = $("<p>Assuming you actually like the things I do and how I do them - I think it is time for us to find out if our personalities and habits match. I prepared a little quiz and once you're done, you'll know. Generally, treat this quiz as a demo of my quiz creating abilities. I pride myself in getting along with almost anyone, so we should be fine no matter what the result is </p>")
		paragraph2.insertAfter(linkToProjects);
		var button = $("<button class='quizInitiator'>take a quiz</button>");
		button.appendTo(article);
	});

	
	
content.on("click", ".quizInitiator", function(){
		console.log("ok, works");
		$(this).addClass("invisible");
		$(this).parent().remove();
		
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
		createBackBtn(board);
		$("button").addClass("comeback");
	}

	function createAlert(){
		var board = $("<article>", {class: "alertBox"});
		board.appendTo(content);
		var paragraph = $("<p>", {class: "title"});
		paragraph.appendTo(board);
		paragraph.text("In order to proceed, please choose answer!")
		createBackBtn(board);
	}

	function createBackBtn(element){
		var button = $("<button>", {class:"back"});
		button.appendTo(element);
		button.text("ok")
	}


	
	content.on("click", ".back", function(){
		$(this).parent().remove();
	})
	
	content.on("click", ".comeback", function(){
		location.reload();
	})
	
})