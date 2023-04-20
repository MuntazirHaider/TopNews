import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  // articles is headlines in API
  const [articles, setArticles] = useState([]);
  // loading is loading spinner
  const [loading, setLoading] = useState(true);
  // page is the curr page number of news
  const [page, setPage] = useState(1);
  // total number of articles in API 
  const [totalResults, setTotalResults] = useState(0);
  
  // capitalize function capitalize the string 
  const capitalize = (string) => {
    return string.toUpperCase();
  }

  // capitalize function capitalize first letter of the string 
  const capitalizeFirst = (string) => {
    // eslint-disable-next-line
    let newString = string[0].toUpperCase()+string.substring(1,string.length);
    return newString; 
  }

  // updateNews runs at once and fetch the data
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  // useEffect runs when we change the category
  useEffect(() => {
    document.title = props.category==='general' ? "TopNews - HOME" :`TopNews - ${capitalize(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, [])
 
  // fetchMoreData function fetch more news and make the infinite scroll
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));;
    setTotalResults(parsedData.totalResults)
  }

  return (
    <>
      {/* Header which change according to category */}
      <h2 className='my-10 text-center' style={{ margin: "35px 0px", marginTop: "120px" }}>Today's <span className="badge bg-danger">Exclusive Headlines</span>{props.category==='general' ? "":` In ${capitalizeFirst(props.category)}`}</h2>
      {loading && <Spinner />}
      {/* infiniteScroll is a npm package */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}>
        <div className="container">
          <div className="row">
            {/* articles.map(e) iterate through the articles and send the props in newsItem*/}
            {articles.map((e) => {
              return <div className="col-md-4" key={e.url}>
                <NewsItem title={e.title ? e.title : ""} description={e.description ? e.description : ""} urlToImage={e.urlToImage ? e.urlToImage : "	https://cdn.ndtv.com/common/images/ogndtv.png"} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}
News.propType = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News; 