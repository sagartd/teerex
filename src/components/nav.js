import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsCart3 } from "react-icons/bs";
import { ConsumeCartContext } from "../context/cartContext";

const Navbar = () => {
  const { totalQty } = ConsumeCartContext();
  const [hamMenu, sethamMenu] = useState(false);

  return (
    <WNav>
      <div className={hamMenu ? `active` : ""}>
        <ul className="navbar-list">
          {["", "home", "products"].map((elm, idx) => {
            return (
              <li key={idx}>
                <NavLink
                  to={`/${elm}`}
                  className="navbar-link"
                  onClick={() => sethamMenu(false)}
                >
                  {elm}
                </NavLink>
              </li>
            );
          })}
          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolly-link"
              onClick={() => sethamMenu(false)}
            >
              <BsCart3 className="cart-trolly" />
              {totalQty > 0 && (
                <span className="cart-total-item">{totalQty}</span>
              )}
            </NavLink>
          </li>
        </ul>
        <div className="mobile-nav-btn">
          <WHam>
            <button
              className={`${
                hamMenu
                  ? "ham active mobile-nav-icon close-outline"
                  : "ham mobile-nav-icon "
              }`}
              name={hamMenu ? "close-outline" : "menu-outline"}
              onClick={() => sethamMenu(!hamMenu)}
            ></button>
          </WHam>
        </div>
      </div>
    </WNav>
  );
};

export default Navbar;

const WNav = styled.nav`
  .navbar-list {
    display: flex;
    padding-top: 1.5rem;
    gap: 4.8rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.7rem;
        font-weight: 500;
        text-transform: capitalize;
        color: black;
        transition: color 0.3 linear;
      }
      &:hover,
      &:active {
        color: blue;
      }
    }
  }

  .mobile-nav-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolly-link {
    position: relative;

    .cart-trolly {
      position: relative;
      width: 3rem;
      font-size: 3.5rem;
    }
    .cart-total-item {
      width: 1.9rem;
      height: 1.9rem;
      position: absolute;
      background-color: #e52b50;
      color: white;
      border-radius: 50%;
      display: grid;
      font-size: 1rem;
      place-items: center;
      padding-top: 2px;
      top: -8%;
      left: 65%;
      box-shadow: -2px 5px 15px #e32636;
    }
  }

  @media (max-width: 450px) {
    .mobile-nav-btn {
      display: inline-block;
      z-index: -9999;
      border: black;

      .mobile-nav-icon {
        font-size: 2.4rem;
        color: black;
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 28%;
      right: 6%;
      color: #000;
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
    }

    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;

      .nabar-link {
        font-size: 2rem;
      }
    }

    .cart-trolly-link {
      position: relative;

      .cart-trolly {
        position: relative;
        width: 4rem;
      }

      .cart-total-item {
        width: 2.2rem;
        height: 2.2rem;
        font-size: 1.4rem;
      }
    }
  }
`;

const WHam = styled.div`
  padding-top: 2rem;
  .ham {
    display: flex;
    outline: none;
    height: 20px;
    width: 15px;
    border: 0px;
    padding-right: 4rem;
    background: transparent;
    transition: all 250ms ease-out;
    cursor: pointer;

    &:before,
    &:after {
      content: "";
      width: 30px;
      height: 1.5px;
      position: absolute;
      background: #1a1a1a;
      transition: all 250ms ease-out;
      will-change: transform;
    }

    &:before {
      transform: translateY(-4px);
    }

    &:after {
      transform: translateY(3px);
    }

    &.active:before {
      transform: translateY(0) rotate(45deg);
    }

    &.active:after {
      transform: translateY(0) rotate(-45deg);
    }
  }
`;
