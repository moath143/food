import React from 'react'
import './payment.css'
import { Container, Row, Col } from 'react-bootstrap'
import Steps from '../../assets/steps.svg'

const Payment = () => {
  return (
    <section className="payment">
      <Container>
        <Row>
          <Col md={12}>
            <h1>Shipping and payment</h1>
            <img src={Steps} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Payment