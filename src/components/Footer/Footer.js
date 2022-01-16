import React from "react";
import { Col, Row, Container } from "react-bootstrap";

// import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer-design d-flex align-items-center " style={{ backgroundColor: "#eadede", height: "11vh"}}>
      <Container>
        <Row>
          <Col >
            <div className="d-flex justify-content-center">
              <a href="/">
                <i className="fab fa-instagram mx-2 fs-4"></i>
              </a>
              <a href="/">
                <i className="fab fa-telegram mx-2 fs-4"></i>
              </a>
              <a href="/">
                <i className="fab fa-facebook mx-2 fs-4"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter mx-2 fs-4"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
