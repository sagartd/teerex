import React from "react";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";
import ByColor from "./FilterBy/byColor";
import ByGender from "./FilterBy/byGender";
import ByPrice from "./FilterBy/byPrice";
import ByType from "./FilterBy/byType";
import { ConsumeFltrContext } from "../context/fltrContext";
import { GrClose } from "react-icons/gr";

const Filter = () => {
  const { allTShirts, fltrDispatch, isHide } = ConsumeFltrContext();

  const getData = (data, byCategory) => {
    let setData = data.map((elm) => {
      return elm[byCategory];
    });
    // if (byCategory === "price") {
    //   setData = setData.sort((a, b) => a - b);
    // }
    return [...new Set(setData)];
  };

  const coloData = getData(allTShirts, "color");
  const genderData = getData(allTShirts, "gender");
  const typeData = getData(allTShirts, "type");

  return (
    <WFilter className={isHide}>
      <Form className="d-flex flex-column">
        <div className="hide">
          <Button
            className="btn-light ms-auto d-flex justify-content-center"
            style={{ width: "35px" }}
            onClick={() =>
              fltrDispatch({ type: "hide_filters", payload: "hidden" })
            }
          >
            <GrClose style={{ fontSize: "20px" }} />
          </Button>
        </div>
        <Form.Group className="mb-5">
          <h4>Colour</h4>
          <ByColor coloData={coloData} />
        </Form.Group>

        <Form.Group className="mb-5">
          <h4>Gender</h4>
          <ByGender genderData={genderData} />
        </Form.Group>

        <Form.Group className="mb-5">
          <h4>Type</h4>
          <ByType typeData={typeData} />
        </Form.Group>

        <Form.Group className="mb-5">
          <h4>Price</h4>
          <ByPrice />
        </Form.Group>
        <Button
          className="shadow-lg"
          onClick={() => fltrDispatch({ type: "reset_filters" })}
        >
          Reset
        </Button>
      </Form>
    </WFilter>
  );
};

export default Filter;

const WFilter = styled.section`
  height: 65rem;
  width: 25%;
  border-radius: 1rem;
  box-shadow: 0 0 10px -3px grey;
  padding: 2rem;
  margin-bottom: 2rem;

  h4 {
    font-weight: 600;
  }

  @media (max-width: 950px) {
    width: 100%;
    height: 69rem;

    button label,
    h4 {
      font-size: 13px;
    }
  }

  @media (min-width: 950px) {
    .hide {
      display: none;
    }
  }
`;
