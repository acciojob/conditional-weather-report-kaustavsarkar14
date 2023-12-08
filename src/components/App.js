
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [temp, setTemp] = useState({ temperature: 25, conditions: "Sunny" })
  return (
    <div>
        {/* Do not remove the main div */}
        <p  >Temperature: <span style={{color:temp.temperature>20?"red":"blue"}}>{temp.temperature}</span></p>
        <p>Conditions: {temp.conditions}</p>
    </div>
  )
}

export default App
