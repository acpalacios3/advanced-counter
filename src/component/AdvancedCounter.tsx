  import { useState } from "react";

export default function AdvancedCounter(){


  const [count, setCount] = useState(0);

  const increment =() => {
      setCount((prevCount) => prevCount + 1);

  };
  const decrement =() => {
      setCount((prevCount) => prevCount - 1);

  };

  const reset =() => {
      setCount((prevCount) => 0);

  };

   return (
  <div>
    
    <h2>  Counter  </h2>
    <p>{count}</p>
    <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick= {reset}>Reset</button>
       
    </div>
    
   <div>

    <input type="number"
                min="1"
                
                // onChange=
        />
   </div>
 </div>
    
    
);
}

