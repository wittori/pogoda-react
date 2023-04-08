import React, { useState } from "react";
import axios from "axios";

import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feels_like: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchCity() {
    let apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="container p-4">
          <div className="row">
            <div className="col-md-6">
              <h1>{weatherData.city}</h1>
              <h2>
                <span>
                  {" "}
                  <FormattedDate date={weatherData.date} />
                </span>
              </h2>
              <br />
              <h3>{weatherData.description}</h3>
              <br />
              <button type="submit" className="currentLocationButton">
                Current location
              </button>
            </div>
            <div className="col-md-6">
              <form
                onSubmit={handleSubmit}
                className="mt-4 d-flex justity-content-evenly"
              >
                <div className="col-md-9">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    autoFocus="on"
                    onChange={updateCity}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="submit"
                    value="Search"
                    className="search-button"
                  />
                </div>
              </form>
              <div className="d-flex justity-content-evenly">
                <div className="col-6 weatherNow">
                  <ul>
                    <li className="tempNow">
                      <strong>{Math.round(weatherData.temperature)}</strong>
                      <a href="/" className="celsiusTemp">
                        °C
                      </a>
                      |
                      <a href="/" className="farenheitTemp">
                        °F
                      </a>
                    </li>
                    <li className="feelsLike">
                      Feels like: {Math.round(weatherData.feels_like)} °C
                    </li>
                    <li className="humidity">
                      Humidity: {weatherData.humidity} %
                    </li>
                    <li className="wind">Wind: {weatherData.wind} km/h</li>
                  </ul>
                </div>
                <div className="col-6 ">
                  <img
                    src={weatherData.icon}
                    alt={weatherData.description}
                    className="mainWeatherPic img-fluid mt-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    searchCity();
    return "Loading";
  }
}
