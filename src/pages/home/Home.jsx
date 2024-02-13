import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card/Card";

const Home = () => {
  // Item Arry
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=9")
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((rej) => {
        console.log(rej);
      });
    console.log(allProducts);
  }, []);

  return (
    <>
      <div className="flex  justify-center flex-wrap gap-[30px] mt-[50px]">
        {allProducts.length > 0 ? (
          allProducts.map((item, index) => {
            return (
              <Card
              key={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                price={item.price}
                id={item.id}
              />
            );
          })
        ) : (
          <h1>Loading..</h1>
        )}
      </div>
    </>
  );
};

export default Home;
