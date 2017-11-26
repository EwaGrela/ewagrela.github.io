import React from 'react'
import ReactDOM from 'react-dom'
import {Form} from './form.jsx'
class App extends React.Component {
	render(){
		return(
			<div className ="main">
				<h1 className= "header">To-do list</h1>
				<Form/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector("#app"));