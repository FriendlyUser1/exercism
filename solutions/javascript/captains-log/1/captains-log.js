// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
    const min = 1000,
        max = 10000;
    return `NCC-${Math.floor(Math.random() * (max - min) + min)}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
    const min = 41000.0,
        max = 42000.0;
    return Math.random() * (max - min) + min;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
	const classes = "DHJKLMNRTY".split("");
	return classes[Math.floor(Math.random() * classes.length)];
}
