import React from 'react';
import NewsItem from './NewsItem';

const NewsList = ({ articles }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-between' }}>
      {articles.map((article, index) => (
        <NewsItem 
          key={index} 
          title={article.title} 
          description={article.description}
          src={article.urlToImage}
          url={article.url}
        />
      ))}
    </div>
  );
};

export default NewsList;
