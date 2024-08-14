import { useReducer } from "react";

import { counterReducer } from "../reducers/counterReducer.ts";

const Counter = () => {
	const [count, dispatch] = useReducer(counterReducer, 0); // Initialize state for the counter

	const increment = () => dispatch({ type: "increment" }); // Function to increment the counter

	const decrement = () => dispatch({ type: "decrement" }); // Function to decrement the counter

	const reset = () => dispatch({ type: "reset" }); // Function to reset the counter

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
