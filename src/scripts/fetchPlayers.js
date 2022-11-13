export const getPlayersData = async function () {
  const api_url = "https://hltv-api.vercel.app/api/players.json";
  fetch(api_url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};
