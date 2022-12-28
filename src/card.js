import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import styled from "styled-components";
import { ConsumeCartContext } from "./context/cartContext";

const Cards = (elm) => {
  const { cartDispatch, bag, removeItemBag } = ConsumeCartContext();
  const { id, imageURL, price, color, name } = elm;

  return (
    <Col lg={4} md={6} sm={6} key={id} className="p-5 pb-5 ">
      <Card className="hov-eff rounded-4">
        <Card.Img variant="top" src={imageURL} className="rounded-4 p-2" />
        <Card.Body>
          <Card.Title className="d-flex justify-content-end">
            <Span className="" style={{ backgroundColor: color }}></Span>
            <p>{name}</p>
          </Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Text>Rs.{price}</Card.Text>
            {bag?.some((bagElm) => bagElm.id === id) ? (
              <Button variant="danger" onClick={() => removeItemBag(elm)}>
                Remove
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() =>
                  cartDispatch({ type: "add_to_bag", payload: elm })
                }
              >
                BuyNow
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;

const Span = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  /* margin-top: 5px;
  margin-right: 5px; */
  box-shadow: 0 0 7px gray;
  opacity: 75%;
`;
