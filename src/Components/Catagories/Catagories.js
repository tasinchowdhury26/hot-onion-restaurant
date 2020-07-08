import React from "react";
import "./Catagories.css";
import Food from "./Food/Food";
import { useContext } from "react";
import { FoodContext, FoodList } from "../../FoodContext/FoodContext";

const Catagories = () => {
  const [foods,setFood] = useContext(FoodContext);
  return (
    <div>
      <nav>
        <h4>Breakfast</h4>
        <h4>Lunch</h4>
        <h4>Dinner</h4>
      </nav>
      {
          foods.map(food => <Food img={food.img} name={food.name} slogan={food.slogan} price={food.price}></Food>)
      }
    </div>
  );
};

export default Catagories;
