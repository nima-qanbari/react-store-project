import React, { useEffect } from "react";
import { Col, Row, ListGroup, Image, Button} from "react-bootstrap";
import "./Cart.css";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { addTocart, removeFromCart } from "../action/cartAction";

const Cart = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (id) {
      dispatch(addTocart(id));
    }
  }, [dispatch, id]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  };
  return (
    <div>
      <h2>سبد خرید</h2>
      <Row className=" media mt-5 shadow  mx-auto rounded p-4">
        <Row>
          <Col md={12}>
            {cartItems.length === 0 ? (
              <p className="text-center text-danger">سبد خرید خالی است</p>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row className="d-flex align-items-sm-center">
                      <Col xs={3}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col xs={3}>{item.name}</Col>
                      <Col xs={3}>{item.price + "$"}</Col>
                      <Col xs={3}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          <i className="fa fa-trash text-danger"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
       
        </Row>
      </Row>
        <Row>
          <Col xs={4} className="mx-auto" >
                 
                    <ListGroup variant="flush mt-5 text-center">
                        <ListGroup.Item>
                        <h5 className="d-inline text-success"> مجموع: </h5> {cartItems.reduce((acc,curr) => acc + curr.price , 0) + "$"}  
                        </ListGroup.Item>
                    </ListGroup>
                  
          </Col>
        </Row>
    </div>
  );
};

export default Cart;
