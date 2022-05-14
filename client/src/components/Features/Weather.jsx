import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ loggedInUser }) => {
  const getWeatherDataFromApi = (city, country) => {};
  const city = "Berlin";
  const country = "Germany";
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const [weather, setWeather] = useState();

  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
  axios
    .get(URL)
    .then((response) => {
      setWeather();
    })
    .catch((error) => console.log(error));

  return <div>weather </div>;
};

export default Weather;
