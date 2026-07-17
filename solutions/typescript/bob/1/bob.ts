export function hey(message: string): string {
	message = message.trim();
	let shouting = /[A-z]/g.test(message) && message.toUpperCase() === message;
	let question = message.slice(-1) === "?";
	return shouting && question
		? "Calm down, I know what I'm doing!"
		: shouting
		? "Whoa, chill out!"
		: question
		? "Sure."
		: message === ""
		? "Fine. Be that way!"
		: "Whatever.";
}
