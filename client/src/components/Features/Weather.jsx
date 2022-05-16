// import React, { useState } from "react";
// import axios from "axios";

// const Weather = () => {
//   const [weather, setWeather] = useState({
//     description: "",
//     temperature: 0,
//   });

//   const city = "Berlin";
//   const country = "Germany";
//   const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

//   const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
//   axios
//     .get(URL)
//     .then((response) => {
//       console.log("wetter", response.data);
//       const description = response.data.weather[0].description;
//       const temperature = response.data.main.temp;
//       const feelsLike = response.data.main.feels_like;
//       return setWeather({
//         description: description,
//         temperature: temperature,
//         feelsLike: feelsLike,
//       });
//     })
//     .catch((error) => console.log(error));

//   return (
//     <div>
//       <h1>{weather.description}</h1>
//       <h3> {weather.temperature}C</h3>
//       <h4> {weather.feelsLike}</h4>
//     </div>
//   );
// };

// export default Weather;
