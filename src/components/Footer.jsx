import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsLightning, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

function Footer({ darkMode }) {
  return (
    <footer className={`footer mt-auto py-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={4} className="mb-3 mb-md-0">
            <div className="d-flex align-items-center mb-2">
              <BsLightning className="me-2" />
              <span className="footer-brand">CurrentBuzz</span>
            </div>
            <p className="mb-0 text-muted">
              Stay updated with the latest news from around the world.
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h5 className="mb-3">Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">General</a></li>
              <li><a href="#" className="footer-link">Technology</a></li>
              <li><a href="#" className="footer-link">Business</a></li>
              <li><a href="#" className="footer-link">Entertainment</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="mb-3">Connect With Us</h5>
            <div className="social-links">
              <a href="#" className="me-3 footer-link">
                <BsGithub size={20} />
              </a>
              <a href="#" className="me-3 footer-link">
                <BsLinkedin size={20} />
              </a>
              <a href="#" className="footer-link">
                <BsTwitter size={20} />
              </a>
            </div>
            <p className="mt-2 mb-0 text-muted">
              © {new Date().getFullYear()} CurrentBuzz. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;