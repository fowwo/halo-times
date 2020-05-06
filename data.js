/**
 * A set of functions used to load and display data.
 * @author fowwo
 */

var games = {};
fetch("games.json")
	.then(r => r.json())
	.then(data => {
		games = data;
	});

/**
 * Reads a game's information and updates the background and content in the table.
 * @param {String} game - "ce", "2", "3", "odst", "reach", or "4"
 */
function loadGame(game) {

	const heading = document.getElementById("heading");
	const table = document.getElementById("time-table");

	if (games[game]) {
		heading.innerHTML = games[game].title;
		document.body.style.backgroundImage = "url('" + games[game].background + "')";
		for (var i = table.rows.length; i > 1; i--) {
			table.deleteRow(-1);
		}

		var row;
		var cell;
		var totalPersonalBest = 0;
		var totalPar = 0;
		var totalParDelta = 0;
		var totalThreeHour = 0;
		var totalThreeHourDelta = 0;
		var displayTotal = true;

		var threeHourScale = 0;
		for (var i = 0; i < games[game].missions.length; i++) {
			let mission = games[game].missions[i];
			threeHourScale += mission.par;
		}
		threeHourScale = 10800 / threeHourScale;

		for (var i = 0; i < games[game].missions.length; i++) {
			let mission = games[game].missions[i];

			row = document.createElement("tr");

			cell = document.createElement("td");
			cell.style = "text-align: left;";
			cell.innerHTML = mission.title;
			row.appendChild(cell);

			cell = document.createElement("td");
			if (mission.personalBest == -1) {
				cell.innerHTML = "--:--:--";
				cell.style = "text-align: center;color: #cdf5;";
				displayTotal = false;
			} else {
				cell.innerHTML = formatFromSeconds(mission.personalBest);
				cell.style = "text-align: center;";
				totalPersonalBest += mission.personalBest;
			}
			row.appendChild(cell);

			cell = document.createElement("td");
			cell.style = "text-align: center;";
			cell.innerHTML = formatFromSeconds(mission.par);
			row.appendChild(cell);
			totalPar += mission.par;

			var delta = mission.personalBest - mission.par;
			cell = document.createElement("td");
			if (mission.personalBest == -1) {
				cell.innerHTML = "--:--:--";
				cell.style = "text-align: center;color: #cdf5;";
			} else {
				if (delta > 0) {
					cell.style = "text-align: center;color: #f00;text-shadow: 0 0 10px #f00;";
				} else {
					cell.style = "text-align: center;color: #0f0;text-shadow: 0 0 10px #0f0;";
				}
				cell.innerHTML = formatDelta(delta);
			}
			row.appendChild(cell);
			totalParDelta += delta;

			cell = document.createElement("td");
			cell.style = "text-align: center;";
			cell.innerHTML = formatFromSeconds(mission.par * threeHourScale);
			row.appendChild(cell);
			totalThreeHour += Math.floor(mission.par * threeHourScale);

			delta = mission.personalBest - Math.floor(mission.par * threeHourScale);
			cell = document.createElement("td");
			if (mission.personalBest == -1) {
				cell.innerHTML = "--:--:--";
				cell.style = "text-align: center;color: #cdf5;";
			} else {
				if (delta > 0) {
					cell.style = "text-align: center;color: #f00;text-shadow: 0 0 10px #f00;";
				} else {
					cell.style = "text-align: center;color: #0f0;text-shadow: 0 0 10px #0f0;";
				}
				cell.innerHTML = formatDelta(delta);
			}
			row.appendChild(cell);
			totalThreeHourDelta += delta;

			row.onclick = () => {
				let result = prompt("What would you like to set your " + mission.title + " time to?");
				if (result != null) {
					result = result.trim();
					if (result == "") {
						if (confirm("Do you want to clear your personal best time on " + mission.title + "?") == true) {
							mission.personalBest = -1;
							loadGame(game);
						}
					} else if (!isValidTime(result)) {
						alert("\"" + result + "\" is not a valid time.");
					} else {
						result = formatFromSeconds(formatToSeconds(result));
						if (confirm("Do you want to set your personal best time on " + mission.title + " to " + result + "?") == true) {
							mission.personalBest = formatToSeconds(result);
							loadGame(game);
						}
					}
				}
			};

			table.appendChild(row);
		}

		row = document.createElement("tr");

		cell = document.createElement("th");
		cell.style = "text-align: center;";
		cell.innerHTML = "Total";
		row.appendChild(cell);

		cell = document.createElement("th");
		if (displayTotal) {
			cell.style = "text-align: center;";
			cell.innerHTML = formatFromSeconds(totalPersonalBest);
		} else {
			cell.style = "text-align: center;color: #cdf5;";
			cell.innerHTML = "--:--:--";
		}
		row.appendChild(cell);

		cell = document.createElement("th");
		cell.style = "text-align: center;";
		cell.innerHTML = formatFromSeconds(totalPar);
		row.appendChild(cell);

		cell = document.createElement("th");
		if (displayTotal) {
			if (totalParDelta > 0) {
				cell.style = "text-align: center;color: #f00;text-shadow: 0 0 10px #f00;";
			} else {
				cell.style = "text-align: center;color: #0f0;text-shadow: 0 0 10px #0f0;";
			}
			cell.innerHTML = formatDelta(totalParDelta);
		} else {
			cell.style = "text-align: center;color: #cdf5;";
			cell.innerHTML = "--:--:--";
		}
		row.appendChild(cell);

		cell = document.createElement("th");
		cell.style = "text-align: center;";
		cell.innerHTML = formatFromSeconds(totalThreeHour);
		row.appendChild(cell);

		cell = document.createElement("th");
		if (displayTotal) {
			if (totalThreeHourDelta > 0) {
				cell.style = "text-align: center;color: #f00;text-shadow: 0 0 10px #f00;";
			} else {
				cell.style = "text-align: center;color: #0f0;text-shadow: 0 0 10px #0f0;";
			}
			cell.innerHTML = formatDelta(totalThreeHourDelta);
		} else {
			cell.style = "text-align: center;color: #cdf5;";
			cell.innerHTML = "--:--:--";
		}
		row.appendChild(cell);

		table.appendChild(row);

	} else {
		console.error("Failed to load game \"%s\" (this game does not exist; the object \"games\" does not have this property).", game);
	}

}
