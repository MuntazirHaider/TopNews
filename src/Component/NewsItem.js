import React from 'react'

const NewsItem = (props) => {
  let { title, description, urlToImage, newsUrl, author, date, source } = props;
  return (

    <div className="card my-4" >
      <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zindex: '1' }}>{source}</span>
      <img src={urlToImage == null ? "./defaultimg" : urlToImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title} </h5>
        <p className="card-text">
          {description}
        </p>
        <p className="card-text">
          <small className="text-muted">By {author == null ? " Unknown " : author} updated {new Date(date).toGMTString()} ago</small>
        </p>
        <a href={newsUrl} target="_blank" className="btn btn-sm btn-danger">
          Know More
        </a>
      </div>
    </div>
  )
}


export default NewsItem