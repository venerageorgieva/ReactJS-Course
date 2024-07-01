import React, { useState } from "react";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const onClick = () => {
    setNumbers((oldState) => oldState.slice(1));
  };

  return (
    <div>
      <ul>
        {numbers.map((number, index) => (
          <li data-key={index} key={index}>{number * 2}</li>
        ))}
      </ul>
      <button onClick={onClick}>Remove</button>
    </div>
  );
}

export default App;
