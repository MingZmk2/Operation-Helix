// import * as allPlayersInfo from "./scripts/fetchPlayers";

// allPlayersInfo.getPlayersData();

//fetching from local host may cause problems will not use for now

// import teams from "./data/teams.json";
import players from "./data/players.json";

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
  players.forEach((player) => {
    let playerContainer = document.createElement("div");
    playerContainer.classList.add("player-container");
    playerSelectionContainer.appendChild(playerContainer);

    let players = document.createElement("div");
    players.classList.add("players");
    players.setAttribute("id", player.nickname.replace(/ /g, ""));
    // console.log(player.nickname);
    playerContainer.appendChild(players);

    // let teamLogo = document.createElement("img");
    // teamLogo.title = player.team;
    // teamLogo.src = `${player.teamLogo}`;
    // teamLogo.alt = player.team;
    // players.appendChild(teamLogo);

    let playerName = document.createElement("div");
    playerName.classList.add("player-name");
    players.appendChild(playerName);
    playerName.textContent += player.nickname;
  });
}

createPlayersList();

//fucntion to return an array of object players
let playersArr = [];

function getPlayersFomArr() {
  players.forEach((player) => playersArr.push(player));
}

getPlayersFomArr();
// console.log(playersArr);

//creating bar chart
const statToKey = {
  Rating: "rating",
  "Kill Death Ratio": "kdr",
  "Headshot Percentage": "headshots",
  Kills: "kills",
  Deaths: "deaths",
  "Maps Played": "mapsPlayed",
};

const statInfo = {
  rating: "-Top 10 players-",
  kdr: "-Top 10 players-",
  headshots: "-Top 10 players-",
  kills: "-Top 10 players-",
  deaths: "-Top 10 players-",
  mapsPlayed: "-Top 10 players-",
};

// Player stat sorting from best to worst in top 10
let selectedStat = "rating";
let sortedPlayersArr = playersArr.sort(
  (a, b) => b[selectedStat] - a[selectedStat]
);

//begin building bar chart
let sortedPlayersStats = sortedPlayersArr.map(
  (playerObj) => playerObj[selectedStat]
);
let sortedNamesArr = sortedPlayersArr.map((playerObj) => playerObj.nickname);
let axisUnit = statInfo[selectedStat];
let updatedLabel = Object.keys(statToKey).find(
  (key) => statToKey[key] === selectedStat
);

// console.log(sortedPlayersArr);
// console.log(sortedNamesArr);
// console.log(sortedPlayersStats);

const ctx = document.getElementById("statsChart").getContext("2d");

