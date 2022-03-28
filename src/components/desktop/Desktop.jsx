import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import True from "../../assets/true.svg";
import DesktopPic from "../../assets/desktop.svg";
import "./desktop.css";
import { useTranslation } from "react-i18next";



const Desktop = () => {


  const { t, i18n } = useTranslation();
  

  return (
    <section className="desktop">
      <Container>
        <Row>
          <Col md={6}>
            <p>{t("desktop.title")}</p>
            <p>{t("desktop.subtitle")}</p>
            <ul>
              <li>
                <img src={True} alt="" />
                <span> {t("desktop.list.one")} </span>
              </li>
              <li>
                <img src={True} alt="" />
                <span>{t("desktop.list.two")}</span>
              </li>
              <li>
                <img src={True} alt="" />
                <span>{t("desktop.list.three")}</span>
              </li>
              <li>
                <img src={True} alt="" />
                <span>{t("desktop.list.four")}</span>
              </li>
            </ul>
            <p>{t("desktop.hint")}</p>
          </Col>
          <Col md={6}>
            <img src={DesktopPic} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Desktop;
