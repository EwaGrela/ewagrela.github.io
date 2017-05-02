$(function(){
	console.log("ok")
	
	firstButton.on("click", function(){
		hideGrid();
		$(this).parent().parent().parent().remove()
		var article = $("<article>", {class:"introductionArticle", id:"introductionArticle"});
		article.appendTo(content);
		var paragraph = $("<p>Hello world! My name is Ewa and I am an aspiring front-end developer. I recently graduated from Coders Lab programming school. I am looking for opportunities in the IT industry. This site is my personal portfolio. Feel free to take a look at my work by clicking the 'My projects' button. My adventure with programming started in Spring 2016. I was working as a school receptionist in The British School back then...</p>")
		paragraph.appendTo(article);
		var button = $("<button class='moreInfo'>more</button>");
		button.insertAfter(paragraph);
		
	});

	function hideGrid(){
		content.removeClass("invisible");
		buttons.addClass("invisible");
		gridLinks.addClass("invisible");
		
	}
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
		var paragraph = $("<p> In Spring 2016 I started the advanced Excel course and I really liked it. However, this seemed not enough, I started thinking about learning the 'real' programming. I began with simple tutorials on Codecademy and decided time had come to give it a shot for real. I applied for the Coders Lab course and loved every minute of it!</p>");
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
		var paragraph1 = $("<p>First things first - the best way to find out if I am the one you are looking for, is taking a look at my code. So, if you haven't yet, click the link below</p>");
		paragraph1.appendTo(article);
		var div = $("<div>");
		div.appendTo(article);
		var linkToProjects = $("<a  href= 'projects.html' class='myWork'>works</a>");
		//linkToProjects.insertAfter(paragraph1)
		var div2 = $("<div>");
		div2.appendTo(article);
		var paragraph2 = $("<p>Assuming you actually like the things I do and how I do them - I think it is time for us to find out if our personalities and habits match. I prepared a little quiz and once you're done, you'll know.</p>")
		paragraph2.insertBefore(div2);
		var button = $("<button class='quizInitiator'>quiz</button>");
		//button.appendTo(article);
		linkToProjects.appendTo(div);
		button.appendTo(div2);

	});

	
	
content.on("click", ".quizInitiator", function(){
		console.log("ok, works");
		$(this).addClass("invisible");
		console.log($(this).parent().parent().children());
		$(this).parent().parent().children().remove();
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
		var paragraph = $("<p>", {class: "title", id:"result"});
		paragraph.appendTo(board);
		if(points<questions.length/2){
			var result = points + " out of " + questions.length + ": It seems we are quite different, but this might be something really good for both of us. It may mean we will learn a lot from each other and this can be very useful. I pride myself in getting along with almost anyone, I am agreeable. It is best to check!"
		} else if (points>=questions.length/2 && points<(questions.length/10)*8) {
			var result = points + " out of " + questions.length+": We are not 100% compatible and this is actually great! We are just as similar to not disagree over petty matters or tick each other off and just as different to learn from it. Way to go, call me as soon as you can!"
		} else if (points>=(questions.length/10)*8){
			var result = points + " out of " + questions.length+": Seems like we are a match made in heaven and we will be getting along just ideally. This is something that cannot be ignored. Dial 692 315 863 and let us meet as soon as possible!"
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

	fifthButton.on("click", function(){
		console.log("create contact site");
		var article = $("<article>", {class: "introductionArticle"});
		var title = $("<h3 class='tiltedTitle'>Contact info:</h3>");
		title.appendTo(article)
		var div = $("<div>", {class: "photoDiv"});
		div.appendTo(article);
		article.appendTo(content);
		hideGrid();
		$(this).parent().parent().remove();
		var div2 = $("<div class='tiltedList'>")
		div2.appendTo(article);
		var ul = $("<ul>");
		ul.appendTo(div2);
		var firstLi = $("<li>+ 48 692 315 863</li>");
		firstLi.appendTo(ul);
		var secondLi = $("<li>ewa_trojanowska@wp.pl</li>");
		secondLi.appendTo(ul);
		
	})
	
})