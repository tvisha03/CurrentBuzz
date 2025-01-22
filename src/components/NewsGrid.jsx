import React from 'react';
import { Row, Col, Card, Spinner } from 'react-bootstrap';

function NewsGrid({ articles = [], darkMode, loading }) {
  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  // Default image for articles without images
  const defaultImage = {
    technology: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60',
    business: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&auto=format&fit=crop&q=60',
    entertainment: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=800&auto=format&fit=crop&q=60',
    general: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&auto=format&fit=crop&q=60'
  };

  const getDefaultImage = (article) => {
    const category = article.category?.toLowerCase() || 'general';
    return defaultImage[category] || defaultImage.general;
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!articles.length) {
    return (
      <div className={`text-center p-5 ${darkMode ? 'text-light' : 'text-dark'}`}>
        <h3>No articles found</h3>
        <p>Try adjusting your search or category selection</p>
      </div>
    );
  }

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {articles.map((article, idx) => (
        <Col key={idx}>
          <Card 
            className={`news-card h-100 ${darkMode ? 'bg-dark text-light' : ''}`}
            onClick={() => window.open(article.url, '_blank')}
          >
            <div className="card-img-wrapper">
              <Card.Img 
                variant="top" 
                src={article.urlToImage || getDefaultImage(article)}
                alt={article.title || 'News article image'}
                onError={(e) => {
                  e.target.src = getDefaultImage(article);
                }}
              />
            </div>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="card-title-fixed-height">
                {truncateText(article.title, 100)}
              </Card.Title>
              <Card.Text className="card-text-fixed-height">
                {truncateText(article.description, 150) || 'Click to read more about this story.'}
              </Card.Text>
              <div className="mt-auto">
                <div className="d-flex justify-content-between align-items-center text-muted">
                  <small className={darkMode ? 'text-light' : 'text-muted'}>
                    {new Date(article.publishedAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </small>
                  <small className={`${darkMode ? 'text-light' : 'text-muted'} fw-bold`}>
                    {article.source.name}
                  </small>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default NewsGrid;