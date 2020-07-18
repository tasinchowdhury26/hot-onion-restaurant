import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { FoodList } from './Components/FoodContext/FoodContext';
import Catagories from './Components/Catagories/Catagories';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <FoodList>
      <Header></Header>
      <Catagories></Catagories>
      <About></About>
    </FoodList>
    </div>
    )
  
}

export default App;
