import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import Context from "./../Context";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import DateTime from "./DateTime";
import Error from "./Error";
import TagLine from "./TagLine";
import Footer from "./Footer";

const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();

  const api_call = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    if (!location)
      return (setError("Please enter Location name"), setWeather(null));
    const API_KEY = "6b84f1ca5e3008e037642f47e4f008c1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const data = axios.get(url);
    const response = await data;
    setWeather(response.data.main);
    setCity(response.data.name);
  };
  weather && console.log(weather);

  return (
    <div className="main">
      <Header />
      <Content>
        <DateTime />
        <TagLine />
        <Context.Provider value={{ api_call, weather, city, error }}>
          <WeatherSearch />
          {weather && <WeatherData />}
          {error && <Error />}
        </Context.Provider>
      </Content>
      <Footer />
    </div>
  );
};

export default Main;
