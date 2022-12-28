import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { ConsumeFltrContext } from "../../context/fltrContext";

const ByGender = ({ genderData }) => {
  const {
    hndlUpdate,
    filters: { gender },
  } = ConsumeFltrContext();
  return (
    <>
      {genderData.map((elm, idx) => {
        return (
          <InputGroup className="ms-3" key={idx}>
            <Form.Check
              inline
              name="gender"
              value={elm}
              type={"checkbox"}
              style={{ fontSize: "19px" }}
              onChange={hndlUpdate}
              checked={elm === gender ? true : false}
            />
            <Form.Check.Label
              style={{ fontSize: "13px", textTransform: "capitalize" }}
              className="pt-2"
            >
              {elm}
            </Form.Check.Label>
          </InputGroup>
        );
      })}
    </>
  );
};

export default ByGender;
