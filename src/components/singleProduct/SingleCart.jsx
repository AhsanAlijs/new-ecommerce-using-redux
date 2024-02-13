import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../config/redux/reducer/cartSlice";
import Swal from "sweetalert2";

const SingleCart = ({ title, description, image, price, id }) => {
  // UseSelector
  const selector = useSelector((state) => state.cartItems.cartItems);

  // UseDispatch
  const dispatch = useDispatch();

  // Adding Product In Redux Cart
  const productAddToCart = () => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (selector.length === 0) {
          // Product Addedd to Redux cart
          dispatch(
            addToCart({
              title: res.data.title,
              price: res.data.price,
              description: res.data.description,
              image: res.data.image,
              id: res.data.id,
            })
          );

          // Sweet Alert
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product Added to Cart",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          let productAlreadyExist = false;

          // Checking Product Exist in Cart or Not
          selector.map((item) => {
            if (item.id === res.data.id) {
              productAlreadyExist = true;
            }
          });

          if (productAlreadyExist) {
            // Sweet Alert
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Product Already in Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            // // Product Addedd to Redux
            dispatch(
              addToCart({
                title: res.data.title,
                price: res.data.price,
                description: res.data.description,
                image: res.data.image,
                id: res.data.id,
              })
            );

            // Sweet Alert
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product Added to Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <h1>{price}$</h1>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={productAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
