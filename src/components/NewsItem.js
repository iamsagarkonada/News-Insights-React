import React from 'react'

const NewsItem=(props)=>{
    let {title,description,imageUrl, newsUrl,author,date}=props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2023/06/27/1600x900/iPhone_photo_cutouts_1687865513054_1687865517240.png":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on {date}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Know More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem