import React from "react";
import styled from "styled-components";
import { FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";
import "../footer.css";

const Footer = () => {
  return (
    <Efoot>
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3 className="heading">TeeRex</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos!
            </p>
          </div>
          <div className="footer-subscribe">
            <h3>Send You Queries</h3>
            <form action="#">
              <input type="email" placeholder="Enter Email" />
              <input type="submit" value="Send" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call us</h3>
            <a href="tel:9970557827">+91 45785454</a>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@teerex, {new Date().getFullYear()} All Rights Reserve</p>
            <div>
              <p>Privacy Policy</p>
              <p>Terms and Condition</p>
            </div>
          </div>
        </div>
      </footer>
    </Efoot>
  );
};

export default Footer;

const Efoot = styled.footer`
 
  footer {
    padding: 2rem 0;
    background-color: #444851;
    h3 {
      color: #ffffff;
      margin-bottom: 2.4rem;
    }
    p {
      color: white;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid white;
        .icons {
          color: white;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 2rem;
    hr {
      margin-bottom: 2rem;
      color: #ffffff;
      height: 0.1px;
    }
  }
  @media (max-width: 450px) {
    footer {
      padding: 2rem 0 2rem 0;
    }
    .footer-bottom--section {
      padding-top: 2rem;
    }
  }

  a {
    color: #fff;
    font-size: 10px;
  }
`;
