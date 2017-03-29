	/* 
	memory game classes
	*/
	var classes = ["tamagotchi", "beverlyHills", "kellyFamily", "euroDance", "boyband", "girlband",
	    "macdonald", "furby", "nirvana", "fashion", "tamagotchi", "beverlyHills", "kellyFamily", "euroDance", "boyband", "girlband",
	    "macdonald", "furby", "nirvana", "fashion"
	];

	/*
	texts for buttons in learnSection
	*/

	var text1 = "Partly inspired by the late 80s rave-culture, Eurodance was a very popular music trend in the 90s, alongside with grunge. Notable groups include Masterboy, Fun Factory, Captain Jack and Mr President. Ask anyone who was a child in the 90s if they have ever heard of 'the Dome' or about 'Popcorn Hits' and they will tell you."
	var text2 = "A movement in the mid 90s, encouraging young women to be brave and daring, a part of third wave feminism. The term was associated with British girlband Spice Girls, whose hit single, 'Wannabe' topped the charts in late 1996."
	var text3 = "Boybands were abundant in the 90s! The hype started in the late 80s with the American group New Kids on the Block. Later came the Brits and bands like East17 and Take That became popular. One could say they were to the 90s pop music what frameworks are to JavaScript developers - not a day passed without one emerging. However, in the end only two boybands really mattered - Backstreet Boys and NSYNC."
	var text4 = "Fashion in the 90s was very varied, however several major trends are worth reminding. There are the grunge/hippie like clothes, there are also bright tank tops and low cut jeans, very like the ones Britney and Christina wore and last but not least - minimalism, which basically meant wearing all black. Other stuff? Babydoll dresses, over the knee socks, flared jeans, flanel shirts, butterfly clips, slip dresses...you name it, the list is long!"
	var text5 = "The 90s were the last decade of the century and it was also the end of the millenium. This might contribute to the fact why there was so much focus on spirituality. This was generally very positive, in fact the 90s were very similar to the 60s in that matter! Unfortunately, this also meant some people sought solace in quasi religions and now and then one heard of mass suicide of the members of such groups"
	var text6 = "The 90s were not all about happy pop songs and catchy dance tunes. Have you ever heard of Nirvana, Soundgarden, The Smashing Pumpkins or Pearl Jam? Well, I bet you have. These are the bands which peaked at that time and were the most popular in the genre. Grunge comes from Seattle, where it rains 360 days a year. The Evergreen State is not only home to sparkling vampires, but to some really meaningful music which defined a generation."
	var text7 = "The 90s were not a time of reality shows, people preferred to watch soap operas. The most popular and cult were Beverly Hills 90210 and Friends. The first was aimed at high schoolers and the latter was supposed to portray generation X. Girls wanted to be like Brenda and Kelly or like Monica and Rachel.Later in the decade another soap opera, Sex and the City was also becoming increasingly popular."
	var text8 = "Bravo was one of the most popular teen magazines of the era. It had posters of your favourite stars you could plaster to your bedroom walls and also included vital life advice and foto-stories which dealt with important topics such as satanism and teen pregnancy. Other notable teen magazines included Popcorn, Bravo Girl and Megastar."
	var text9 = "As the end of the millenium approached, many feared the end of the world. The fear manifested itself in seeking solace in meditation, religion and other forms of spirituality. Some were afraid that the millenium bug will erase all the data from our computers and the civilization will collapse. Well, nothing happened and the 90s were followed by 00s, a decade completely different in its Zeitgeist."
	var text10 = "Klan is said to be the first Polish soap opera. In middle 1997 Polish TV announced a competition, aired pilot episodes of three TV series and people chose a story of Lubicz family and their trials and tribulations. Still going strong after 20 years it has become a cult classic. It is The Room of Polish TV series. It is rumoured each year that they are about to take it down, but I do not think that ever will happen. No ruling party is that stupid. In fact, they are using it to promote certain things. Clever move, politicians!"
	var text11 = "Bassicaly anyone growing up in the 90s was either into grunge or hip hop or pop. You would think the fans of the last genre were sweet natured and calm, right? Wrong! Girls in their very early teens would go as far as brawl in the school corridor just because on of them was into Justin and the other one preffered Nick (Or Paddy. Or Angelo. Or Taylor. Or Gil. Or Mark...the list is long)."
	var text12 = "The 90s were a very special decade for our country. At the very dawn of the decade we got to elect our President for the very first time. A year later we voted in the very first completely democratic elections( Those in 1989 were only partially free). It was a time our country opened to the world. By the end of the decade Poland was a member of NATO."
	var text13 = "After the fall of the communism Polish lifestyle changed vastly. Finally, there were many colourful clothes, toys and other items to purchase, provided one could afford it. It was not until the 90s that I could have things to eat like pineapples or German chocolate. They might seem very affordable now, but then were considered luxury. One could say that compared to the previous decade we were living lavish. There was only one big but - one had to have money to afford it and the new times were hard on some people."
	var texts = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13];

	
	/*
	variables for DOM elements
	*/
	var header = $("header");
	var footer = $("footer");
	var toTheGamesBtn = $("header").find("button").not(".hamburger");
	var gameSection = $("#gameSection");
	var lowerContent = gameSection.children();
	var initiatingBtn = $("button#memoryGame");
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
	var testSection = $("#testSection");
	var h1 = testSection.find("h1");
	var navigation = header.find("nav");
	var triviaBtn = $("#triviaGame");
	var triviaSection = $("#triviaSection");
	var triviaSectionHeader = triviaSection.find("h1");
	var notTestSections = $("section").not("#testSection");
	var notTriviaSections = $("section").not("#triviaSection");
	var boardDiv = $(".boardDiv");