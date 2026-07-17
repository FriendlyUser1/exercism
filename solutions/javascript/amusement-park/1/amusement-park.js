export function createVisitor(name, age, ticketId) {
	return { name: name, age: age, ticketId: ticketId };
}

export function revokeTicket(visitor) {
	visitor.ticketId = null;
	return visitor;
}

export function ticketStatus(tickets, ticketId) {
	return tickets[ticketId]
		? `sold to ${tickets[ticketId]}`
		: tickets[ticketId] === undefined
		? "unknown ticket id"
		: "not sold";
}

export function simpleTicketStatus(tickets, ticketId) {
	return tickets[ticketId] ?? "invalid ticket !!!";
}

export function gtcVersion(visitor) {
	return visitor.gtc?.version;
}
