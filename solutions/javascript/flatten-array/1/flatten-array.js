export const flatten = (arr, resArr = []) => {
	for (let i = 0; i < arr.length; i++) {
		let n = arr[i];
		if (n === null || n === undefined) continue;

		if (n.length > 0) resArr.push(...flatten(n));
		else if (isNaN(n.length)) resArr.push(n);
	}

	return resArr;
};
