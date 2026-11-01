  import { useState } from "react";

export default function AdvancedCounter(){


  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([0]);


//   update current count and incremement history list 
  const increment =() => {
      const  newValue = count + 1
      setCount(newValue);
      updateHistory(newValue)

  };

  //   update current count and decrement history list 
  const decrement =() => {
      const  newValue = count - 1
      setCount(newValue);
      updateHistory(newValue)

  };

//   reset  current count and history list

  const reset =() => {
      setCount(0);
      setHistory([0]);

  };

  function updateHistory(newValue: number) {
  setHistory((previousHistory) => 
    [ ...previousHistory, newValue,]
    );
}

   return (
  <div>

    <div>
        <p> Current Count  </p>
        <h2>{count}</h2>
    </div>

    <div>
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
        <button onClick= {reset}>Reset</button>
    </div>

    
   <div>
    <label htmlFor="Step"> Step Value</label>

    <input id="step"
          type="number"
          min="1"
               
        />
   </div>
<div>
    
    {/* display History List */}
     <ul>
    {history.map((count, indexArray) => (
        <li key={indexArray}>
        {count}
        </li>
    ))}
</ul>
   

</div>


 </div>
    
    
);
}

