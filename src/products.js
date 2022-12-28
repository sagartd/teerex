import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Filter from "./components/filter";
import Listed from "./components/listed";
//import { ConsumeContext } from "./context/context";

const Products = ({ data, isLoading, dispatch, hndlColor }) => {
  return (
    <Container>
      <WProducts>
        <Filter data={data} hndlColor={hndlColor} />
        {isLoading ? (
          <div>
            <div className="spinner-border text-primary"></div>
          </div>
        ) : (
          <Listed data={data} dispatch={dispatch} />
        )}
      </WProducts>
    </Container>
  );
};

export default Products;

const WProducts = styled.section`
  padding-top: 10rem;
  display: flex;
  gap: 5rem;

  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 950px) {
    .hidden{
      display: none;
    }
  }

  
`;
