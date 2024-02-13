import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleCart from "../../components/singleProduct/SingleCart";
import axios from "axios";

const SingleProduct = () => {
  const params = useParams();
  const [allProducts, setAllProducts] = useState(null);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        setAllProducts(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        {allProducts ? (
          <SingleCart
            title={allProducts.title}
            description={allProducts.description}
            price={allProducts.price}
            image={allProducts.image}
          />
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
