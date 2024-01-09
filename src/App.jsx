import React,{ useState } from "react";

function App() {
 
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  }
return (
   <div>
    <h1>Count Function</h1>
    <div className="increment">
      <button onClick={handleIncrement}> + </button> &nbsp;&nbsp;&nbsp;
      <span> {count} </span> &nbsp;&nbsp;&nbsp;
      <button onClick={handleDecrement}> - </button>
    </div>
   </div>
)
}

export default App
