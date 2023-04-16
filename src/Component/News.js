import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=45057524a572444c955dfeab164fcd85&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100);
  }

  useEffect(() => {
    updateNews();
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=45057524a572444c955dfeab164fcd85&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  return (

    <>
      <h2 className='my-10 text-center' style={{ margin: "35px 0px", marginTop: "120px" }}>Today's <span className="badge bg-danger">Exclusive Headlines</span></h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}>
        <div className="container">
          <div className="row">

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

export default News 