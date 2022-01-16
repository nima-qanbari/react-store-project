import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart"
import Acoount from "./pages/Acoount";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3" dir="rtl">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product /> } />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Acoount />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
