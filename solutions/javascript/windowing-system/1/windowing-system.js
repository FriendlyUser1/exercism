// @ts-check

/**
 * @param {number | undefined} [width]
 * @param {number | undefined} [height]
 */
export function Size(width, height) {
	this.width = width ?? 80;
	this.height = height ?? 60;
}

Size.prototype.resize = function (
	/** @type {number} */ newWidth,
	/** @type {number} */ newHeight
) {
	this.width = newWidth;
	this.height = newHeight;
};

/**
 * @param {number | undefined} [x]
 * @param {number | undefined} [y]
 */
export function Position(x, y) {
	this.x = x ?? 0;
	this.y = y ?? 0;
}

Position.prototype.move = function (
	/** @type {number} */ newX,
	/** @type {number} */ newY
) {
	this.x = newX;
	this.y = newY;
};

export class ProgramWindow {
	constructor() {
		this.screenSize = new Size(800, 600);
		this.size = new Size();
		this.position = new Position();
	}

	/**
	 * @param {number} val
	 * @param {number} lower
	 * @param {string[]} len
	 * @param {boolean} [resize]
	 */
	checkVal(val, lower, len, resize = false) {
		if (val < lower) return lower;
		if (resize && val + this.position[len[1]] > this.screenSize[len[0]])
			return this.screenSize[len[0]] - this.position[len[1]];
		if (val + this.size[len[0]] > this.screenSize[len[0]])
			return this.screenSize[len[0]] - this.size[len[0]];

		return val;
	}

	/**
	 * @param {Size} newSize
	 */
	resize(newSize) {
		this.size.width = this.checkVal(newSize.width, 1, ["width", "x"], true);
		this.size.height = this.checkVal(newSize.height, 1, ["height", "y"], true);
	}

	/**
	 * @param {Position} newPosition
	 */
	move(newPosition) {
		this.position.x = this.checkVal(newPosition.x, 0, ["width", "x"]);
		this.position.y = this.checkVal(newPosition.y, 0, ["height", "y"]);
	}
}

/**
 * @param {ProgramWindow} newWindow
 */
export function changeWindow(newWindow) {
	newWindow.size.width = 400;
	newWindow.size.height = 300;
	newWindow.position.x = 100;
	newWindow.position.y = 150;
	return newWindow;
}
