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
              {/* <img src={Yours} alt="" /> */}
              <p className='title'> {t('mobile.title')} </p>
            </div>
            <p className="paragraph">
              {t('mobile.subtitle')}
            </p>
            <p className='download'> {t('mobile.button')} </p>
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
