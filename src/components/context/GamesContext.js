import React, { useState, useEffect, useCallback } from "react";

const GamesContext = React.createContext({
  popularGames: [],
});

// const { isLoading, error, sendRequest: fetchGames } = useFetch();

// const getTokenHandler = async () => {
//   const getToken = (data) => {
//     console.log(data);
//   };
//   fetchGames(
//     {
//       url: "cors-anywhere.herokuapp.com/https://api.igdb.com/v4/age_ratings",
//       method: "POST",
//       headers: {
//         // Accept: "application/json",
//         "Client-ID": "o8hd89dcqn6tvksmnse3kzec2we213",
//         Authorization: "Bearer 4wczrc1qwbmam0bejpj817cbvve3i7",
//       },
//       data: "fields category;",
//     },
//     getToken
//   );
// };

// const fetchPrueba = async () => {
//   const response = await fetch(
//     "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/multiquery",
//     {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Client-ID": "o8hd89dcqn6tvksmnse3kzec2we213",
//         Authorization: "Bearer 4wczrc1qwbmam0bejpj817cbvve3i7",
//         "X-Requested-With": XMLHttpRequest,
//       },
//       body: `query games "Games covers" {fields name,genres.name,aggregated_rating,cover.url; where name ~ *"${gamesToDisplay[0]}";};
//       query games "Games j" {fields name,genres.name,aggregated_rating,cover.url; where name = "${gamesToDisplay[1]}";};
//       query games "Games t" {fields name,genres.name,aggregated_rating,cover.url; where name = "${gamesToDisplay[2]}";};
//       query games "Metal Gear" {fields name,genres.name,aggregated_rating,cover.url; where name = "${gamesToDisplay[3]}";};
//       query games "Lost Ark" {fields name,genres.name,aggregated_rating,cover.url; where name = "${gamesToDisplay[4]}";};
//       query games "Otros games" {fields name,genres.name,aggregated_rating,cover.url; where genres.name = "Hack and slash/Beat 'em up"; limit 10;};`,
//     }
//     // "https://cors-anywhere.herokuapp.com/https://api.igdb.com/v4/games",
//     // {
//     //   method: "POST",
//     //   headers: {
//     //     Accept: "application/json",
//     //     "Client-ID": "o8hd89dcqn6tvksmnse3kzec2we213",
//     //     Authorization: "Bearer 4wczrc1qwbmam0bejpj817cbvve3i7",
//     //     "X-Requested-With": XMLHttpRequest,
//     //   },
//     //   body: 'fields cover.*; search "lost ark";',
//     // }
//   );
//   const data = await response.json(); // const name = data[0].name;
//   // const cover = data[0].cover; //212094
//   // const genre = data[0].genre[0];
//   // const rating = data[0].rating;
//   console.log(data);
// };
