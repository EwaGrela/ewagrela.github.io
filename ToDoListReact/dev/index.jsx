
import React from "react";
import ReactDOM from "react-dom";

/*

./node_modules/.bin/webpack

*/

const target = document.getElementById("app");
const button = {
	width: "120px",
	height: "40px",
	backgroundColor: "#006666",
	color: "#fefefe",
	border: "2px solid #004444",
	borderRadius: "5%"

}
const input = {
	width: "150px",
	height: "45px",
	backgroundColor: "#009999",
	border: "#003333",
	margin: "10px",
	color: "#fefefe",


}
const form = {
	width: "auto",
	display:"flex",
	flexDirection: "column",
	justifyContent: "space-around",
	alignItems: "center",
	margin: "20px 0px"

}
const ul = {
	width: "auto",
	display:"flex",
	flexDirection: "column",
	justifyContent: "space-around",
	alignItems: "center",
	height: "auto",
	backgroundColor: "#fefefe",
	border: "4px solid #00aaaa",
	listStyleType: "none",
	margin: "20px 30px",
	color: "#004545"

}

class List extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items : [],
			deleted : []
			
		}
		this.handleInput = this.handleInput.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		
	}
	
	handleInput(e){
		e.preventDefault();
		let input = e.target.firstElementChild;
		let itemArr = this.state.items;
		itemArr.push(input.value)
		this.setState({
			items : itemArr
		})
		input.value = "";
		console.log(this.state.items); //monitor it while it increases

	}
	removeItem(e){
		let toRemove = e.target.parentElement;
		toRemove.remove();
	}
	deleteItem(e){
		let toDelete = e.target.previousElementSibling.previousElementSibling;
		toDelete.classList.toggle("deleted");

	}
	render(){
		return(
			<div>
				<h1>To Do List</h1>
				<Form onSubmit = {this.handleInput}/>
				<ToDo list = {this.state.items} onClick1 = {this.removeItem} onClick2 = {this.deleteItem} onClick3 = {this.changeDisplay1}/>
			</div>
		)
	}
}

class Form extends React.Component {
	render(){
		return(
			<form style= {form} onSubmit = {this.props.onSubmit}>
				<input style = {input} type = "text" placeholder = "write task"/>
				<button style={button} type ="submit">add</button>
			</form>
		)
	}
}

class ToDo extends React.Component {
	render(){
		const list = this.props.list;
		const items = list.map((item)=><li key = {item}><h2>{item}</h2><button style = {button} className ="remove" onClick = {this.props.onClick1}>Remove</button>
		<button  style= {button} className = "delete" onClick = {this.props.onClick2}>Delete</button>
		</li>)
		return(
			<ul style = {ul}>
			{items}
			</ul>
		)
	}
}



ReactDOM.render(<List/>, target); 
