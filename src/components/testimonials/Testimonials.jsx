import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stars from "../../assets/stars.svg";
import Person from "../../assets/person.png";
import "./testimonial.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimonials = () => {
  return (
    <section className="testimonial" id="testimonials">
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col className="col-md-8 text-center">
            <div className="stars">
              <img src={Stars} alt="" />
            </div>
            <p className="text">
              You are one of the best sites and applications And applications
              <br />
              through which you can book a private chef for your party
              <br /> You can order the food you want, and through my experience
              with it, I advise the collective to subscribe to it
            </p>
            <Slider {...settings}>
              <div className="item">
                <div className="person">
                  <img src={Person} alt="" />
                </div>
                <div className="info">
                  <p>Jone Doe</p>
                  <p>this is description</p>
                </div>
              </div>
              <div className="item">
                <div className="person">
                  <img src={Person} alt="" />
                </div>
                <div className="info">
                  <p>Jone Doe</p>
                  <p>this is description</p>
                </div>
              </div>
              <div className="item">
                <div className="person">
                  <img src={Person} alt="" />
                </div>
                <div className="info">
                  <p>Jone Doe</p>
                  <p>this is description</p>
                </div>
              </div>
              <div className="item">
                <div className="person">
                  <img src={Person} alt="" />
                </div>
                <div className="info">
                  <p>Jone Doe</p>
                  <p>this is description</p>
                </div>
              </div>
              <div className="item">
                <div className="person">
                  <img src={Person} alt="" />
                </div>
                <div className="info">
                  <p>Jone Doe</p>
                  <p>this is description</p>
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
