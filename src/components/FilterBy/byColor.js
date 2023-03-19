import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { ConsumeFltrContext } from "../../context/fltrContext";

const ByColor = ({ coloData }) => {
  const [state, setState] = useState(coloData);

  const { fltrDispatch } = ConsumeFltrContext();

  const hndlColorCheck = (e) => {
    setState(
      state.map((elm) => {
        if (elm.color === e.target.value) {
          elm.isChecked = !elm.isChecked;
        }
        return elm;
      })
    );
    fltrDispatch({ type: "color_Filters", payload: state });
  };

  //console.log(state);

  // const hndlCheck = (e) => {
  //   if (e.target.checked) {
  //     setState([...state, e.target.value]);
  //   } else {
  //     setState(state.filter((item) => item !== e.target.value));
  //   }
  //   return fltrDispatch({ type: "color_Filters", payload: state });
  // };

  // useEffect(() => {
  //   fltrDispatch({ type: "color_Filters", payload: state });
  // }, [state]);

  return (
    <Row>
      {state.map((elm, idx) => {
        return (
          <Col lg={3} md={3} sm={3} xs={3} xl={3} className="ms-3" key={idx}>
            <InputGroup>
              <Form.Check
                inline
                name="color"
                value={elm.color}
                type="checkbox"
                checked={elm.isChecked}
                style={{ fontSize: "19px" }}
                onChange={hndlColorCheck}
                // checked={elm.color === color ? true : false}
              />
              <Form.Check.Label style={{ fontSize: "13px" }} className="pt-2">
                {elm.color}
              </Form.Check.Label>
            </InputGroup>
          </Col>
        );
      })}
    </Row>
  );
};

export default ByColor;
