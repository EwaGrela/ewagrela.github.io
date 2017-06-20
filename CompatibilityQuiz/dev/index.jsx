
import React from "react";
import ReactDOM from "react-dom";
/*

./node_modules/.bin/webpack
*/

const questions = [
			{title:"Tea or coffee?",
			answers: [["tea", false], ["coffee", false], ["energy drinks", true]],
			
			},
			{title: "You prefer to work?",
			answers: [["orderly", false], ["creatively", false], ["why not both!", true]],
			},
			{ title: "The best takeout?",
			answers:[["pizza", false], ["chinese", false], ["indian", true]],
			
			},
			{ title: "What is more important?",
			answers: [["passion",false], ["perfection", false], ["50/50", true]],
			
			},
			{ title: "Your ideal friend is...?",
			answers: [["extrovert",true], ["introvert",false],[ "whatever", false] ]
			
			},
			{ title: "You think talkative people are...",
			answers: [["silly", false], ["honest", false],  ["fine", true]]
			
			},
			{ title: "Favourite music",
			answers: [["pop dance",true], ["metal", false], ["hip hop", false] ]
			
			},
			{ title: "Do you like 'The Room'",
			answers: [ ["nope", false], ["love it!", true], ["the what?", false] ]
			
			},
			{ title: "Your take on vegetarian cuisine",
			answers: [["it may be very good",true], ["ewwwww",false], ["I prefer meat", false] ]
			
			},
			{ title: "Cats or dogs?",
			answers: [ ["dogs",false], ["goldfish :)", false], ["cats", true] ]
			
			},

		]


class App extends React.Component {
	render(){
		return(
			<div className ="appContainer">
				<article>
					<h2>Compability quiz</h2>
					<p>Hello Stranger!</p>
					<p> Welcome to my world!</p>
					<p>Let's find out if we are similar.</p>
					<button onClick={this.startQuiz}>Start</button>
				</article>
				< Quiz/>
			</div>
		)
	}
	startQuiz(e) {
		const toRemove = e.target.parentElement;
		toRemove.parentNode.removeChild(toRemove);
		const toShow = document.querySelector(".questionContainer");
		toShow.classList.remove("invisible");
	}
	
}

class Quiz extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	index: 0,
		isFinished: false,
		corrects: []
    }
    this.doTheQuiz = this.doTheQuiz.bind(this);
  }

  doTheQuiz(e){
  		const value = e.target.value;
		const corrects = this.state.corrects;
		console.log(value);
		if(value ==="true"){
			corrects.push(value);
			
		}
		console.log(corrects.length);
		const newIndex = this.state.index;
		const isFinished = this.state.isFinished;
		
		this.setState({
			index: newIndex +1
		})

		if(newIndex===questions.length-1){
			this.setState({
				isFinished: true
			})
		}
  }

  render(){
		const index = this.state.index;
		console.log(index);
		const isFinished = this.state.isFinished;
		console.log(isFinished);
		if( isFinished ===false){
			return(
			<div className ="questionContainer invisible">
				<h2>Question {this.state.index +1} out of {questions.length}</h2>
				<h3>{questions[index].title}</h3>
				<div className ="answersContainer" >
					<button value={questions[index].answers[0][1]} onClick ={this.doTheQuiz} >{questions[index].answers[0][0]}
					</button>
					
					<button value ={questions[index].answers[1][1]} onClick ={this.doTheQuiz} >{questions[index].answers[1][0]}	
					</button>
					
					<button value ={questions[index].answers[2][1]} onClick ={this.doTheQuiz} >{questions[index].answers[2][0]}	
					</button>								
				</div>		
			</div>
		)
		} else {
			return(				
				< Results value= {this.state.corrects.length}/>
			)
		}	
  }
}

class Results extends React.Component {
	render(){
		return(
			<div className ="resultsDiv">
				<h2>Congrats!</h2> 
				<p>You have finished the quiz!</p>
				<p>You received {this.props.value} points</p>
				<Comment value = {this.props.value}/>
			</div>
		)
	}
}

class Comment extends React.Component {
	render(){
		const results = parseInt(this.props.value)
		console.log(results);
		if(results>5) {
			return(
				<p>This means we are very similar and should get along swimmingly!</p>
			)
		} else {
			return(
				<p>We are a bit different, but hey, that only means we can benefit from it!</p>
			)
		}

	}
}


ReactDOM.render(<App/>, document.getElementById("app"));


