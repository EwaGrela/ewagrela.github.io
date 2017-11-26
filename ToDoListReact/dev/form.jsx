import React from 'react'
import {List} from './list.jsx'
export class Form extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			memo: []
		}
		this.updateMemo = this.updateMemo.bind(this)
		this.renderList = this.renderList.bind(this)
	}
	updateMemo(e){
		e.preventDefault()
		let memo = this.state.memo;
		let input = e.target.children[1]
		memo.push(input.value)
		this.setState({
			memo: memo
		})
		input.value = "";
	}
	renderList(){
		return <List data={this.state.memo} />
	}
	render() {
		return(
			<div className = "mainForm">
				<form className = "mainForm" onSubmit={this.updateMemo}>
					<label className ="label">Task:</label>
					<input name = "item" className="item" type = "text" placeholder="enter task here"/>
					<input type="submit" className="submit" value="ok"/>
				</form>
				{this.renderList()}
			</div>
			
		)
	}
}