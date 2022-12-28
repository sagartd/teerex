import React from "react";
import { FormLabel } from "react-bootstrap";

import FormRange from "react-bootstrap/esm/FormRange";
import { ConsumeFltrContext } from "../../context/fltrContext";

const ByPrice = () => {
  const {
    hndlUpdate,
    filters: { price, minPrice, maxPrice },
  } = ConsumeFltrContext();

  return (
    <>
      <FormLabel>Rs. {price}</FormLabel>
      <FormRange
        min={minPrice}
        max={maxPrice}
        name="price"
        value={price}
        onChange={hndlUpdate}
      />

      {/* {priceData.map((elm, idx) => {
        return (
          <InputGroup className="ms-3" key={idx}>
            <Form.Check
              inline
              name="group1"
              type={"checkbox"}
              style={{ fontSize: "19px" }}
            />
            <Form.Check.Label
              style={{ fontSize: "13px", textTransform: "capitalize" }}
              className="pt-2"
            >
              {elm}
            </Form.Check.Label>
          </InputGroup>
        );
      })} */}
    </>
  );
};

export default ByPrice;
