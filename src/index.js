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

createPlayersList();

//fucntion to return an array of object players
let playersArr = [];

function getPlayersFomArr() {
  teams.forEach((team) =>
    team.players.forEach((player) => playersArr.push(player))
  );
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
  rating: "Above or below average numbers",
  kdr: "Total player kills before dying in a match",
  headshots: "Percentage of kills made with a headshot",
  kills: "Total player kills so far professionally",
  deaths: "Total game deaths so far professionally",
  mapsPlayed: "Total maps played professionally so far",
};

// // left container for all players
// let emptyPlayerslist = document.getElementById("playersList");

// Player stat sorting
let selectedStat = "rating";
let sortedPlayersArr;
if (selectedStat === "rating") {
  sortedPlayersArr = playersArr.sort(
    (a, b) => a[selectedStat] - b[selectedStat]
  );
} else {
  sortedPlayersArr = playersArr.sort(
    (a, b) => b[selectedStat] - a[selectedStat]
  );
}

// console.log(sortedPlayersArr);

//begin building bar chart
let sortedPlayersStats = sortedPlayersArr.map(
  (playerObj) => playerObj[selectedStat]
);
let sortedNamesArr = sortedPlayersArr.map((playerObj) => playerObj.name);
let axisUnit = statInfo[selectedStat];
let updatedLabel = Object.keys(statToKey).find(
  (key) => statToKey[key] === selectedStat
);

const ctx = document.getElementById("statsChart").getContext("2d");
//if I possibly want gradient bar colors
// const gradient = ctx.createLinearGradient(5, 730, 5, 100);
// gradient.addColorStop(0, "#BFBFBF");
// gradient.addColorStop(1, "#403F40");

//declare variable to initiate new bar Chart instance
let statsChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: sortedNamesArr,
    datasets: [
      {
        label: selectedStat, //`${Object.keys(playersArr[0])[1]}`
        data: sortedPlayersStats,
        //for gradient bar use backgroundColor: gradient
        backgroundColor: ["rgba(255, 159, 64, 0.2)"],
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
          color: "white",
          font: {
            size: 16,
          },
        },
        position: "top",
        ticks: {
          font: {
            size: 14,
          },
          color: "white",
          callback: function (value, index, ticks) {
            return new Intl.NumberFormat().format(value);
          },
        },
      },
      y: {
        ticks: {
          color: "white",
          font: {
            size: 14,
          },
        },
        //possibile alternative to reverse values
        // reverse: reversed
      },
    },
    plugins: {
      title: {
        display: true,
        fullSize: false,
        text: updatedLabel,
        color: "white",
        font: {
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
let emptySpecsUlist = document.getElementById("statistics");

//create eventListener for option to choose a stat to see
emptySpecsUlist.addEventListener("click", (clickEvent) => {
  document.querySelector(`.${selectedStat}`).classList.remove("selected");
  selectedStat = clickEvent.target.className;
  document.querySelector(`.${selectedStat}`).classList.add("selected");

  if (selectedStat === "rating") {
    sortedPlayersArr = playersArr.sort(
      (a, b) => a[selectedStat] - b[selectedStat]
    );
  } else {
    sortedPlayersArr = playersArr.sort(
      (a, b) => b[selectedStat] - a[selectedStat]
    );
  }

  sortedPlayersStats = sortedPlayersArr.map(
    (playerObj) => playerObj[selectedStat]
  );
  sortedNamesArr = sortedPlayersArr.map((playerObj) => playerObj.nickname);

  updatedLabel = Object.keys(statToKey).find(
    (key) => statToKey[key] === selectedStat
  );

  axisUnit = statInfo[selectedStat];

  statsChart.data.labels = sortedNamesArr;
  statsChart.data.datasets = [
    {
      label: updatedLabel, //`${Object.keys(playersArr[0])[1]}`
      data: sortedPlayersStats,
      backgroundColor: ["rgba(255, 159, 64, 0.7)"],
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
      color: "white",
      font: {
        size: 14,
      },
    };
    statsChart.options.plugins.tooltip.callbacks = {};
  }

  statsChart.update();
});