//declare variable to initiate new bar Chart instance
let statsChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: sortedNamesArr.slice(0, 10),
    datasets: [
      {
        label: selectedStat,
        data: sortedPlayersStats,
        HoverBackgroundColor: "#b01700",
        backgroundColor: ["rgba(255, 159, 64, 1)"],
        borderColor: ["rgba(0, 0, 0, 0.1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    indexAxis: "y",
    scales: {
      x: {
        title: {
          display: true,
          text: axisUnit,
          color: "#FF9F40",
          font: {
            family: "'Roboto', sans-serif",
            weight: 500,
            size: 14,
          },
        },
        position: "top",
        ticks: {
          font: {
            size: 14,
          },
          color: "#FF9F40",
          callback: function (value, index, ticks) {
            return new Intl.NumberFormat().format(value);
          },
        },
      },
      y: {
        ticks: {
          color: "#FF9F40",
          font: {
            family: "'Roboto', sans-serif",
            weight: 400,
            size: 16,
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        fullSize: false,
        text: updatedLabel,
        color: "#FF9F40",
        font: {
          family: "'Roboto', sans-serif",
          weight: 500,
          size: 24,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return new Intl.NumberFormat().format(context.parsed.x);
          },
        },
      },
      legend: {
        display: false,
      },
    },
  },
});

// right stats picker
let statsPicker = document.getElementById("statistics");

//create eventListener for option to choose a stat to see
statsPicker.addEventListener("click", (clickEvent) => {
  document.querySelector(`.${selectedStat}`).classList.remove("selected");
  console.log(selectedStat);
  selectedStat = clickEvent.target.className;
  console.log(selectedStat);
  document.querySelector(`.${selectedStat}`).classList.add("selected");

  sortedPlayersArr = playersArr.sort(
    (a, b) => b[selectedStat] - a[selectedStat]
  );

  sortedPlayersStats = sortedPlayersArr.map(
    (playerObj) => playerObj[selectedStat]
  );
  sortedNamesArr = sortedPlayersArr.map((playerObj) => playerObj.nickname);

  updatedLabel = Object.keys(statToKey).find(
    (key) => statToKey[key] === selectedStat
  );

  axisUnit = statInfo[selectedStat];

  statsChart.data.labels = sortedNamesArr.slice(0, 10);
  statsChart.data.datasets = [
    {
      label: updatedLabel,
      data: sortedPlayersStats,
      backgroundColor: ["rgba(255, 159, 64, 1)"],
      borderColor: ["rgba(0, 0, 0, 0.1)"],
      borderWidth: 1,
    },
  ];
  statsChart.options.scales.x.title.text = axisUnit;
  statsChart.options.plugins.title.text = updatedLabel;

  if (selectedStat === "rating") {
    statsChart.options.scales.x.ticks.callback = function (
      value,
      index,
      ticks
    ) {
      return new Intl.NumberFormat().format(value);
    };
    statsChart.options.plugins.tooltip.callbacks.label = function (context) {
      return Intl.NumberFormat().format(context.parsed.x);
    };
  } else {
    statsChart.options.scales.x.ticks = {
      color: "#FF9F40",
      font: {
        size: 14,
      },
    };
    statsChart.options.plugins.tooltip.callbacks = {};
  }

  statsChart.update();
});

//begin creating player info section
function createCardForPlayer() {
  players.forEach((player) => {
    document
      .getElementById(player.nickname.replace(/ /g, ""))
      .addEventListener("click", (e) => {
        e.preventDefault();
        createPlayerCard(player);
      });
  });
}

//async removed
function createPlayerCard(player) {
  createPlayerInfoContainer(player);
}

function createPlayerInfoContainer(player) {
  const playerInfo = document.getElementById("playerInfo");
  playerInfo.innerHTML = "";

  const playerInfoInner1 = document.createElement("div");
  const playerInfoInner2 = document.createElement("div");
  playerInfo.appendChild(playerInfoInner1);
  playerInfoInner1.classList.add("player-info-inner-1");
  playerInfo.appendChild(playerInfoInner2);
  playerInfoInner2.classList.add("player-info-inner-2");

  renderPlayerPicture(player, playerInfoInner1);
  renderPlayerInGameName(player, playerInfoInner2);

  const playerDataInfo = document.createElement("div");
  playerDataInfo.classList.add("player-data-info");
  playerInfoInner2.appendChild(playerDataInfo);

  renderPlayerFullName(player, playerDataInfo);
  renderPlayerRegion(player, playerDataInfo);
  renderPlayerTeamAffiliation(player, playerDataInfo);
  renderPlayerAge(player, playerDataInfo);
  // renderPlayerRating(player, playerDataInfo);
}

function renderPlayerPicture(player, playerInfoInner1) {
  const playerPicture = document.createElement("img");
  playerPicture.classList.add("player-picture");
  playerPicture.title = player.nickname;
  playerPicture.src = `${player.image}`;
  playerPicture.srcset = `${player.image}`;
  playerPicture.alt = player.nickname;
  playerInfoInner1.appendChild(playerPicture);
}

function renderPlayerInGameName(player, playerInfoInner2) {
  const playerTitle = document.createElement("h2");
  playerTitle.classList.add("player-title");
  playerTitle.textContent = player.nickname;
  playerInfoInner2.appendChild(playerTitle);
}

function renderPlayerFullName(player, playerDataInfo) {
  const playerFullName = document.createElement("div");
  playerFullName.classList.add("playerFullName");
  playerDataInfo.appendChild(playerFullName);
  const playerFullNameTitle = document.createElement("h4");
  playerFullNameTitle.textContent = "Full Name:";
  playerFullName.appendChild(playerFullNameTitle);
  const playerFullNameInfo = document.createElement("div");
  playerFullNameInfo.textContent = player.fullname;
  playerFullName.appendChild(playerFullNameInfo);
}

function renderPlayerRegion(player, playerDataInfo) {
  const playerRegion = document.createElement("div");
  playerRegion.classList.add("playerRegion");
  playerDataInfo.appendChild(playerRegion);
  const playerRedionTitle = document.createElement("h4");
  playerRedionTitle.textContent = "Region: ";
  playerRegion.appendChild(playerRedionTitle);
  // const playerRegionInfo = document.createElement("div");
  // playerRegionInfo.textContent = player.country.name;
  // playerRegion.appendChild(playerRegionInfo);
  const playerRegionFlag = document.createElement("img");
  playerRegionFlag.classList.add("player-region-flag");
  playerRegionFlag.title = player.country.name;
  playerRegionFlag.src = `${player.country.flag}`;
  playerRegionFlag.srcset = `${player.country.flag}`;
  playerRegionFlag.alt = player.country.name;
  playerRegion.appendChild(playerRegionFlag);
}

function renderPlayerTeamAffiliation(player, playerDataInfo) {
  const playerTeam = document.createElement("div");
  playerTeam.classList.add("playerTeam");
  playerDataInfo.appendChild(playerTeam);
  const playerTeamTitle = document.createElement("h4");
  playerTeamTitle.textContent = "Team:";
  playerTeam.appendChild(playerTeamTitle);
  const playerTeamInfo = document.createElement("div");
  playerTeamInfo.textContent = player.team;
  playerTeam.appendChild(playerTeamInfo);

  let teamLogo = document.createElement("img");
  teamLogo.title = player.team;
  teamLogo.src = `${player.teamLogo}`;
  teamLogo.alt = player.team;
  playerTeam.appendChild(teamLogo);
}

function renderPlayerAge(player, playerDataInfo) {
  const playerAge = document.createElement("div");
  playerAge.classList.add("playerAge");
  playerDataInfo.appendChild(playerAge);
  const playerAgeNumber = document.createElement("h4");
  playerAgeNumber.textContent = "Age:";
  playerAge.appendChild(playerAgeNumber);
  const playerAgeInfo = document.createElement("div");
  playerAgeInfo.textContent = player.age;
  playerAge.appendChild(playerAgeInfo);
}

// function renderPlayerRating(player, playerDataInfo) {
//   const playerRating = document.createElement("div");
//   playerRating.classList.add("playerRating");
//   playerDataInfo.appendChild(playerRating);
//   const playerRatingScore = document.createElement("h4");
//   playerRatingScore.textContent = "Rating:";
//   playerRating.appendChild(playerRatingScore);
//   const playerRatingInfo = document.createElement("div");
//   playerRatingInfo.textContent = player.rating;
//   playerRating.appendChild(playerRatingInfo);
// }

createCardForPlayer();

//modal script
const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

//search bar function
