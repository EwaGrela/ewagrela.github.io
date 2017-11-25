import React from 'react'
import {questions} from "./data.js"
import {descriptions} from "./data.js"
import {Results} from "./result.jsx"
import {Chart} from "./chart.jsx"
export class Question extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			questions: questions,
			score: [],
			index: 0,
			result: {},
			descriptions: descriptions
		}
	this.shuffle = this.shuffle.bind(this)
	this.createQuestion = this.createQuestion.bind(this)
	this.changeIndex = this.changeIndex.bind(this)
	this.generateResults = this.generateResults.bind(this)
	this.computeResults = this.computeResults.bind(this)
	this.showResults = this.showResults.bind(this)
	this.renderChart = this.renderChart.bind(this)
	}

	shuffle(data) {
	    for (let i = data.length - 1; i > 0; i--) {
	        let j = Math.floor(Math.random() * (i + 1));
	        [data[i], data[j]] = [data[j], data[i]];
	    }
	}
	createQuestion(index){
		this.shuffle(this.state.questions[this.state.index].answers)
		let question = this.state.questions[this.state.index].answers
		.map((quest, ind) => <button key= {ind} className={(quest.result).toLowerCase()} data-result={quest.result} onClick={this.generateResults}>{quest.answer}</button> );

		return (<div>{question}</div>) ;
	}

	changeIndex() {
		let index = this.state.index +1
		this.setState({
			index: index
		})
		this.createQuestion(index)
	}

	generateResults(e){
		let results = this.state.score
		results.push(e.target.dataset.result)
		this.setState({
			score: results
		})
		this.changeIndex()
		if(this.state.score.length ===questions.length){
			this.computeResults()
		}

	}

	computeResults(){
		let set = [...new Set(this.state.score)]
		let result = this.state.result;
		for( let i = 0; i<set.length; i++){
			let occ = this.state.score.filter(item => set[i]===item).length;
			result[set[i]]=occ
		}
		this.setState({
			result: result
		})
	}

	showResults(){
		let keys = this.state.descriptions
		.map(it=> ({house: it.house, points:this.state.result[it.house], description: it.characteristics}))
		.sort((a,b)=> a.points>b.points ? -1: 1)
		console.log(keys)
		let text;
		if(keys[0].points===keys[1].points){
			console.log("undecided")
			text = "It is not possible to determine, because your personality is very complex"
		} else {
			console.log(`You are a ${keys[0].house} and you are ${keys[0].description}`)
			text = `You are a ${keys[0].house} and you are ${keys[0].description}`
		}
		return(
			<Results final ={text}/>
		)
	}

	renderChart(){
		let dataset = this.state.descriptions
		.map( it => ({house: it.house, points: this.state.result[it.house]}))
		.sort((a,b)=> a.points>b.points ? -1 : 1)
		console.log(dataset)
		return (
			<Chart dataset = {dataset}/>
		)
	}

	render(){
		console.log(this.state.index, questions.length)
		if(this.state.index >= questions.length){
			return(<div className ="results">{this.showResults()	}
			{this.renderChart()}
			</div>)
			
				
		} else {
		return(
		<div className ="content">
			<h2>{this.state.questions[this.state.index].questionTitle}</h2>
				<div className="questions">
				{this.createQuestion(this.state.index)}
				</div>			
		</div>		 
		)
		
		}
	}
}