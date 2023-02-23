# Operation Helix

## Background
Operation Helix is a comprehensive dashboard designed to cater to the needs of Counter-Strike: Global Offensive esports enthusiasts. It enables them to analyze their favorite player's gameplay data and compare it with that of other players from different teams, all in an interactive manner. The dashboard's primary objective is to provide users with a visual understanding of data trends between players. By selecting a specific player from their respective team, users can compare them across a range of metrics via informative data graphs. Furthermore, users can view a player card that displays more in-depth statistics by selecting a particular player.

![helix test](https://user-images.githubusercontent.com/11719460/220924146-e7daa536-425d-4d57-9974-283190fba7c9.gif)


## Functionality & MVPs
In Operation Helix, users will be able to:
- Sidebar for player selection based off teams
- Data visualize selected players in a graph
- Options to choose a certain metric to compare the players that a user wants to visualize in the graph
- Player card to display more info/stats about a specific player

In addition, this project will include:
- Ability to hover over a metric to explain what it is
- Ability to hover data in the graph to highlight a specific stat

## Wireframes
![wireframe](images/wireframe.png)

## Technologies, Libraries, APIs
- Vanilla Javascript
- HTML / CSS
- Chart.js for data visualization
- [hltv-api](https://github.com/dajk/hltv-api) to source the professional CSGO players and teams statistics data
NPM and Webpack for JavaScript project management and file bundling

## Implementation Timeline
- Friday: Set up project and start implementing HTML, CSS and begin process of fetching data from the API.
- Weekend : Complete logic for data visualization using the data visual library of my choice and figure out how to implement the fetched data to appear on to the data graph.
- Monday : Continue solving any data visualization logic if need and start creating interactive buttons for navigation bar and player selector.
- Tuesday : Work on player card feature that will be fetched from api.
- Wednesday : Finish styling and refactoring code. If I have any extra time I will add some additional styling like animation to each button.

## Code Snippets
Initially, I had planned to fetch player data from the hltv-api, but due to unforeseen constraints, I was unable to do so. As a result, I developed a solution by creating a JSON file that encompasses data on various professional players and their respective statistics. To retrieve this information and display it in the browser, I designed an algorithm that accesses the data stored within the JSON file. Furthermore, I implemented an algorithm that sorts the players based on a specific statistic, ranking them from the best to the worst.

![Screen Shot 2023-02-23 at 8 17 08 AM](https://user-images.githubusercontent.com/11719460/220917463-75362d90-34cf-48f9-9dde-140b1c7b23d8.png)


![Screen Shot 2023-02-23 at 8 10 12 AM](https://user-images.githubusercontent.com/11719460/220917001-c9f43bd6-761b-4fa0-acbd-66839d72f8e0.png)

## Credits
- Player image assets from [HLTV](https://www.hltv.org)
- Background image asset from Counter-Strike: Global Offensive game and is a property of [Valve Software](https://www.valvesoftware.com/en)
