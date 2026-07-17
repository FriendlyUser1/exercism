export function needsLicense(kind) {
	return ["car", "truck"].includes(kind);
}

export function chooseVehicle(option1, option2) {
	return [option1, option2].sort()[0] + " is clearly the better choice.";
}

export function calculateResellPrice(originalPrice, age) {
	let adjustedPrice;
	if (age < 3) {
		adjustedPrice = originalPrice * 0.8;
	} else if (age <= 10) {
		adjustedPrice = originalPrice * 0.7;
	} else {
		adjustedPrice = originalPrice * 0.5;
	}
	return adjustedPrice;
}
