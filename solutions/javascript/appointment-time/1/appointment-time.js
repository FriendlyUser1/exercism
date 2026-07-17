// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
    if (now === undefined) return new Date();
    const nowDate = new Date(now);
    return new Date(nowDate.setDate(nowDate.getDate() + days));
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
    return appointmentDate.toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
    const ts = new Date(timestamp);
    return {
        year: ts.getFullYear(), month: ts.getMonth(), date: ts.getDate(), hour: ts.getHours(), minute: ts.getMinutes()
    }

}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */

export function updateAppointment(timestamp, options) {
    const ts = new Date(timestamp);
    const newTs = new Date(options["year"] ?? ts.getFullYear(), options["month"] ?? ts.getMonth(), options["date"] ?? ts.getDate(), options["hour"] ?? ts.getHours(), options["minute"] ?? ts.getMinutes())
    return {
        year: newTs.getFullYear(),
        month: newTs.getMonth(),
        date: newTs.getDate(),
        hour: newTs.getHours(),
        minute: newTs.getMinutes()
    }
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
    return Math.round(Math.abs(new Date(timestampA) - new Date(timestampB)) / 1000)
}

/**
 * Check the appointment time is valid
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
    return new Date(currentTimestamp) < new Date(appointmentTimestamp)
}
