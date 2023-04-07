import React from "react";
import "../../styles/find-room-form.css";
import "../../styles/find-room-form.css";
import { Form, FormGroup } from "reactstrap";

const FindRoomForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="From " required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="To " required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Stay time" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Days spent"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          <select>
            <option value="ac">AC Room</option>
            <option value="non-ac">Non AC Room</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__room-btn">Find Room</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindRoomForm;
