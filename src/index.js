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
      teamLogo.alt = player.nickname;
      players.appendChild(teamLogo);

      let playerName = document.createElement("div");
      playerName.classList.add("player-name");
      players.appendChild(playerName);
      playerName.textContent += player.nickname;
    });
  });
}

createPlayersList();
