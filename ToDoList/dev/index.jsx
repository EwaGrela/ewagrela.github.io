
import React from "react";
import ReactDOM from "react-dom";

/*

./node_modules/.bin/webpack

*/

const target = document.querySelector("#app");
//create a single item in a to-do-list able to remove itself if clicked
class ToDoItems extends React.Component {
	constructor(){
		super()
		this.removeItem = this.removeItem.bind(this);
	}
	removeItem(e){
		console.log(e, e.target);
		e.target.remove();
	}
	render(){
		let toDoEntries = this.props.entries;
		function createTask(item){
			return <li key = {item.key}>{item.text}</li>
		}
		let listItems = toDoEntries.map(createTask)
		return(
			<ul onClick = {this.removeItem} className ="taskList">
				{listItems}
			</ul>
		)
	}
}
//create a parent component
class ToDoList extends React.Component {
	constructor(props){
		super(props);
		this.state ={
			items :[]
		}
	this.addItem = this.addItem.bind(this);
	}
	addItem(e){
		let itemArray = this.state.items;
		itemArray.push({text:this._inputElement.value, key: Date.now() })
		this.setState({
			items : itemArray
		})
		this._inputElement.value = ""; //so that once you add item, you do not have to 
		e.preventDefault();
	}
	render(){
		return (
			<div className = "main">
				<div className = "header">
					<form onSubmit = {this.addItem}>
						<input ref= {(a) => this._inputElement = a} placeholder = "write task">
						</input>
						<button type = "submit">add</button>
					</form>
				</div>
				<ToDoItems entries= {this.state.items}/>
			</div>
		)
	}
}

ReactDOM.render(<ToDoList/>, target)