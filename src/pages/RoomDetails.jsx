import React, { useEffect } from "react";

import roomData from "../assets/data/roomData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const RoomDetails = () => {
  const { slug } = useParams();

  const singleroomItem = roomData.find((item) => item.roomName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleroomItem]);

  return (
    <Helmet title={singleroomItem.roomName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleroomItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="room__info">
                <h2 className="section__title">{singleroomItem.roomName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${singleroomItem.price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleroomItem.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {singleroomItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    TV : {singleroomItem.Tv}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    WiFi : {singleroomItem.WiFi}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    Telephone : {singleroomItem.Telephone}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                ></div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default RoomDetails;
