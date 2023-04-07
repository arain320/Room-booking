import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/room-img/piknic.webp";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <h1 className="text-center  mb-5">About Us</h1>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h2 className="section__title">
                Discover a hotel that defines a new dimension of luxury.
              </h2>
              <p className="section__description">
                Some things that matter to guests in hotel descriptions are the
                location of the hotel, the amenities offered, and how close it
                is to attractions. Other important factors can include reviews
                from other guests, the price of the room, and whether or not
                breakfast is included.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Free Wi-Fi Available
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Meetings & Special
                  Events
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Best price Guarantee
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Free Cancellation
                  Anytime
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
