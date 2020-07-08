import React from "react";

const Food = ({img,name,slogan,price}) => {
  return (
    <div>
      <img src={img} alt="" />
      <h4>{name}</h4>
      <h5>{slogan}</h5>
      <h3>${price}</h3>
    </div>
  );
};

export default Food;
