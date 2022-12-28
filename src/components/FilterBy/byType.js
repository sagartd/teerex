import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { ConsumeFltrContext } from "../../context/fltrContext";

const ByType = ({ typeData }) => {
  const {
    hndlUpdate,
    filters: { type },
  } = ConsumeFltrContext();
  return (
    <>
      {typeData.map((elm, idx) => {
        return (
          <InputGroup className="ms-3" key={idx}>
            <Form.Check
              inline
              name="type"
              value={elm}
              type={"checkbox"}
              style={{ fontSize: "19px" }}
              onChange={hndlUpdate}
              checked={elm === type ? true : false}
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

export default ByType;
