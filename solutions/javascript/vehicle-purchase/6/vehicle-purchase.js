export function needsLicense(kind) {
	return ["car", "truck"].includes(kind);
}

export function chooseVehicle(option1, option2) {
	return [option1, option2].sort()[0] + " is clearly the better choice.";
}

export function calculateResellPrice(originalPrice, age) {
	return originalPrice * (age < 3 ? 0.8 : age <= 10 ? 0.7 : 0.5);
}
