import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Acoount = () => {
  return (
    <Container>
      <section className="w-100 my-5 d-flex justify-content-center">
        <Form className="w-50 shadow px-5 py-3 rounded">
          <Form.Group controlId="form.Name">
            <Form.Label>نام</Form.Label>
            <Form.Control type="text" placeholder="نام" />
          </Form.Group>
          <Form.Group controlId="form.Email">
            <Form.Label>ایمیل</Form.Label>
            <Form.Control type="email" placeholder="ایمیل" />
          </Form.Group>
          <Form.Group controlId="form.Password">
            <Form.Label>رمز</Form.Label>
            <Form.Control type="password" placeholder="رمز" />
          </Form.Group>
          <Button className="my-4" type="button" >ورود</Button>
        </Form>
      </section>
    </Container>
  );
};

export default Acoount;
