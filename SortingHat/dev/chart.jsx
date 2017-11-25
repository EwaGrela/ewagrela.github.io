import React from 'react'
import * as d3 from 'd3';
export class Chart extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			dataset: []
		}
		this.makePie = this.makePie.bind(this)
	}

	componentDidMount(){
		this.setState({
			dataset: this.props.dataset
		})
	}
	makePie(){
		const dataset = this.state.dataset;
		const width = 360;
		const height = 360;
		const donutWidth = 75;
		const legendRectSize = 18;
		const legendSpacing = 6;
		const radius = Math.min(width, height) / 2;
		const color = d3.scaleOrdinal()
  		.range(['#336699', ' #457899', '#6d8e9a', '#99aaff']);
		const svg = d3.select('.chart')
		.append('svg')
		.attr('width', width)
		.attr('height', height)
		.append('g')
		.attr('transform', `translate(${(width / 2)},${(height / 2)})`);

		const arc = d3.arc()
  		.innerRadius(radius -donutWidth)
  		.outerRadius(radius);

  		const pie = d3.pie()
  		.value( d => d.points)
  		.sort(null)

  		const path = svg.selectAll('path')
		.data(pie(dataset))
		.enter()
		.append('path')
		.attr('d', arc)
		.attr('fill', (d, i) =>
		     color(d.data.house)
		  );


		const legend = svg.selectAll('.legend')
	   .data(color.domain())
	   .enter()
	   .append('g')
	   .attr('class', 'legend')
	   .attr('transform', (d, i) => {
	    const height = legendRectSize + legendSpacing;
	    const offset =  height * color.domain().length / 2;
	    const horz = -2 * legendRectSize;
	    const vert = i * height - offset;
	    return `translate(${horz},${vert})`;
	  });

	  legend.append('rect')
	  .attr('width', legendRectSize)
	  .attr('height', legendRectSize)
	  .style('fill', color)
	  .style('stroke', color);

	  legend.append('text')
	  .attr('class', 'text')
	  .attr('x', legendRectSize + legendSpacing)
	  .attr('y', legendRectSize - legendSpacing)
	  .text((d) => d);

	}
	render(){
		console.log(this.state.dataset)
		console.log(d3)
		return(
			<div>
				<h3>Check what is inside you!</h3>
				<div className = 'chart'>{this.makePie()}</div>
			</div>
		)
	}
}