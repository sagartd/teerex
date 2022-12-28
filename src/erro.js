import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Erro = () => {
  return (
    <WErro>
      <h2>404</h2> <h3>Page Not Exist</h3>
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/603/676/original/under-construction-page-tiny-people-error-404-illustration-free-vector.jpg"
          alt="constuc"
        />
      </div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
    </WErro>
  );
};

export default Erro;

const WErro = styled.section`
  margin-top: 9rem;
  height: 55rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 40rem;
    padding: 2rem;
  }

  h2 {
    color: red;
  }

  button {
    padding: 0.5rem 2rem;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: aqua;
    text-shadow: 1px 1px 4px black;
    box-shadow: 1px 1px 5px grey;
    color: #fff;
    border: none;
    &:hover {
      outline-style: solid;
      outline-color: #0fff50;
    }
  }

  @media (max-width: 450px) {
    img {
      padding: 5rem;
    }
  }
`;
