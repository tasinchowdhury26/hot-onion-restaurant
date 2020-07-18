import React from "react";
import './Food.css';

const Food = ({image,name,slogan,price}) => {
  return (
    <div className='food'>
      <div>
        <img src={image} alt='foodPic' />
      </div>
      <h5>{name}</h5>
      <h6>{slogan}</h6>
      <h4>${price}</h4>
    </div>
  );
};

export default Food;
