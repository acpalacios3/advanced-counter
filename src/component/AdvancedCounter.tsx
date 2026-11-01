import { useState, useEffect } from "react";

export default function AdvancedCounter() {

    const [count, setCount] = useState(0);
    const [history, setHistory] = useState<number[]>([0]);
    const [step, setStep] = useState(1);
    const [loaded, setIsLoaded] = useState(false);

    //   update current count and incremement history list 
    const increment = () => {
        const newValue = count + Number(step)
        setCount(newValue);
        updateHistory(newValue)
    };

    //   update current count and decrement history list 
    const decrement = () => {
        const newValue = count - Number(step)
        setCount(newValue);
        updateHistory(newValue)
    };

    //   reset  current count and history list

    const reset = () => {

        setCount(0);
        setHistory([0]);
    };

    // updates the history array by adding the new counter value
    function updateHistory(newValue: number) {
        setHistory((previousHistory) =>
            [...previousHistory, newValue,]
        );
    }

    // Handles changes in the Step Value input
    function handleStepChange(e) {
        setStep(Number(e.target.value));
    }

    // store values in the browser storage when the counter and the history change
    useEffect(() => {

        // Loaded controls when we can save, not whether information exists in the browser.
        if (!loaded) return;

        const counterData = {
            count: count,
            history: history
        };
        // JSON.stringify(): converts the JavaScript object into a text (string), because localStorage stores values as text in the browser's storage
        localStorage.setItem("counterData", JSON.stringify(counterData));

    }, [count, history, loaded]);


    // retrieve information from the browser storage
    useEffect(() => {
        const savedData = localStorage.getItem("counterData");

        if (savedData) {
            const counterData = JSON.parse(savedData);


            console.log("get data ====>", counterData);
            console.log("count====>", counterData.count);
            console.log("history===>", counterData.history);

            setCount(counterData.count);
            setHistory(counterData.history);
        }
        setIsLoaded(true);
    }, []);

    return (
        <div>

            <div>
                <p> Current Count  </p>
                <h2>{count}</h2>
            </div>

            <div>
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
            </div>

            <div>
                <label htmlFor="Step"> Step Value</label>

                <input id="step"
                    type="number"
                    min="1"
                    value={step}
                    onChange={handleStepChange}

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

