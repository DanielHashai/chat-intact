import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";
function Home() {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center "
      >
        <div className="temp">
          <h1>Welcome To Chat-Intact</h1>
          <p>Chat App Let's You Connect With The World</p>
          <LinkContainer to="/login">
            <Button variant="primary">Get Started <i className="fas fa-comments home-message-icon"> </i></Button>
            
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg">
      </Col>
    </Row>
  );
}

export default Home;
