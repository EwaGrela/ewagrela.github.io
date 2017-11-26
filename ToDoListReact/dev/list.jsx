import React from 'react'
export class List extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items: []
		}
		this.makeListItem = this.makeListItem.bind(this)
		this.removeItem = this.removeItem.bind(this)
	}
	componentDidMount(){
		this.setState({
			items: this.props.data
		})
	}
	removeItem(e){
		e.target.parentElement.remove()
	}
	makeListItem(){
		return this.state.items.map((item, idx) => <li className="listItem" key={idx}>
			<h3>{item}</h3>
			<button className="removeButton" onClick={this.removeItem}>remove</button>
		</li>)
	}
	render(){
		return(
			<ul className="list">
			{this.makeListItem()}
			</ul>
		)
	}
}