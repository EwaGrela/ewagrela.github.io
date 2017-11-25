
import React from "react";
import ReactDOM from "react-dom";
import {QuizBody} from "./quizbody.jsx"
import {Header} from "./header.jsx"
 /*

./node_modules/.bin/webpack

*/
const target = document.getElementById("app")

class App extends React.Component {
	render() {
		return (
			<div className ="mainContent">
				<Header/>
				<QuizBody/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, target)