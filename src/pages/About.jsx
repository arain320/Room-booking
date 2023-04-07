import React from "react";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import familyImg from "../assets/all-images/room-img/family.webp";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={familyImg} alt="" className="w-100 " />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Find Your Home Away from Home: Book the Perfect Room with Us
                </h2>

                <p className="section__description">
                  We understand that traveling can be stressful, and finding the
                  right place to stay can often be the most daunting task.
                  That's why we've made it our mission to simplify the process
                  for you. With our website, you can easily search and compare
                  rooms from a variety of hotels, resorts, and vacation rentals
                  around the world.
                </p>

                <p className="section__description">
                  Our goal is to ensure that every customer has a seamless
                  booking experience, from start to finish. We strive to provide
                  accurate and up-to-date information about each property,
                  including photos, amenities, and customer reviews, so that you
                  can make an informed decision.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
