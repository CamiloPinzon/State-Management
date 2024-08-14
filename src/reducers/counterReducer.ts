export type counterActonTypes =
	| { type: "increment" }
	| { type: "decrement" }
	| { type: "reset" }; //defines the possible actions the reducer can handle.

export const counterReducer = (state = 0, action: counterActonTypes) => {
	switch (action.type) {
		case "increment":
			return state + 1;
		case "decrement":
			return state - 1;
		case "reset":
			return 0;
		default:
			throw new Error("Unknown action type");
	}
}; //reducer function that you export from this file.
