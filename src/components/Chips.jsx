import React from "react"
import data from "../data.mjs"
import "./style.css"

const Chips = ({filterItem, setItem, menuItems}) => {

  return (
    <div className="chips__group">
    {menuItems.map((val, id) => {
      return (
            <button
              key={id}
              onClick={() => filterItem(val)}
              className={
                val === 'NEWBIE'
                  ? 'chips__NEWBIE'
                  : val === 'JUNIOR'
                  ? 'chips__JUNIOR'
                  : val === 'INTERMEDIATE'
                  ? 'chips__INTERMEDIATE'
                  : val === 'ADVANCED'
                  ? 'chips__ADVANCED'
                  : val === 'GURU'
                  ? 'chips__GURU'
                  : 'chips'
              }
            >
              {val}
            </button>
      );
    })}
    <button onClick={() => setItem(data)} className="chips">ALL</button>
    </div>
  )
}

export default Chips