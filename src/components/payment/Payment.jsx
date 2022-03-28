import React from 'react'
import './payment.css'
import { Container, Row, Col } from 'react-bootstrap'
import Steps from '../../assets/stepsar.svg'
import Stepsen from '../../assets/stepsen.svg'
import { useTranslation } from "react-i18next";

const Payment = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="payment" id="shiping">
      <Container>
        <Row>
          <Col md={12}>
            <h1>Shipping and payment</h1>
            <img
              src={
                i18n.dir() === "rtl"
                  ? Steps
                  : i18n.dir() === "ltr"
                  ? Stepsen
                  : ""
              }
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Payment