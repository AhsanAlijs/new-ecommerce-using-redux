import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home/Home";
import SingleProduct from "../../pages/single/SingleProduct";
import Cart from "../../pages/cart/Cart";
import Navbar from "../../components/navbar/Navbar";
import { useSelector } from "react-redux";

const Routers = () => {

  const cart = useSelector(state => state.cartItems.cartItems);
  
  return (
    <BrowserRouter>
      <Navbar item={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="single/:id" element={<SingleProduct />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
