import React from 'react';
import defaultImage from '../assets/news.jpg';  // Default image path

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div 
      style={{
        backgroundColor: '#212529',
        color: 'white',
        marginBottom: '15px',
        padding: '10px',
        borderRadius: '5px',
        maxWidth: '500px',
        height: '350px',  // Set a fixed height for the card
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Add box shadow
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        overflow: 'hidden',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
    >
      <img 
        src={src ? src : defaultImage}  // Use default image if src is null
        onError={(e) => { e.target.src = defaultImage; }}  // Fallback in case of a broken link
        alt="news"
        style={{ 
          width: '100%', 
          height: '200px',  // Fixed height for the image
          objectFit: 'cover', 
          borderRadius: '5px' 
        }}
      />
      <div style={{ height: 'calc(100% - 200px)', overflow: 'hidden' }}>
        <h5 
          style={{ 
            fontSize: '18px', 
            marginTop: '10px',
            whiteSpace: 'nowrap',  // Keep the title on one line
            overflow: 'hidden', 
            textOverflow: 'ellipsis',
          }}
        >
          {title ? title.slice(0, 50) : "No Title"}
        </h5>
        <p 
          style={{ 
            fontSize: '14px', 
            color: '#cccccc',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,  // Limit description to 3 lines
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description ? description.slice(0, 90) : "Description not available"}
        </p>
        <a 
  href={url} 
  style={{
    display: 'inline-block',
    marginTop: '10px',
    padding: '8px 12px',
    backgroundColor: '#333', // Changed to a dark gray shade
    color: 'white', // Text color is now white
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s, transform 0.3s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  }}
  target="_blank"
  rel="noopener noreferrer"
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#444'; // Changed to a slightly darker gray shade on hover
    e.currentTarget.style.transform = 'translateY(-2px)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#333'; // Reset to original background color
    e.currentTarget.style.transform = 'translateY(0)';
  }}
>
  Read More
</a>
      </div>
    </div>
  );
};

export default NewsItem;
