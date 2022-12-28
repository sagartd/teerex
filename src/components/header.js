import React from "react";
import styled from "styled-components";
import Navbar from "./nav";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <WHeader>
      <NavLink to="/" className="logo">TeeRex</NavLink>
      <Navbar />
    </WHeader>
  );
};

export default Header;

const WHeader = styled.header`
  padding: 0 4.8rem;
  height: 7rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  border-bottom: 1px solid rgba(236, 236, 236, 1);

  @media (max-width: 450px) {
    padding: 0 3.2rem;
  }
`;

