import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './services.css'
import Card1 from '../../assets/card1.svg';
import Card2 from '../../assets/card2.svg';
import Card3 from '../../assets/card3.svg';

const Services = () => {
  return (
    <section className="services" id="services">
      <Container>
        <Row>
          <Col md={12}>
            <h1 className="text-center">Our Services</h1>
          </Col>
        </Row>
        <Row>
          <Col className="flex-style" md={4}>
            <div className="card text-center" style={{ width: "18rem" }}>
              <img src={Card1} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Delivery
                  <br /> Services
                </p>
              </div>
            </div>
          </Col>
          <Col className="flex-style" md={4}>
            <div className="card text-center" style={{ width: "18rem" }}>
              <img src={Card2} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Online <br /> booking
                </p>
              </div>
            </div>
          </Col>
          <Col className="flex-style" md={4}>
            <div className="card text-center" style={{ width: "18rem" }}>
              <img src={Card3} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Catering <br /> services
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
