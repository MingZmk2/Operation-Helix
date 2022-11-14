// import * as allPlayersInfo from "./scripts/fetchPlayers";

// allPlayersInfo.getPlayersData();

//fetching from local host may cause problems will not use for now

import teams from "./data/teams.json";

// teams.forEach((team) => console.log(team));

//iterate through array
// teams.forEach((team) => {
//   team.players.forEach();
// });

// creating a list of players dynamically from array
let playerSelectionContainer = document.getElementById(
  "player-selection-container"
);

function createPlayersList() {
  teams.forEach((team) => {
    team.players.forEach((player) => {
      let playerContainer = document.createElement("div");
      playerContainer.classList.add("player-container");
      playerSelectionContainer.appendChild(playerContainer);

      let players = document.createElement("div");
      players.classList.add("players");
      players.setAttribute("id", player.nickname.replace(/ /g, ""));
      // console.log(player.nickname);
      playerContainer.appendChild(players);

      let teamLogo = document.createElement("img");
      teamLogo.title = player.nickname;
      teamLogo.src = `${team.logo}`;
      teamLogo.alt = team.name;
      players.appendChild(teamLogo);

      let playerName = document.createElement("div");
      playerName.classList.add("player-name");
      players.appendChild(playerName);
      playerName.textContent += player.nickname;
    });
  });
}

//creating barchart

const statToKey = {
  Rating: "rating",
  "Kill Death Ratio": "kdr",
  "Headshot Percentage": "headshots",
  Kills: "kills",
  Deaths: "deaths",
  "Maps Played": "mapsPlayed",
};

const statInfo = {
  rating: "Above or below average numbers",
  kdr: "Total player kills before dying in a match",
  headshots: "Percentage of kills made with a headshot",
  kills: "Total player kills so far professionally",
  deaths: "Total game deaths so far professionally",
  mapsPlayed: "Total maps played professionally so far",
};

createPlayersList();
