import React from 'react';

const NewsItem = (props) => {
  // receiving props
  let { title, description, urlToImage, newsUrl, author, date, source } = props;
  return (

    <div className="card my-4" >
      {/* Adding source of the news */}
      <div style={{display:'flex',justifyContent:'flex-end',right:'0',position:'absolute'}}>
      <span className="badge rounded-pill bg-danger">{source}</span>
      </div>
      
      {/* Displpay image,title,description,date which received by props*/}
      <img src={urlToImage ? urlToImage : "	https://cdn.ndtv.com/common/images/ogndtv.png"} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title} </h5>
        <p className="card-text">
          {description}
        </p>
        <p className="card-text">
          <small className="text-muted">By {author == null ? " Unknown " : author} updated {new Date(date).toGMTString()} ago</small>
        </p>
        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-danger">
          Know More
        </a>
      </div>
    </div>
  )
}


export default NewsItem;