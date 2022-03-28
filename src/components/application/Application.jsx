import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Hum from '../../assets/hum.svg'
import './application.css'
import { useTranslation } from "react-i18next";

const Application = () => {
   const { t, i18n } = useTranslation();
  return (
    <section className="application">
      <Container>
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h1>{t("application.title")}</h1>
            <p>{t("application.subtitle")}</p>
            <div className="download">
              <Button> {t("application.button")} </Button>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-flex-end">
            <img src={Hum} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Application