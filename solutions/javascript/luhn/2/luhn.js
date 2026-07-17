export const valid = (number) => {
	let numArr = number.toString().replaceAll(" ", "");
	if (numArr.length <= 1 || parseInt(numArr) == undefined) return false;
	let total = 0;
	for (let i = 0; i < numArr.length; i++) {
		if (i % 2 === numArr.length % 2) {
			let twice = 2 * parseInt(numArr[i]);
			total += twice > 9 ? twice - 9 : twice;
		} else total += parseInt(numArr[i]);
	}
	if (total % 10 === 0) return true;
	return false;
};
