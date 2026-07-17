// @ts-check

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
	let total = 0;
	for (let i = 0; i < birdsPerDay.length; i++) {
		total += birdsPerDay[i];
	}
	return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
	let total = 0;
	for (let i = week * 7 - 7; i < week * 7; i++) {
		total += birdsPerDay[i];
	}
	return total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
	for (let i = 0; i < birdsPerDay.length; i++) {
		if (i % 2 === 0) {
			birdsPerDay[i] += 1;
		}
	}
	return birdsPerDay;
}
