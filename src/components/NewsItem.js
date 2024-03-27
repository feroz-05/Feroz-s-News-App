import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
   let {title, desc, imageUrl, url} = this.props;
    return (
      <>
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" width={400} height={150} alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={url} className="btn btn-warning">Show More</a>
        </div>
        </div>
      </>
    )
  }
}
