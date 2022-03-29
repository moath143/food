import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stars from "../../assets/stars.svg";
import Person from "../../assets/person.png";
import "./testimonial.css";
import { useTranslation } from "react-i18next";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonials = () => {
  const { t, i18n } = useTranslation();
    const rtlFunc = () => {
      return i18n.dir() === "rtl" ? "right" : "left";
    };
  return (
    <section className="testimonial" id="testimonials">
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col className="col-md-8 text-center">
            <div className="stars">
              <img src={Stars} alt="" />
            </div>
            <p style={{ textAlign: `${rtlFunc()}` }} className="text">
              {t("testimonials.paragraph")}
            </p>
            <Slider {...settings}>
              <div className="item">
                <div className="person">
                  <img src={Person} alt="" />
                </div>
                <div className="info">
                  <p> {t('testimonials.name')} </p>
                  <p> {t('testimonials.title')} </p>
                </div>
              </div>
              <div className="item">
                <div className="person">
                  <img src={Person} alt="" />
                </div>
                <div className="info">
                  <p> {t('testimonials.name')} </p>
                  <p> {t('testimonials.title')} </p>
                </div>
              </div>
              <div className="item">
                <div className="person">
                  <img src={Person} alt="" />
                </div>
                <div className="info">
                  <p> {t('testimonials.name')} </p>
                  <p> {t('testimonials.title')} </p>
                </div>
              </div>
              <div className="item">
                <div className="person">
                  <img src={Person} alt="" />
                </div>
                <div className="info">
                  <p> {t('testimonials.name')} </p>
                  <p> {t('testimonials.title')} </p>
                </div>
              </div>
              <div className="item">
                <div className="person">
                  <img src={Person} alt="" />
                </div>
                <div className="info">
                  <p> {t('testimonials.name')} </p>
                  <p> {t('testimonials.title')} </p>
                </div>
              </div>
            </Slider>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
