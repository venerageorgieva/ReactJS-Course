import { useState } from "react";
export default function Counter(props) {
  const [count, setCount] = useState(0);

  const incrementClickHandler = () => {
    setCount(count + 1);
  };

  const clearCounterHandler = () => {
    setCount(0);
  };

//   if (count < 0) {
//     return (
// <h3>Invalid count!</h3>
// );
//   }

  return (
    <div>
      <h1>Counter</h1>

       {count < 0 
        ? <p>Invalid count!</p>
        : <p>Valid count!</p>   
    }

    {count == 0 && <p>Please start incrementing</p> }

      <p>Count: {count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={clearCounterHandler}>clear</button>
      <button onClick={incrementClickHandler}>+</button>
    </div>
  );
}
