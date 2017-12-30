import React, {Component} from 'react'

class Gallery extends Component {
	render(){
		let missing = "https://upload.wikimedia.org/wikipedia/commons/4/47/Comic_image_missing.png"
		return(
			<div>
			{
				this.props.items.map ((item, index) => {
					return(
						<div key= {index} className="jumbotron flex-container">
						<h2 className="page-header">{item.volumeInfo.title}</h2>
						<a  href={item.volumeInfo.infoLink}>
						 <img src= {item.volumeInfo.imageLinks!==undefined ? item.volumeInfo.imageLinks.thumbnail : missing}/>
						</a>
						<h3>Summary:</h3>
						<p>{item.volumeInfo.description !==null? item.volumeInfo.description :"no summary" }</p>
						<div className="flex-buttons">
							<button className="btn btn-secondary">Published:{item.volumeInfo.publishedDate}</button>

							<button className="btn btn-secondary"> Page count: {item.volumeInfo.pageCount}</button>
						</div>
						<p className="flex-info">
							{item.volumeInfo.publisher}
						</p>
						</div>
						)
				})
			}
			</div>
			)
	}
}


export default Gallery;