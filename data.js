/**
 * A set of functions used to load and display data.
 * @author fowwo
 */

/**
 * An object containing all of the games and each game's title, background url, and missions.
 * Each mission has a title, par time, and personal best time.
 */
var games = {
	ce: {
		title: "Halo: Combat Evolved",
		background: "https://steamcommunity-a.akamaihd.net/economy/profilebackground/items/976730/b125227fa238e2d7c82c6b167bc721bbb52c52ad.jpg",
		missions: [
			{
				title: "The Pillar of Autumn",
				par: 900,
				personalBest: -1
			},
			{
				title: "Halo",
				par: 1200,
				personalBest: -1
			},
			{
				title: "The Truth and Reconciliation",
				par: 1200,
				personalBest: -1
			},
			{
				title: "The Silent Cartographer",
				par: 900,
				personalBest: -1
			},
			{
				title: "Assault on the Control Room",
				par: 900,
				personalBest: -1
			},
			{
				title: "343 Guilty Spark",
				par: 900,
				personalBest: -1
			},
			{
				title: "The Library",
				par: 1500,
				personalBest: -1
			},
			{
				title: "Two Betrayals",
				par: 1200,
				personalBest: -1
			},
			{
				title: "Keyes",
				par: 900,
				personalBest: -1
			},
			{
				title: "The Maw",
				par: 900,
				personalBest: -1
			}
		]
	},
	2: {
		title: "Halo 2",
		background: "https://steamcommunity-a.akamaihd.net/economy/profilebackground/items/976730/94fe38fd62320157fa650a0ea0641094d7ee6f65.jpg",
		missions: [
			{
				title: "Cairo Station",
				par: 900,
				personalBest: -1
			},
			{
				title: "Outskirts",
				par: 900,
				personalBest: -1
			},
			{
				title: "Metropolis",
				par: 900,
				personalBest: -1
			},
			{
				title: "The Arbiter",
				par: 900,
				personalBest: -1
			},
			{
				title: "The Oracle",
				par: 1500,
				personalBest: -1
			},
			{
				title: "Delta Halo",
				par: 900,
				personalBest: -1
			},
			{
				title: "Regret",
				par: 900,
				personalBest: -1
			},
			{
				title: "Sacred Icon",
				par: 900,
				personalBest: -1
			},
			{
				title: "Quarantine Zone",
				par: 900,
				personalBest: -1
			},
			{
				title: "Gravemind",
				par: 1200,
				personalBest: -1
			},
			{
				title: "Uprising",
				par: 900,
				personalBest: -1
			},
			{
				title: "High Charity",
				par: 900,
				personalBest: -1
			},
			{
				title: "The Great Journey",
				par: 900,
				personalBest: -1
			}
		]		
	},
	3: {
		title: "Halo 3",
		background: "https://steamcommunity-a.akamaihd.net/economy/profilebackground/items/976730/09e90fbe80214342b711ed955058048b4f950a54.jpg",
		missions: [
			{
				title: "Sierra 117",
				par: 900,
				personalBest: -1
			},
			{
				title: "Crow’s Nest",
				par: 1200,
				personalBest: -1
			},
			{
				title: "Tsavo Highway",
				par: 1200,
				personalBest: -1
			},
			{
				title: "The Storm",
				par: 900,
				personalBest: -1
			},
			{
				title: "Floodgate",
				par: 900,
				personalBest: -1
			},
			{
				title: "The Ark",
				par: 1200,
				personalBest: -1
			},
			{
				title: "The Covenant",
				par: 1200,
				personalBest: -1
			},
			{
				title: "Cortana",
				par: 900,
				personalBest: -1
			},
			{
				title: "Halo",
				par: 1200,
				personalBest: -1
			}
		]		
	},
	odst: {
		title: "Halo 3: ODST",
		background: "https://steamcommunity-a.akamaihd.net/economy/profilebackground/items/976730/ce4e3c0cf00835f38a9ad6b3e21d6a082bdf760c.jpg",
		missions: [
			{
				title: "Tayari Plaza",
				par: 180,
				personalBest: -1
			},
			{
				title: "Uplift Reserve",
				par: 240,
				personalBest: -1
			},
			{
				title: "Kizingo Boulevard",
				par: 540,
				personalBest: -1
			},
			{
				title: "ONI Alpha Site",
				par: 780,
				personalBest: -1
			},
			{
				title: "NMPD HQ",
				par: 600,
				personalBest: -1
			},
			{
				title: "Kikowani Station",
				par: 600,
				personalBest: -1
			},
			{
				title: "Data Hive",
				par: 960,
				personalBest: -1
			},
			{
				title: "Coastal Highway",
				par: 1500,
				personalBest: -1
			}
		]		
	},
	reach: {
		title: "Halo: Reach",
		background: "https://steamcommunity-a.akamaihd.net/economy/profilebackground/items/976730/8bca79906d935ce3ae89f760675d5d7d5f522f65.jpg",
		missions: [
			{
				title: "Winter Contingency",
				par: 900,
				personalBest: -1
			},
			{
				title: "ONI: Sword Base",
				par: 600,
				personalBest: -1
			},
			{
				title: "Nightfall",
				par: 600,
				personalBest: -1
			},
			{
				title: "Tip of the Spear",
				par: 900,
				personalBest: -1
			},
			{
				title: "Long Night of Solace",
				par: 1500,
				personalBest: -1
			},
			{
				title: "Exodus",
				par: 1200,
				personalBest: -1
			},
			{
				title: "New Alexandria",
				par: 1200,
				personalBest: -1
			},
			{
				title: "The Package",
				par: 1200,
				personalBest: -1
			},
			{
				title: "The Pillar of Autumn",
				par: 1200,
				personalBest: -1
			}
		]		
	},
	4: {
		title: "Halo 4",
		background: "https://steamcommunity-a.akamaihd.net/economy/profilebackground/items/976730/9313666e20eedde9b132ad32f0fff5eb6ac2dfde.jpg",
		missions: [
			{
				title: "Dawn",
				par: 900,
				personalBest: -1
			},
			{
				title: "Requiem",
				par: 900,
				personalBest: -1
			},
			{
				title: "Forerunner",
				par: 1200,
				personalBest: -1
			},
			{
				title: "Infinity",
				par: 1500,
				personalBest: -1
			},
			{
				title: "Reclaimer",
				par: 1200,
				personalBest: -1
			},
			{
				title: "Shutdown",
				par: 1200,
				personalBest: -1
			},
			{
				title: "Composer",
				par: 1200,
				personalBest: -1
			},
			{
				title: "Midnight",
				par: 1500,
				personalBest: -1
			}
		]		
	}
}

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
		var totalPar = 0;
		var totalPersonalBest = 0;
		var totalDelta = 0;
		let displayTotal = true;
		for (var i = 0; i < games[game].missions.length; i++) {
			let mission = games[game].missions[i];

			row = document.createElement("tr");

			cell = document.createElement("td");
			cell.style = "text-align: left;";
			cell.innerHTML = mission.title;
			row.appendChild(cell);

			cell = document.createElement("td");
			cell.style = "text-align: center;";
			cell.innerHTML = formatFromSeconds(mission.par);
			row.appendChild(cell);
			totalPar += mission.par;

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

			const delta = mission.personalBest - mission.par;
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
			totalDelta += delta;

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
		cell.style = "text-align: center;";
		cell.innerHTML = formatFromSeconds(totalPar);
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
		if (displayTotal) {
			if (totalDelta > 0) {
				cell.style = "text-align: center;color: #f00;text-shadow: 0 0 10px #f00;";
			} else {
				cell.style = "text-align: center;color: #0f0;text-shadow: 0 0 10px #0f0;";
			}
			cell.innerHTML = formatDelta(totalDelta);
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
