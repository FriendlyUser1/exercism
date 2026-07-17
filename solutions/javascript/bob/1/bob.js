export const hey = (message) => {
	message = message.trim();
	let yell = message.toUpperCase() === message,
		question = message.split("").pop() === "?";

	return message === ""
		? "Fine. Be that way!"
		: message.match(/([A-Za-z])/g) === null
		? question
			? "Sure."
			: "Whatever."
		: yell && question
		? "Calm down, I know what I'm doing!"
		: yell
		? "Whoa, chill out!"
		: question
		? "Sure."
		: "Whatever.";
};
