import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './hero.css'
import Apple from '../../assets/apple.svg'
import Android from "../../assets/android.svg";
import HeroPiza from '../../assets/hero.svg'
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const rtlFunc = () => {
    return i18n.dir() === 'rtl' ? 'right' : 'left'

  }
  
  return (
    <section className="hero" id='home'>
      <Container>
        <Row>
          <Col md={6} className='d-flex flex-column justify-content-center'>
            <p style={{ textAlign: `${rtlFunc()}` }}> {t("hero.subtitle")} </p>
            <h1 style={{ textAlign: `${rtlFunc()}` }}>{t("hero.title")} </h1>
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
            <img src={HeroPiza} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero