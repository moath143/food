import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Hurt from '../../assets/hurt.svg'
import './footer.css'
import { useTranslation } from "react-i18next";



const Footer = () => {


  const { t, i18n } = useTranslation();
  

  return (
    <footer>
      <Container>
        <Row>
          <Col md={12}>
            <div className="footer-content text-center">
              <img src={Hurt} alt="Hurt" />
              <p> {t('footer')} </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer