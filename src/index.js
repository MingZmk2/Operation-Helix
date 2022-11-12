// import Index from "./scripts/index";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  new Index(main);
});

fetch("https://hltv-api.vercel.app/api/players.json")
  .then((res) => {
    res.json().then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log(err);
  });
