import { useState, useEffect } from "react";

export default function AdvancedCounter() {

    const [count, setCount] = useState(0);
    const [history, setHistory] = useState<number[]>([0]);
    const [step, setStep] = useState(1);
    const [loaded, setIsLoaded] = useState(false);
    const [msgsaveStatus, setMsgSaveStatus] = useState("Changes saved.");


    //   update current count and incremement history list 
    const increment = () => {
        const newValue = count + Number(step)
        setMsgSaveStatus("Saving to localStorage...");
        setCount(newValue);
        updateHistory(newValue)
    };

    //   update current count and decrement history list 
    const decrement = () => {
        const newValue = count - Number(step)
        setMsgSaveStatus("Saving to localStorage...");
        setCount(newValue);
        updateHistory(newValue)
    };

    //   reset  current count and history list

    const reset = () => {

        setCount(0);
        setHistory([0]);
        setMsgSaveStatus("Saving to localStorage...");
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

        // Display confirmation after 500 milliseconds
        const timer = setTimeout(() => {
            setMsgSaveStatus("Changes saved.");
        }, 500);

        // Clear timer 
        return () => clearTimeout(timer);

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


    // Handle keyboard events
    useEffect(() => {

        // Wait until localStorage data has loaded
        if (!loaded) return;

        const handleKeyDown = (event: KeyboardEvent) => {

            // Do not change the counter when the Step input is focused
            if (event.target instanceof HTMLInputElement) return;

            // ArrowUp increments the counter
            if (event.key === "ArrowUp") {
                event.preventDefault();
                increment();
            }

            // ArrowDown decrements the counter
            else if (event.key === "ArrowDown") {
                event.preventDefault();
                decrement();
            }
        };

        // Listen for keyboard events
        document.addEventListener("keydown", handleKeyDown);

        // Remove the listener when the component is updated or unmounted
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };

    }, [count, step, loaded]);

    return (
        <div className="container">
            <p>Counter</p>
            <div className="current-count">
                <p> Current Count  </p>
                <h2>{count}</h2>
            </div>

            <div className="buttons">
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
                <button className="reset-button" onClick={reset}>Reset</button>
            </div>

            <div className="step-container">
                <label htmlFor="Step" className="step-label"> Step Value: </label>

                <input
                    id="step"
                    type="number"
                    min="1"
                    value={step}
                    onChange={handleStepChange}
                />

                <p className="save-status">{msgsaveStatus}</p>
            </div>
            <div className="count-history">
                <p>Count History:</p>

                {/* display History List */}
                <ul>

                    {/* Display the history and show the dotted line only when the history contains items. */}
                    {history.map((count, indexArray) => (
                        <li key={indexArray}
                            className={history.length > 1 ? "history-item" : ""}>
                            {count}
                        </li>
                    ))}
                </ul>

            </div>
            <p className="keyboard-message">
                Use ArrowUp to increment and ArrowDown to decrement.
            </p>
        </div>
    );
}

