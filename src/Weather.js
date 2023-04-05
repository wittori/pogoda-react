import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    console.log(response.data);
    setLoaded(true);
    setWeather({
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
    let apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>{city}</h1>
              <h2>
                <span>{weather.date}</span>
              </h2>
              <br />
              <h3>{weather.description}</h3>
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
              <div className="col-6 weatherNow">
                <ul>
                  <li classNames="tempNow">
                    <strong>{Math.round(weather.temperature)}</strong>
                    <a href="/" className="celsiusTemp">
                      °C
                    </a>
                    |
                    <a href="/" className="farenheitTemp">
                      °F
                    </a>
                  </li>
                  <li className="feelsLike">
                    Feels like: {Math.round(weather.feels_like)} °C
                  </li>
                  <li className="humidity">Humidity: {weather.humidity} %</li>
                  <li className="wind">Wind: {weather.wind} km/h</li>
                </ul>
              </div>
              <div className="col-6">
                <img
                  src={weather.icon}
                  alt={weather.description}
                  className="mainWeatherPic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="search-button" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
