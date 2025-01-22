import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Form, Button, FormCheck } from 'react-bootstrap';
import { BsSun, BsMoon, BsLightning } from 'react-icons/bs';
import NewsGrid from './components/NewsGrid';
import Footer from './components/Footer';
import './App.css';

const apiKey = import.meta.env.VITE_API_KEY;

console.log("API Key:", apiKey);

const categories = ['General', 'Technology', 'Sports', 'Business', 'Entertainment'];

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('General');
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  const fetchNews = async (cat) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${cat.toLowerCase()}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      if (data.status === 'ok') {
        setArticles(data.articles);
      } else {
        console.error('API Error:', data.message);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`
        );
        const data = await response.json();
        if (data.status === 'ok') {
          setArticles(data.articles);
        }
      } catch (error) {
        console.error('Error searching news:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`app d-flex flex-column min-vh-100 ${darkMode ? 'dark-mode' : ''}`}>
      <Navbar 
        bg={darkMode ? 'dark' : 'light'} 
        variant={darkMode ? 'dark' : 'light'} 
        expand="lg" 
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <BsLightning className="me-2" />
            <span>CurrentBuzz</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {categories.map((cat) => (
                <Nav.Link
                  key={cat}
                  active={category === cat}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </Nav.Link>
              ))}
            </Nav>
            <Form className="d-flex align-items-center search-form" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search news..."
                className="me-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="primary" type="submit" className="search-btn">
                Search
              </Button>
            </Form>
            <Form.Check
              type="switch"
              id="dark-mode-switch"
              checked={darkMode}
              onChange={toggleDarkMode}
              label={
                darkMode ? 
                <BsMoon className="dark-mode-icon" /> : 
                <BsSun className="dark-mode-icon" />
              }
              className="ms-3"
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4 mb-5 flex-grow-1">
        <h2 className={`category-header ${darkMode ? 'text-light' : 'text-dark'}`}>
          {searchTerm ? `Search Results for "${searchTerm}"` : `${category} News`}
        </h2>
        <NewsGrid articles={articles} darkMode={darkMode} loading={loading} />
      </Container>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;

