
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
			{ title: "Your ideal coworker is?",
			answers: ["extroverted", "introverted", "whatever"],
			correct: "extroverted"
			},
			{ title: "You think talkative people are:",
			answers: ["silly", "honest", "I don't mind them"],
			correct: "honest"
			},
			{ title: "People graduating from bootcamps are:",
			answers: ["hardworking", "not true programmers", "ignorant posers"],
			correct: "hardworking"
			},
			{ title: "You are looking for...",
			answers: ["HTML/CSS coder", "JS/FrontEnd Dev", "someone...?"],
			correct: "JS/FrontEndDev"
			},
			{ title: "Do you know what DRY and KISS stand for?",
			answers: ["sure!", "let me google that!", "err...what?!"],
			correct: "sure"
			},
			{ title: "FrontEndDevs are...",
			answers: ["not as smart as BackEndDevs", "creative and awesome", "err...who?"],
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
	console.log(content);
	var buttons = grid.find("button").not(".contentBtn");
	var gridLinks = grid.find("a");
	var firstButton = $("button#diamond1");
	var thirdButton = $("button#diamond3");
	console.log(thirdButton);
	var fifthButton = $("button#diamond5");
	console.log(fifthButton);
	