import React from "react"
import data from "../data.mjs"
import "./style.css"

const Chips = ({filterItem, setItem, menuItems}) => {

  return (
    <div>
    {menuItems.map((val, id) => {
      return (
        <button key={id} onClick={() => filterItem(val)} className="chips">{val}</button>
      )
    })}
    <button onClick={() => setItem(data)} className="chips">ALL</button>
    </div>
  )
}

export default Chips