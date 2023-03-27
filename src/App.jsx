import React, {useState} from "react";
import './App.css'
import Chips from "./components/Chips"
import Card from "./components/Card"
import data from "./data.mjs"

function App() {
  const [item, setItem] = useState(data);
  const menuItems = [...new Set(data.map((val) => val.category))];
  const filterItem = (currentcat) => {
    const newItem = data.filter((newVal) => {
      return newVal.category === currentcat;
    });
    setItem(newItem);
  };

  return (
    <div className="App">
     <h1>Frontend Mentor Solutions</h1>
     <div>
      <Chips filterItem={filterItem} setItem={setItem} menuItems={menuItems} />
      <div className="container">
       <Card item={item} /> 
      </div>
     </div>
    </div>
  )
}

export default App
