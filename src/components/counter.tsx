import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0); // State for the counter

	const increment = () => setCount(prevCount => prevCount + 1); // Function to increment the counter

	const decrement = () => setCount(prevCount => prevCount - 1); // Function to decrement the counter

	const reset = () => setCount(0); // Function to reset the counter

	return (
		<div>
			<h2>Counter App</h2>
			<p>Count: {count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default Counter;
