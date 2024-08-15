

import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      
      .then(data => {
        console.log(data);
        setArticles(data.articles);
    });
  }, [category]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Latest <span className="badge bg-danger">News</span></h2>
      <div className="row">
        {articles.map((news, index) => (
          <div key={index} className="col-md-4">
            <NewsItem title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
