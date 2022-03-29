import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './mobile.css'
import Yours from "./../../assets/yours.svg";
import Mobiles from "./../../assets/mobile.svg";
import Apple from "./../../assets/apple.svg";
import Android from "./../../assets/android.svg";
import { useTranslation } from "react-i18next";

const Mobile = () => {

  const { t, i18n } = useTranslation();
  
  return (
    <section className="mobile">
      <Container>
        <Row>
          <Col md={6}>
            <div>
              <p className="title"> {t("mobile.title")} </p>
            </div>
            <p className="paragraph">
              {t("mobile.subtitle.text1")} <i> {t("mobile.subtitle.word1")} </i>{" "}
              <span> {t("mobile.subtitle.text2")} </span>
              <i> {t("mobile.subtitle.word2")} </i>
              <span> {t("mobile.subtitle.text3")} </span>
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
          <Col md={6}>
            <img src={Mobiles} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mobile;
