document.addEventListener("DOMContentLoaded", function(event) {
    const section = document.querySelector("section")
    const startingBtns = document.querySelectorAll(".startingButton");
    const secondStartingBtn = startingBtns[1];
    let index = 0;
    let collectedAnswers = [];
    const quizData = firebase.database().ref("/quizData");
    quizData.once("value").then(function(data) {
        startingBtns.forEach(startingBtn => startingBtn.addEventListener("click", startGame));
        const quizData = data.val();
        randomize(quizData.questions);
        secondStartingBtn.setAttribute("data-number", quizData.questions.length);
        function startGame() {
            this.parentElement.parentElement.previousElementSibling.previousElementSibling.remove();
            this.parentElement.parentElement.previousElementSibling.remove();
            this.parentElement.parentElement.remove();
            const numberOfQuestions = parseInt(this.getAttribute("data-number"), 10);
            createQuestion();

            function createQuestion() {
                if (index < numberOfQuestions) {
                    const questionContainer = document.createElement("div");
                    questionContainer.classList.add("questionContainer");
                    section.append(questionContainer);
                    const questionNumber = document.createElement("h2");
                    questionContainer.append(questionNumber);
                    questionNumber.textContent = "Question " + (index + 1);
                    const questionTitle = document.createElement("h3");
                    questionContainer.append(questionTitle);
                    questionTitle.textContent = quizData.questions[index].questionTitle;
                    createAnswers();

                    function createAnswers() {
                        const answerContainer = document.createElement("div");
                        questionContainer.append(answerContainer);
                        answerContainer.classList.add("answerContainer");
                        randomize(quizData.questions[index].answers);
                        for (let i = 0; i < quizData.questions[index].answers.length; i++) {
                            const answerButton = document.createElement("button");
                            answerButton.classList.add("answerButton");
                            answerContainer.append(answerButton);
                            answerButton.textContent = quizData.questions[index].answers[i].answer;
                            answerButton.setAttribute("data-house", quizData.questions[index].answers[i].result)
                        }
                    }
                    const answerButtons = document.querySelectorAll(".answerButton");
                    answerButtons.forEach(answerButton => answerButton.addEventListener("click", deletePreviousQuestion));
                    answerButtons.forEach(answerButton => answerButton.addEventListener("click", collectResult));

                } else {
                    computeResult();
                }

            }

            function collectResult() {
                let house = this.getAttribute("data-house");
                collectedAnswers.push(house);
                console.log(collectedAnswers, collectedAnswers.length);
                index++;
                createQuestion();
            }
        }


        function computeResult() {
            console.log(collectedAnswers, collectedAnswers.length);
            let resultRavenclaw = collectedAnswers.filter(function(item) {
                return item === quizData.finalResults[0].house;
            }).length;

            let resultSlytherin = collectedAnswers.filter(function(item) {
                return item === quizData.finalResults[1].house;
            }).length;

            let resultGryffindor = collectedAnswers.filter(function(item) {
                return item === quizData.finalResults[2].house;
            }).length;

            let resultHufflepuff = collectedAnswers.filter(function(item) {
                return item === quizData.finalResults[3].house;
            }).length;
            console.log(resultRavenclaw, resultSlytherin, resultGryffindor, resultHufflepuff);
            displayResults();

            function displayResults() {
                const displayBoard = document.createElement("article");
                displayBoard.classList.add("displayBoard");
                section.append(displayBoard);
                const displayHeader = document.createElement("h3");
                displayBoard.append(displayHeader);
                displayHeader.textContent = "Your result:"
                const displayDiv = document.createElement("div");
                displayBoard.append(displayDiv);
                displayDiv.classList.add("displayDiv");
                const displayParagraph = document.createElement("p");
                displayBoard.append(displayParagraph);
                if (resultRavenclaw > (resultGryffindor + resultSlytherin + resultHufflepuff) / 2) {
                    displayBoard.classList.add("ravenclaw");
                    displayParagraph.textContent = quizData.finalResults[0].characteristics;
                } else if (resultSlytherin > (resultGryffindor + resultRavenclaw + resultHufflepuff) / 2) {
                    displayBoard.classList.add("slytherin");
                    displayParagraph.textContent = quizData.finalResults[1].characteristics;
                } else if (resultGryffindor > (resultRavenclaw + resultSlytherin + resultHufflepuff) / 2) {
                    displayBoard.classList.add("gryffindor");
                    displayParagraph.textContent = quizData.finalResults[2].characteristics;
                } else if (resultHufflepuff > (resultGryffindor + resultSlytherin + resultRavenclaw) / 2) {
                    displayBoard.classList.add("hufflepuff");
                    displayParagraph.textContent = quizData.finalResults[3].characteristics;
                } else {
                    displayBoard.classList.add("undecided");
                    sortYourself();
                }

                function sortYourself() {
                    const sortingSelfBtn = document.createElement("button");
                    displayParagraph.textContent = "I cannot decide, you would fit anywhere. Where do you want to be?"
                    sortingSelfBtn.textContent = "sort yourself"
                    displayBoard.append(sortingSelfBtn);
                    sortingSelfBtn.addEventListener("click", createFourHouseBtns);

                    function createFourHouseBtns() {
                        this.remove();
                        const houseBtnsContainer = document.createElement("div");
                        displayBoard.append(houseBtnsContainer);
                        for (let i = 0; i < 4; i++) {
                            const houseBtn = document.createElement("button");
                            houseBtn.setAttribute("data-house", quizData.finalResults[i].house);
                            houseBtn.textContent = houseBtn.getAttribute("data-house");
                            houseBtnsContainer.append(houseBtn);
                        }
                        const houseBtns = document.querySelectorAll("[data-house]");
                        houseBtns.forEach(houseBtn => houseBtn.addEventListener("click", chooseHouse));
                    }

                    function chooseHouse() {
                        displayBoard.classList.remove("undecided");
                        this.parentElement.remove();
                        if (this.getAttribute("data-house") === "Ravenclaw") {
                            displayBoard.classList.add("ravenclaw");
                            displayParagraph.textContent = quizData.finalResults[0].characteristics;
                        } else if (this.getAttribute("data-house") === "Slytherin") {
                            displayBoard.classList.add("slytherin");
                            displayParagraph.textContent = quizData.finalResults[1].characteristics;
                        } else if (this.getAttribute("data-house") === "Gryffindor") {
                            displayBoard.classList.add("gryffindor");
                            displayParagraph.textContent = quizData.finalResults[2].characteristics;
                        } else if (this.getAttribute("data-house") === "Hufflepuff") {
                            displayBoard.classList.add("hufflepuff");
                            displayParagraph.textContent = quizData.finalResults[3].characteristics;
                        }

                    }

                }
            }

        }
    })
    function randomize(elements) {
        for (var i = 0; i < elements.length; i++) {
            var j = Math.floor(Math.random() * elements.length);
            var temp = elements[i];
            elements[i] = elements[j];
            elements[j] = temp;
        }
        return elements;
    }

    function deletePreviousQuestion() {
        this.parentElement.parentElement.remove();
    }

})

    