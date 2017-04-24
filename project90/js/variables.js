	/* 
	memory game classes
	*/


	var classes = ["tamagotchi", "beverlyHills", "kellyFamily", "euroDance", "boyband", "girlband",
	    "macdonald", "furby", "nirvana", "fashion", "tamagotchi", "beverlyHills", "kellyFamily", "euroDance", "boyband", "girlband",
	    "macdonald", "furby", "nirvana", "fashion"
	];
	

	/*
	variables for DOM elements
	*/
	var header = $("header");
	var footer = $("footer");
	var scrollingButton = footer.find("button");
	var toTheGamesBtn = $("header").find("button").not(".hamburger");
	var gameSection = $("#gameSection");
	var lowerContent = gameSection.children();
	var initiatingMemory = $("button#memoryGame");
	var hamburgerMenu = $(".hamburger");
	var hamburgerMenuFocused = $(".hamburger.focus");
	var toTheGamesBtn = $("header").find("button").not(".hamburger");
	var lowerContent = gameSection.children();
	var otherSections = $("section").not(gameSection);
	var learnArt = $("#learn");
	var infoSection = $("#infoSection");
	var learnSection = $("#learnSection");
	var learnBtn = learnArt.find("button");
	var linksInMenu = $("ul.menu").find("a");
	var startingBtn = $("button#psychoTest");
	var testSection = $(".testSection");
	var h1 = testSection.find("h1");
	var navigation = header.find("nav");
	var triviaBtn = $("#triviaGame");
	var triviaSection = $(".triviaSection");
	var triviaHeaderOne = triviaSection.find("h1");
	var triviaSectionHeader = triviaSection.find("h2");
	var testHeaderOne = testSection.find("h1");
	var testSectionHeader = testSection.find("h2");
	var notTestSections = $("section").not(".testSection");
	var notTriviaSections = $("section").not(".triviaSection");
	var boardDiv = $(".boardDiv");
	var initiatingBtn = $("#nameBand");
    var bandNamingSection = $(".bandNamingSection");
    var notBandNameSections = $("section").not(bandNamingSection);
    var startingButton = $(".bandNamingSection button");
