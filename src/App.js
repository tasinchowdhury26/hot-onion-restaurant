import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { FoodList } from './FoodContext/FoodContext';
import Catagories from './Components/Catagories/Catagories';

function App() {
  return (
    <FoodList>
      <div className="App">
        <Header></Header>
      <Catagories></Catagories>
      </div>
    </FoodList>
    )
  
}

export default App;
