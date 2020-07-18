import React from "react";
import "./Catagories.css";
import Food from "../Food/Food";
import { useContext } from "react";
import { FoodContext } from "../FoodContext/FoodContext";

const Catagories = () => {
  const [foods, setFood] = useContext(FoodContext);
  console.log(Object.values(foods));
  return (
    <div>
      <div>
        <nav>
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
        </nav>
      </div>
      <div className="foodArea">
        {foods.map((food) => (
          <Food
            image={food.image}
            name={food.name}
            slogan={food.slogan}
            price={food.price}
          ></Food>
        ))}
      </div>
    </div>
  );
};

export default Catagories;
