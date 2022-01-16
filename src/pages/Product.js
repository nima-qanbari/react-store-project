import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Row, Image, Button, ListGroup } from "react-bootstrap";
import { productDetailAction } from "../action/productAction";

const Product = () => {
  const { id } = useParams();
  const history = useNavigate()
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);

  const { loading, product } = productDetail;
  
 
  useEffect(() => {
    dispatch(productDetailAction(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    history(`/cart/${id}`)
  }

  return (
    <div dir="ltr">
      {loading ? <h2>در حال دریافت محصول ...</h2> : 
             <Row className="shadow my-4 p-4 rounded">
             <Col md={6}>
               <Image src={product.image} fluid />
             </Col>
             <Col md={5} className="mt-5">
               <ListGroup variant="flush">
                 <ListGroup.Item as="h3">{product.name}</ListGroup.Item>
                 <ListGroup.Item as="h5">{product.price}</ListGroup.Item>
                 <ListGroup.Item as="p">{product.description}</ListGroup.Item>
               </ListGroup>
             </Col>
             <Col md={12} className="text-end">
               <Button 
               onClick={addToCartHandler}
               className="btn-block" 
               type="button">
                 افزودن به سبد خرید
               </Button>
             </Col>
           </Row> 
      }
    </div>
  );
};

export default Product;
