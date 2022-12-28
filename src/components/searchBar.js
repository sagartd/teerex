import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ConsumeCartContext } from "../context/cartContext";

import { ConsumeFltrContext } from "../context/fltrContext";

const SearchBar = () => {
  const {
    hndlUpdate,
    filters: { search },
    fltrDispatch,
    isHide,
  } = ConsumeFltrContext();

  const { totalQty } = ConsumeCartContext();

  return (
    <InputGroup className="d-flex justify-content-end pb-5">
      <Link to="/cart">
        <Button className="btn-success disp position-relative h-100">
          <BsCart3 />
          {totalQty > 0 && (
            <span className="position-absolute top-0 start-0 cart-total-item translate-middle badge rounded-pill bg-danger">
              {totalQty}
            </span>
          )}
        </Button>
      </Link>
      <Form.Control
        type="search"
        placeholder="Search"
        className="p-3 me-1"
        aria-label="Search"
        name="search"
        value={search}
        onChange={hndlUpdate}
      />
      {isHide && (
        <Button
          className="btn-success disp"
          onClick={() => fltrDispatch({ type: "hide_filters", payload: "" })}
        >
          <FiFilter />
        </Button>
      )}
    </InputGroup>
  );
};

export default SearchBar;
