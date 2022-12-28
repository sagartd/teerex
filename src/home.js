import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <EHome className="bgc">
      <NavLink to="/products">
        <Button className="shadow">Shop Now</Button>
      </NavLink>
    </EHome>
  );
};

export default Home;

const EHome = styled.div`

  height: 75rem;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 25rem;
    height: 5rem;
    font-size: 19px;
    text-shadow: 2px 2px 5px #363836;
  }
`;
