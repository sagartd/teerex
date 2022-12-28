import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { ConsumeFltrContext } from "../../context/fltrContext";

const ByColor = ({ coloData }) => {
  const {
    hndlUpdate,
    filters: { color },
  } = ConsumeFltrContext();

  return (
    <Row>
      {coloData.map((elm, idx) => {
        return (
          <Col lg={3} md={3} sm={3} xs={3} xl={3} className="ms-3" key={idx}>
            <InputGroup>
              <Form.Check
                inline
                name="color"
                value={elm}
                type={"radio"}
                style={{ fontSize: "19px" }}
                onChange={hndlUpdate}
                checked={elm === color ? true : false}
              />
              <Form.Check.Label style={{ fontSize: "13px" }} className="pt-2">
                {elm}
              </Form.Check.Label>
            </InputGroup>
          </Col>
        );
      })}
    </Row>
  );
};

export default ByColor;
