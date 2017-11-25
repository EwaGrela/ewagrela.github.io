import React from 'react'

export class Results extends React.Component {
	render(){
		return(
			<div>
				<h1>Congratulations</h1>
				<p>{this.props.final}</p>
			</div>
		)
	}
}