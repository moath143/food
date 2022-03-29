import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Hum from "../../assets/hum.svg";
import Apple from "../../assets/apple.svg";
import Android from "../../assets/android.svg";
import "./application.css";
import { useTranslation } from "react-i18next";

const Application = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="application">
      <Container>
        <Row>
          <Col md={6} className="d-flex flex-column justify-content-center">
            <h1>{t("application.title")}</h1>
            <p>
              {t("application.subtitle")} <span>{t("application.span")}</span>{" "}
            </p>
            <div className="download">
              <a>
                <img src={Apple} alt="" />
              </a>
              <a>
                <img src={Android} alt="" />
              </a>
            </div>
          </Col>
          <Col md={6} className="d-flex justify-content-flex-end">
            <img src={Hum} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Application;
