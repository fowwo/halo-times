/**
 * A set of functions used to interact with and display time.
 * @author fowwo
 */

/**
 * Converts seconds into a stopwatch time format.
 * @param {Number} seconds - The number of seconds.
 * @returns A formatted string.
 */
function formatFromSeconds(seconds) {

	seconds = Math.max(seconds, 0); // Force non-negative
	return padZeros(Math.floor(seconds / 60 / 60), 2) + ":" + padZeros(Math.floor(seconds / 60 % 60), 2) + ":" + padZeros(Math.floor(seconds % 60), 2);

}

/**
 * Converts seconds into a stopwatch time format, detailing if it is positive or negative.
 * @param {Number} seconds - The number of seconds.
 * @returns A formatted string.
 */
function formatDelta(seconds) {

	if (seconds <= 0) {
		seconds *= -1;
		return "-" + formatFromSeconds(seconds);
	}
	return "+" + formatFromSeconds(seconds);

}

/**
 * Converts a formatted time into the number of seconds.
 * @param {String} time - A formatted time.
 * @returns {Number} The number of seconds.
 */
function formatToSeconds(time) {

	var split = time.trim().split(":");
    var parseSplit = [0, 0, 0];

	// Parse string
	var i = 0;
	for (i = 0; i < split.length && i < 3; i++) {
		let x = split[split.length - i - 1];
		if (isValidNumber(x)) {
			parseSplit[i] = Number.parseInt(+x);
		} else {
			console.warn("\"%s\" is not a valid time (\"%s\" is not a number).", time, split[i]);
		}
	}
	return parseSplit[0] + 60 * parseSplit[1] + 60 * 60 * parseSplit[2];

}

/**
 * Determines whether the time is in a valid format.
 * @param {String} time - A formatted time.
 * @returns {Boolean} True or false.
 */
function isValidTime(time) {

	if (time == null) {
		return false;
	}

	var split = time.trim().split(":");
	for (var i = 0; i < split.length && i < 3; i++) {
		if (!isValidNumber(split[split.length - i - 1])) {
			return false;
		}
	}
	return true;

}

/**
 * Determines whether the string is valid number.
 * @param {String} number - A string representation of a number.
 * @returns {Boolean} True or false.
 */
function isValidNumber(number) {

	if (Number.isNaN(+number) || number.trim() == "") {
		return false;
	}
	return true;

}

/**
 * Adds trailing zeros to the beginning of a number.
 * @param {Number | String} number - The number to be padded with zeros.
 * @param {Number} length - The maximum string length.
 * @returns The string padded with zeros.
 */
function padZeros(number, length) {

	var string = "" + number;
	while (string.length < length) {
		string = "0" + string;
	}
	return string;

}
