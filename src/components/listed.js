import React from "react";
import styled from "styled-components";
import { ConsumeContext } from "../context/context";
import SearchBar from "./searchBar";
import Cards from "../card";
import { Row } from "react-bootstrap";
import Loading from "../loading";
import { ConsumeFltrContext } from "../context/fltrContext";

const Listed = () => {
  const { isLoading } = ConsumeContext();
  const { filterdTees } = ConsumeFltrContext();

  return (
    <WListed>
      <div>
        <SearchBar />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <Row>
          {filterdTees?.map((elm) => (
            <Cards key={elm.id} {...elm} />
          ))}
        </Row>
      )}
    </WListed>
  );
};

export default Listed;

const WListed = styled.section`
  width: 100%;

  button {
    font-size: 15px;
    padding: 0 1.5rem;
  }

  input {
    font-size: 15px;
    padding: 5px 15px !important;
  }

  img {
    height: 22rem;
  }

  .hov-eff {
    transition: transform 0.2s;
    cursor: pointer;
  }

  .brdr {
    border-radius: 10px;
  }

  .hov-eff:hover {
    transform: scale(1.02);
    box-shadow: 0 0 5px -1px lime;
  }

  @media (min-width: 950px) {
    .disp {
      display: none;
    }
  }

  @media (max-width: 950px) {
    img {
      height: 32rem;
    }
    /* .w-75{
      width: 100% !important;
    } */
  }
`;
