import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/room-item.css";

const RoomItem = (props) => {
  const { imgUrl, Tv, roomName, Telephone, WiFi, price } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="room__item">
        <div className="room__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="room__item-content mt-4">
          <h4 className="section__title text-center">{roomName}</h4>
          <h6 className="rent__price text-center mt-">
            ${price}.00 <span>/ Day</span>
          </h6>

          <div className="room__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">TV : {Tv}</span>
            <span className=" d-flex align-items-center gap-1">
              Phone : {Telephone}
            </span>
            <span className=" d-flex align-items-center gap-1">
              WiFi : {WiFi}
            </span>
          </div>

          <button className=" w-50 room__item-btn room__btn-rent">
            <Link to={`/rooms/${roomName}`}>Book</Link>
          </button>

          <button className=" w-50 room__item-btn room__btn-details">
            <Link to={`/rooms/${roomName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default RoomItem;
