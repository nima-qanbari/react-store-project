import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="py-3 my-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>

      <Card.Body className="d-flex align-items-center justify-content-between ">
        <Link to={`/product/${product._id}`} className="text-decoration-none mt-3">
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text as="h3">{product.price + " $"}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
