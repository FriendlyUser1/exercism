export const encode = (pt, rails) => {
	pt = pt.replaceAll(" ", "").split("");
	if (rails == 1) return pt.join("");
	let ct = "",
		bcounter = 0,
		binit = 2 * rails - 2;

	for (let offset = 0; offset < rails; offset++) {
		bcounter = 0;
		for (let letterpos = offset; letterpos < pt.length; letterpos) {
			ct += pt[letterpos];
			let between;
			for (let line = 0; line < rails; line++) {
				if (offset == (rails - 1) / 2) {
					between = binit / 2;
					break;
				}
				if (offset == line || offset == rails - (line + 1)) {
					if (rails >= 4 && line != 0) {
						let bfirst = binit - 2 * offset;
						between = [bfirst, binit - bfirst][bcounter % 2];
						bcounter++;
					} else between = binit;

					break;
				}
			}
			letterpos += between;
		}
	}
	return ct;
};

export const decode = (string, numberRails) => {
	if (!string || !numberRails) {
		console.log("invalid input");
		return "";
	}
	var div = 2 * (numberRails - 2) + 2,
		stringArr = string.split(""),
		len = parseInt(stringArr.length / div),
		remainder = stringArr.length % div,
		splitArr = [],
		tempArr = [],
		result = [];
	for (var i = 0; i < numberRails; i++) {
		splitArr.push(i == 0 || i == numberRails - 1 ? len : 2 * len);
	}
	if (remainder > numberRails) {
		splitArr = splitArr.map(function (num) {
			return num + 1;
		});
		remainder = remainder - numberRails;
		for (var j = numberRails - 2; j >= numberRails - remainder - 1; j--) {
			splitArr[j]++;
		}
	} else {
		for (var j = 0; j < remainder; j++) {
			splitArr[j]++;
		}
	}

	tempArr = splitArr.map(function (len) {
		var ans = stringArr.splice(0, len);
		return ans;
	});
	var float = 0,
		k = 0;

	function lineUp(isAdd) {
		if (k == string.length) {
			return;
		}
		result.push(tempArr[float].shift());
		k++;
		isAdd ? float++ : float--;
		if (float == numberRails) {
			float = float - 2;
			isAdd = false;
		}
		if (float == 0) {
			isAdd = true;
		}
		lineUp(isAdd);
	}

	lineUp(true);
	return result.join("");
};