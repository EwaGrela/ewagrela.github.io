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

	var text1 = "Partly inspired by the late 80s rave-culture, euro dance was a very popular music trend in the 90s, alongside with grunge. Notable groups include masterboy, fun factory, captain jack and mr president. Ask anyone who was a child in the 90s if they have ever heard of 'the Dome' or about 'Popcorn Hits' and they will tell you"
	var text2 = "A movement in the mid 90s, encouraging young women to be brave and daring, a part of third wave feminism. The term was associated with British girlband Spice Girls, whose hit single, 'Wannabe' topped the charts in late 1996."
	var text3 = "Boybands were abundant in the 90s! The hype started in the late 80s with the American group New Kids on the Block. Later came the Brits and bands like East17 and Take That became popular. One could say they were to the 90s pop music what frameworks are to Javascript developers - not a day passed without one emerging. However, in the end only two boybands really mattered - Backstreet Boys and NSYNC"
	var text4 = "Fashion in the 90s was very varied, however several major trends are worth reminding. There are the grunge/hippie like clothes, there are also bright tank tops and low cut jeans, very like the ones Britney and Christina wore and last but not least - minimalism, which basically meant wearing all black. Other stuff? Babydoll dresses, over the knee socks, flared jeans, flanel shirts, butterfly clips, slip dresses...you name it, the list is long!"
	var text5 = "The 90s were the last decade of the century and it was also the end of the millenium. This might contribute to the fact why there was so much focus on spirituality. This was generally very positive, in fact the 90s were very similar to the 60s in that matter! Unfortunately, this also meant some people sought solace in quasi religions and now and then one heard of mass suicide of the members of such groups"
	var text6 = "The 90s were not all about happy pop songs and catchy dance tunes. Have you ever heard of Nirvana, Soundgarden, The Smashing Pumpkins or Pearl Jam? Well, I bet you have. These are the bands which peaked at that time and were the most popular in the genre. Grunge comes from Seattle, where it rains 360 days a year. The Evergreen State is not only home to sparkling vampires, but to some really meaningful music which defined a generation."
	var text7 = "The 90s were not a time of reality shows, people preferred to watch soap operas. The most popular and cult were Beverly Hills 90210 and Friends. The first was aimed at high schoolers and the latter was supposed to portray generation X. Girls wanted to be like Brenda and Kelly or like Monica and Rachel.Later in the decade another soap opera, Sex and the City was also becoming increasingly popular"
	var text8 = "Bravo was one of the most popular teen magazines of the era. It had posters of your favourite stars you could plaster to your bedroom walls and also included vital life advice and foto-stories which dealt with important topics such as satanism and teen pregnancy. Other notable teen magazines included Popcorn, Bravo Girl and Megastar."
	var text9 = "As the end of the millenium approached, many feared the end of the world. The fear manifested itself in seeking solace in meditation, religion and other forms of spirituality. Some were afraid that the millenium bug will erase all the data from our computers and the civilization will collapse. Well, nothing happened and the 90s were followed by 00s, a decade completely different in its Zeitgeist"
	var text10 = "Klan is said to be the first Polish soap opera. In middle 1997 Polish TV announced a competition, aired pilot episodes of three TV series and people chose a story of Lubicz family and their trials and tribulations. Still going strong after 20 years it has become a cult classic. It is The Room of Polish TV series. It is rumoured each year that they are about to take it down, but I do not think that ever will happen. No ruling party is that stupid. In fact, they are using it to promote certain things. Clever move, politicians!"
	var text11 = "Bassicaly anyone growing up in the 90s was either into grunge or hip hop or pop. You would think the fans of the last genre were sweet natured and calm, right? Wrong! Girls in their very early teens would go as far as brawl in the school corridor just because on of them was into Justin and the other one preffered Nick (Or Paddy. Or Angelo. Or Taylor. Or Gil. Or Mark...the list is long)."
	var text12 = "The 90s were a very special decade for our country. At the very dawn of the decade we got to elect our President for the very first time. A year later we voted in the very first completely democratic elections( Those in 1989 were only partially free). It was a time our country opened to the world. By the end of the decade Poland was a member of NATO."
	var text13 = "After the fall of the communism Polish lifestyle changed vastly. Finally, there were many colourful clothes, toys and other items to purchase, provided one could afford it. It was not until the 90s that I could have things to eat like pineapples or German chocolate. They might seem very affordable now, but then were considered luxury. One could say that compared to the previous decade we were living lavish. There was only one big but - one had to have money to afford it and the new times were hard on some people."
	var texts = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13];

	/*trivia quizes 
		array of arrays
	*/
	var test = [
	    [{
	            title: "name two most popular boybands of the 90s",
	            answers: ["bsb and nsync", "1-D and 5ive", "take that and nkotb"],
	            correct: "bsb and nsync"
	        },
	        {
	            title: "which girlband released their hit single 'wannabe' in 1996?",
	            answers: ["spice girls", "funky diamonds", "solid harmony"],
	            correct: "spice girls"
	        },
	        {
	            title: "which band was a grunge band from seattle?",
	            answers: ["captain jack", "stone temple pilots", "pearl jam"],
	            correct: "pearl jam"
	        },
	        {
	            title: "what was the name of the dance music genre popular in the 90s?",
	            answers: ["eurodance", "edm", "deep house"],
	            correct: "eurodance"
	        },
	        {
	            title: "what was the name of irish band consisting of family members?",
	            answers: ["the moffats", "hanson", "the kelly family"],
	            correct: "the kelly family"
	        },
	        {
	            title: "which of these soap operas did not run in the 90s?",
	            answers: ["sex and the city", "gossip girl", "friends"],
	            correct: "gossip girl"
	        },
	        {
	            title: "what is the  other name of a state which is a birthplace of grunge music?",
	            answers: ["the rainy state", "the evergreen state", "garden state"],
	            correct: "the evergreen state"
	        },
	        {
	            title: "two frenemies from the popular 90s soap opera 'beverly hills 90210' were named...",
	            answers: ["blair and serena", "brenda and kelly", "monica and rachel"],
	            correct: "brenda and kelly"
	        },
	        {
	            title: "justin timberlake's first band was...",
	            answers: ["nkotb", "bsb", "nsync"],
	            correct: "nsync"
	        },
	        {
	            title: "what were the names of electronic toys kept as pets?",
	            answers: ["furigi and tamaru", "furby and tamagotchi", "tamagoru and fibura"],
	            correct: "furby and tamagotchi"
	        },
	        {
	            title: "what year was JavaScript invented in?",
	            answers: ["1996", "1992", "1995"],
	            correct: "1995"
	        },
	        {
	            title: "what was the name of the british boyband where robbie williams started his career?",
	            answers: ["take that", "boyzone", "east-17"],
	            correct: "take that"
	        }
	    ],

	    [{
	            title: "which boyband sung 'quit playing games'?",
	            answers: ["backstreet boys", "nsync", "take that"],
	            correct: "backstreet boys"
	        },
	        {
	            title: "which of these boys did not decide to go solo?",
	            answers: ["nick carter", "justin timberlake", "owen williams"],
	            correct: "owen williams"
	        },
	        {
	            title: "who covered george michael's 'freedom' after leaving his band?",
	            answers: ["nick carter", "justin timberlake", "robbie williams"],
	            correct: "robbie williams"
	        },
	        {
	            title: "those two bandmates really hated each other but reconciled in 2010. they are...",
	            answers: ["nick carter & brian littrel", "justin timberlake and jc chasez", "robbie williams & gary barlow"],
	            correct: "robbie williams & gary barlow"
	        },
	        {
	            title: "those two bands are british:",
	            answers: ["five & take that", "east 17 & nkotb", "nsync and bsb"],
	            correct: "five & take that"
	        },
	        {
	            title: "these two bands are irish:",
	            answers: ["take that & nkotb", "east 17 & 98degrees", "westlife & boyzone"],
	            correct: "westlife & boyzone"
	        },
	        {
	            title: "'if you got the feeling' is a song by...",
	            answers: ["five", "east 17", "backstreet boys"],
	            correct: "five"
	        },
	        {
	            title: "backstreet boys' first hit single was released in...",
	            answers: ["1995", "1994", "1997"],
	            correct: "1995"
	        },
	        {
	            title: "touche are a boyband from...",
	            answers: ["germany", "belgium", "france"],
	            correct: "germany"
	        },
	        {
	            title: "how many members did 98degrees have?",
	            answers: ["five", "three", "four"],
	            correct: "four"
	        }
	    ],
	    [{
	            title: "what was the name of paddy kelly's brother?",
	            answers: ["aaron", "bobbie", "angelo"],
	            correct: "angelo"
	        },
	        {
	            title: "which band sung 'blackhole sun?",
	            answers: ["soundgarden", "the smashing pumpkins", "nirvana"],
	            correct: "soundgarden"
	        },
	        {
	            title: "whose brother dated lindsay lohan in early 2000s?",
	            answers: ["nick carter's", "justin timberlake's", "mark owen's"],
	            correct: "nick carter's"
	        },
	        {
	            title: "member of which irish boyband came out to the public?",
	            answers: ["nsync", "take that", "boyzone"],
	            correct: "boyzone"
	        },
	        {
	            title: "who dated paris hilton?",
	            answers: ["lance bass", "nick carter", "justin timberlake"],
	            correct: "nick carter"
	        },
	        {
	            title: "kurt cobain's wife's name was...",
	            answers: ["jessica simpson", "geri halliwell", "courtney love"],
	            correct: "courtney love"
	        },
	        {
	            title: "which band had a duet with queen?",
	            answers: ["five", "boyzone", "take that"],
	            correct: "five"
	        },
	        {
	            title: "furby was invented in...",
	            answers: ["1995", "1998", "1997"],
	            correct: "1998"
	        },
	        {
	            title: "what is the name of pop dance festival held in Germany and Austria?",
	            answers: ["The Doom", "The Dance Off", "The Dome"],
	            correct: "The Dome"
	        },
	        {
	            title: "Nirvana's artist Dave Grohl founded another band in 1995. It was...",
	            answers: ["Our Lady Peace", "Foo Fighters", "Smashing Pumpkins"],
	            correct: "Foo Fighters"
	        }
	    ]


	];
	console.log(test.length);
	/*
		psychotest texts and array of objects
	*/
	var paddyText = "Your dream boy is Paddy. Like him, you are romantic, sensitive and kind. You like nature, good food and are loyal to your friends and family"
	var justinText = "Your dream boy is Justin. Like him, you are sexy, outgoing and fun. You like pop music, pizza and there is no party without you!"
	var nickText = "Your dream boy is Nick. Like him you are nice, cute and a bit of a romantic soul. You like long walks on the beach, good wine and soul music"
	var undecided = "Well, you cannot decide, can you? Each of them is special and so are you."
	var phoebeText = "You are Phoebe! Might seem strange and peculiar but you are always there to help your friends out"
	var monicaText = "You are Monica! Down to earth and maybe a little anal, but loyal and trustworthy"
	var rachelText = "You are Rachel. It might seem you are a bit of an entitled princess but you will always finally get your act together"
	var harryText = "You are Harry. Brave and true to yourself but sometimes you feel a bit misunderstood and need time on your own"
	var hermioneText = "You are Hermione. Best known for your intelligence and wit, you are always there to help others out"
	var ronText = " You are Ron. You might feel overlooked but in the end you shine and will be recognized"
	var collectedAnswers = [];
	var quiz = [{
	        questions: [{
	                title: "your favourite food?",
	                answers: [{
	                        answer: "pizza",
	                        result: "justin"
	                    },
	                    {
	                        answer: "home cooked food",
	                        result: "paddy"
	                    },
	                    {
	                        answer: "sushi",
	                        result: "nick"
	                    }
	                ]

	            },
	            {
	                title: "city or countryside?",
	                answers: [{
	                        answer: "definitely countryside!",
	                        result: "paddy"
	                    },
	                    {
	                        answer: "i love city",
	                        result: "justin"
	                    },
	                    {
	                        answer: "both",
	                        result: "nick"
	                    }
	                ]

	            },
	            {
	                title: "favourite music?",
	                answers: [{
	                        answer: "pop rock",
	                        result: "nick"
	                    },
	                    {
	                        answer: "pop, folk, rock...",
	                        result: "paddy"
	                    },
	                    {
	                        answer: "rnb and pop",
	                        result: "justin"
	                    }
	                ],

	            },
	            {
	                title: "your ideal boyfriend would be?",
	                answers: [{
	                        answer: "sexy and fun",
	                        result: "justin"
	                    },
	                    {
	                        answer: "shy and sweet",
	                        result: "nick"
	                    },
	                    {
	                        answer: "romantic and serious",
	                        result: "paddy"
	                    }
	                ],

	            },
	            {
	                title: "your ideal date?",
	                answers: [{
	                        answer: "film night, making out",
	                        result: "justin"
	                    },
	                    {
	                        answer: "long walk on the beach",
	                        result: "nick"
	                    },
	                    {
	                        answer: "playing guitar and singing",
	                        result: "paddy"
	                    }
	                ],

	            },
	            {
	                title: "are looks important?",
	                answers: [{
	                        answer: "of course they are!",
	                        result: "justin"
	                    },
	                    {
	                        answer: "not most important, but yes",
	                        result: "nick"
	                    },
	                    {
	                        answer: "personality matters the most",
	                        result: "paddy"
	                    }
	                ],

	            },
	            {
	                title: "describe your personal style",
	                answers: [{
	                        answer: "skinny jeans, crop top",
	                        result: "justin"
	                    },
	                    {
	                        answer: "short dress and high heels",
	                        result: "nick"
	                    },
	                    {
	                        answer: "romantic flowing dresses",
	                        result: "paddy"
	                    }
	                ],

	            },
	            {
	                title: "your favourite 90s film",
	                answers: [{
	                        answer: "matrix",
	                        result: "justin"
	                    },
	                    {
	                        answer: "philadelphia",
	                        result: "nick"
	                    },
	                    {
	                        answer: "titanic",
	                        result: "paddy"
	                    }
	                ],

	            },
	            {
	                title: "your favourite song is...",
	                answers: [{
	                        answer: "i want you back",
	                        result: "justin"
	                    },
	                    {
	                        answer: "quit playing games",
	                        result: "nick"
	                    },
	                    {
	                        answer: "angel",
	                        result: "paddy"
	                    }
	                ],

	            }
	        ],
	        results: ["justin", "nick", "paddy"],
	        descriptions: [justinText, nickText, paddyText, undecided],
	        myTitle: "Find your 90s boyfriend"
	    },
	    {
	        questions: [{
	                title: "your friends say you are",
	                answers: [{
	                        answer: "weird but in a good way",
	                        result: "phoebe"
	                    },
	                    {
	                        answer: "down-to-earth",
	                        result: "monica"
	                    },
	                    {
	                        answer: "a bit spoilt but nice",
	                        result: "rachel"
	                    }
	                ]

	            },
	            {
	                title: "what are you like at work?",
	                answers: [{
	                        answer: "easily distracted",
	                        result: "phoebe"
	                    },
	                    {
	                        answer: "disciplined and hardworking",
	                        result: "monica"
	                    },
	                    {
	                        answer: "lazy but i get things done",
	                        result: "rachel"
	                    }
	                ]

	            },
	            {
	                title: "favourite music?",
	                answers: [{
	                        answer: "folk, psychodelic rock",
	                        result: "phoebe"
	                    },
	                    {
	                        answer: "pop and rock",
	                        result: "monica"
	                    },
	                    {
	                        answer: "pop, dance, hip hop",
	                        result: "rachel"
	                    }
	                ],

	            },
	            {
	                title: "your ideal boyfriend would be?",
	                answers: [{
	                        answer: "spiritual, mysterious",
	                        result: "phoebe"
	                    },
	                    {
	                        answer: "reliable and serious",
	                        result: "monica"
	                    },
	                    {
	                        answer: "handsome and rich",
	                        result: "rachel"
	                    }
	                ],

	            },
	            {
	                title: "your favourite food",
	                answers: [{
	                        answer: "fruits and vegetables",
	                        result: "phoebe"
	                    },
	                    {
	                        answer: "steak and salad",
	                        result: "monica"
	                    },
	                    {
	                        answer: "sushi",
	                        result: "rachel"
	                    }
	                ],

	            },
	            {
	                title: "your relationship with parents is...?",
	                answers: [{
	                        answer: "very loose",
	                        result: "phoebe"
	                    },
	                    {
	                        answer: "we are close ",
	                        result: "monica"
	                    },
	                    {
	                        answer: "they totally dominate me",
	                        result: "rachel"
	                    }
	                ],

	            },
	            {
	                title: "describe your style",
	                answers: [{
	                        answer: "boho/hippie",
	                        result: "phoebe"
	                    },
	                    {
	                        answer: "casual elegance",
	                        result: "monica"
	                    },
	                    {
	                        answer: "dressed to the 9s",
	                        result: "rachel"
	                    }
	                ],

	            },
	            {
	                title: "your favourite book?",
	                answers: [{
	                        answer: "life of pi",
	                        result: "phoebe"
	                    },
	                    {
	                        answer: "girl with dragon tatoo",
	                        result: "monica"
	                    },
	                    {
	                        answer: "i do not like books",
	                        result: "rachel"
	                    }
	                ],

	            },
	            {
	                title: "your partner should...",
	                answers: [{
	                        answer: "understand me deeply",
	                        result: "phoebe"
	                    },
	                    {
	                        answer: "support me in achieving my goals",
	                        result: "monica"
	                    },
	                    {
	                        answer: "cater to me",
	                        result: "rachel"
	                    }
	                ],

	            }
	        ],
	        results: ["phoebe", "monica", "rachel"],
	        descriptions: [phoebeText, monicaText, rachelText, undecided],
	        myTitle: "Which Friends female character are you?"
	    },
	    {
	        questions: [{
	                title: "you are best known for your...",
	                answers: [{
	                        answer: "bravery and recklesness",
	                        result: "harry"
	                    },
	                    {
	                        answer: "intelligence and wit",
	                        result: "hermione"
	                    },
	                    {
	                        answer: "loyalty and sense of humour",
	                        result: "ron"
	                    }
	                ]

	            },
	            {
	                title: "what were you like at school?",
	                answers: [{
	                        answer: "excelled at 1-2 subjects",
	                        result: "harry"
	                    },
	                    {
	                        answer: "straight A student",
	                        result: "hermione"
	                    },
	                    {
	                        answer: "average student",
	                        result: "ron"
	                    }
	                ]

	            },
	            {
	                title: "your favourite color?",
	                answers: [{
	                        answer: "red, gold, black",
	                        result: "harry"
	                    },
	                    {
	                        answer: "blue, green, silver",
	                        result: "hermione"
	                    },
	                    {
	                        answer: "orange, yellow, brown",
	                        result: "ron"
	                    }
	                ],

	            },
	            {
	                title: "your ideal partner would be?",
	                answers: [{
	                        answer: "someone independent and understanding",
	                        result: "harry"
	                    },
	                    {
	                        answer: "someone making me smile",
	                        result: "hermione"
	                    },
	                    {
	                        answer: "someone helping me reach my potential",
	                        result: "ron"
	                    }
	                ],

	            },
	            {
	                title: "your favourite food?",
	                answers: [{
	                        answer: "home made food",
	                        result: "harry"
	                    },
	                    {
	                        answer: "healthy and nutritious",
	                        result: "hermione"
	                    },
	                    {
	                        answer: "all food, i love food!",
	                        result: "ron"
	                    }
	                ],

	            },
	            {
	                title: "your relationship with parents is...?",
	                answers: [{
	                        answer: "i look up to them",
	                        result: "harry"
	                    },
	                    {
	                        answer: "we are very different but i love them",
	                        result: "hermione"
	                    },
	                    {
	                        answer: "we are every close",
	                        result: "ron"
	                    }
	                ],

	            },
	            {
	                title: "your dream profession?",
	                answers: [{
	                        answer: "journalist, traveller, enterpreneur",
	                        result: "harry"
	                    },
	                    {
	                        answer: "scientist, activist, web developer, doctor",
	                        result: "hermione"
	                    },
	                    {
	                        answer: "chef, footballer, reality show celebrity",
	                        result: "ron"
	                    }
	                ],

	            },
	            {
	                title: "best film ever?",
	                answers: [{
	                        answer: "matrix",
	                        result: "harry"
	                    },
	                    {
	                        answer: "animatrix",
	                        result: "hermione"
	                    },
	                    {
	                        answer: "star trek",
	                        result: "ron"
	                    }
	                ],

	            },
	            {
	                title: "your favourite animal?",
	                answers: [{
	                        answer: "deer, eagle, lion",
	                        result: "harry"
	                    },
	                    {
	                        answer: "cat, otter, bee",
	                        result: "hermione"
	                    },
	                    {
	                        answer: "dog, horse, bull",
	                        result: "ron"
	                    }
	                ],

	            }
	        ],
	        results: ["harry", "hermione", "ron"],
	        descriptions: [harryText, hermioneText, ronText, undecided],
	        myTitle: "Which Harry Potter character are you?"
	    }
	];
	console.log(quiz.length);

	/*
	variables for DOM elements
	*/
	var score = 0; //momeory
	var clicks = 0; //momeory


	var toTheGamesBtn = $("header").find("button").not(".hamburger");
	var gameSection = $("#gameSection");
	var lowerContent = gameSection.children();

	var header = $("header");
	var footer = $("footer");
	var initiatingBtn = $("button#memoryGame");
	var hamburgerMenu = $(".hamburger");
	var hamburgerMenuFocused = $(".hamburger.focus");

	var toTheGamesBtn = $("header").find("button").not(".hamburger");
	var gameSection = $("#gameSection");
	var lowerContent = gameSection.children();
	var otherSections = $("section").not(gameSection);
	//variables - elements
	var header = $("header");
	var learnArt = $("#learn");
	var infoSection = $("#infoSection");
	var learnSection = $("#learnSection");
	var learnBtn = learnArt.find("button");
	var linksInMenu = $("ul.menu").find("a");
	//psychotest DOM
	var startingBtn = $("button#psychoTest");
	console.log(startingBtn);
	var testSection = $("#testSection");
	var sections = $("section").not(testSection);
	var header = $("header");
	var footer = $("footer");
	var h1 = testSection.find("h1");
	var gamesSection = $("#gamesSection");
	var navigation = header.find("nav");
	var triviaBtn = $("#triviaGame");
	console.log(triviaBtn);
	var triviaSection = $("#triviaSection");
	var triviaSectionHeader = triviaSection.find("h1");
	var sections2 = $("section").not(triviaSection);
	var gamesSection = $("#gamesSection");
	var boardDiv = $(".boardDiv");