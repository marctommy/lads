import React from "react";
import axios from "axios";

const Weather = () => {
  const getWeatherDataFromApi = (city, country) => {};
  const city = "Berlin";
  const country = "Germany";
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
  axios
    .get(URL)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => console.log(error));

  return <div> {getWeatherDataFromApi}</div>;
};

export default Weather;
