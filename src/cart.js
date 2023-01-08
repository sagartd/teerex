import React from "react";
import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { GrClose, GrSubtract, GrAdd } from "react-icons/gr";
import "./cart.css";
import { ConsumeCartContext } from "./context/cartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { bag, removeItemBag, hndlQtyIncri, hndlQtyDecri, subtotal, shipping } =
    ConsumeCartContext();
  //console.log(bag)
  return (
    <WCart>
      <Container>
        <h1>My Bag</h1>
        {bag?.length > 0 ? (
          <Row>
            <Col lg={8} className="d-flex flex-column">
              {bag?.map((elm) => {
                return (
                  <div className="bag mb-5" key={elm.id}>
                    <figure className="pt-3">
                      <img src={elm.imageURL} alt={elm.name} />
                    </figure>
                    <p className="hide">{elm.name}</p>
                    <div>
                      <p style={{ fontWeight: 600, opacity: "50%" }}>
                        Quantity :
                      </p>
                      <ButtonGroup>
                        <Button
                          className={
                            elm.curQty === 1
                              ? "btn-light opacity-25 disabled"
                              : "btn-light"
                          }
                          onClick={() => hndlQtyDecri(elm)}
                        >
                          <GrSubtract style={{ fontSize: "17px" }} />
                        </Button>
                        <Button
                          className="btn-light"
                          style={{ fontSize: "17px" }}
                        >
                          {elm.curQty}
                        </Button>
                        <Button
                          className={
                            elm.quantity === elm.curQty
                              ? "btn-light opacity-25 disabled"
                              : "btn-light"
                          }
                          onClick={() => hndlQtyIncri(elm)}
                        >
                          <GrAdd style={{ fontSize: "17px" }} />
                        </Button>
                      </ButtonGroup>
                    </div>
                    <div className="d-flex flex-column" style={{width:"6.7rem"}}>
                      <p style={{ fontWeight: 600, opacity: "50%" }}>Price :</p>
                      <p>Rs. {elm.price * elm.curQty}</p>
                    </div>

                    <div>
                      <Button
                        className="btn-light"
                        onClick={() => removeItemBag(elm)}
                      >
                        <GrClose style={{ fontSize: "17px" }} />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </Col>
            <Col lg={4}>
              <div className="price p-5 mb-5">
                <div>
                  <h2>Order Details</h2>
                  <div className="p-5">
                    <p className="d-flex justify-content-between">
                      <span>Bag Total</span> <span>₹ {subtotal}</span>
                    </p>
                    <p className="d-flex justify-content-between text-secondary">
                      <span>Shipping</span>
                      <span>₹ {shipping}</span>
                    </p>
                    <hr />
                    <p
                      className="d-flex justify-content-between"
                      style={{ fontWeight: 600 }}
                    >
                      <span>Order Total</span>
                      <span>₹ {subtotal}</span>
                    </p>
                  </div>
                </div>

                <div className="d-grid shadow">
                  <Button className="butto">Procced To Shiping</Button>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <div className="d-flex flex-column align-items-center pt-5 mt-5 pb-5 mb-5">
            <h2>Your Bag is Empty</h2>
            <NavLink to={"/products"}>
              <Button className="btn-lg  mt-5 px-5 py-3 shadow-lg">
                Shop Now
              </Button>
            </NavLink>
          </div>
        )}
      </Container>
    </WCart>
  );
};

export default Cart;

const WCart = styled.section`
  padding-top: 10rem;
  padding-bottom: 12rem;
  display: flex;

  .bag {
    box-shadow: 0 0 3px -1px grey;
    height: 12rem;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    align-items: center;
    gap: 5px;

    img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      box-shadow: 0 0 5px -1px black;
      padding: 3px;
    }
  }

  .price {
    box-shadow: 0 0 4px 1px grey;
    height: 35rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 950px) {
    .hide {
      display: none;
    }
  }
`;
