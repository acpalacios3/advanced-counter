## React Counter with useEffect##

**Description**


Advanced counter application. This project manages multiple state dependencies and implements side effects using the `useEffect` hook. The goal is to solidify your understanding of `useState` and `useEffect`.

**Technologies Used**

1. React: Used to build the user interface and manage the component lifecycle.
2. JavaScript: Handles counter operations, keyboard events, and data manipulation.
3. CSS: Used to style the counter interface, buttons, input fields, and history list.
4. Browser Local Storage: Stores counter data so the information remains available after refreshing the page.


**Features**

1. Counter Functionality

Increment the counter using the Increment button.
Decrement the counter using the Decrement button.
Display the current counter value.
Use a custom step value to control how much the counter increases or decreases.

2. History Tracking

Maintains an array containing previous counter values.
Adds a new value to the history every time the counter changes.
Displays the counter history in a scrollable list.
Resets the history when the Reset button is pressed.

3. Auto-Save Functionality

Uses useEffect to save the current counter value and history to localStorage.
Uses JSON.stringify() to convert the counter data into a JSON string.
Retrieves previously saved information when the component loads.
Displays a saving status message to inform users when changes are being saved.

4. Keyboard Event Listeners

Press ArrowUp to increment the counter.
Press ArrowDown to decrement the counter.

useState

count: Stores the current counter value.
history: Maintains the array of previous counter values.
step: Stores the custom increment and decrement value.
loaded: Indicates when previously saved data has been loaded.
msgsaveStatus: Controls the message displayed during the saving process.

useEffect

Save Data: Monitors changes to the counter and history, saves the information to local storage, and manages the saving status timer.
Load Data: Retrieves previously saved counter information from local storage when the component mounts.
Keyboard Events: Registers keyboard event listeners to handle the ArrowUp and ArrowDown keys and removes them during cleanup.


**How to Run the Application**

1. Install the project dependencies:
npm install

2. Start the development server:
npm run dev

3. Open the local URL provided by Vite in your browser.

