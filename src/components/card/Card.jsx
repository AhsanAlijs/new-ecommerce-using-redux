import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, price, image, id }) => {
  // navigate
  const navigate = useNavigate();

  // change page Funstion Start
  const goSingle = () => {
    navigate(`/single/${id}`)
  };
  // change page Funstion End

  return (
    <div className="card w-96 glass">
      <figure>
        <img className="w-[30%]" src={image} alt="Product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title.slice(1, 27)}...</h2>
        <p>{description.slice(1, 30)}</p>
        <h5>${price}</h5>
        <div className="card-actions justify-end">
          <button onClick={goSingle} className="btn btn-primary" >Product Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
