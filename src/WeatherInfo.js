import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-3">{props.data.city}</h1>
            <h2>
              <span>
                {" "}
                <FormattedDate date={props.data.date} />
              </span>
            </h2>
            <br />
            <h3>{props.data.description}</h3>
            <br />
            <button type="submit" className="currentLocationButton">
              Current location
            </button>
          </div>
          <div className="col-md-6">
            <div className="d-flex justity-content-evenly">
              <div className="col-6 weatherNow mt-5">
                <ul>
                  <li className="tempNow">
                    <strong>{Math.round(props.data.temperature)}</strong>
                    <a href="/" className="celsiusTemp">
                      °C
                    </a>
                    |
                    <a href="/" className="farenheitTemp">
                      °F
                    </a>
                  </li>
                  <li className="feelsLike">
                    Feels like: {Math.round(props.data.feels_like)} °C
                  </li>
                  <li className="humidity">
                    Humidity: {props.data.humidity} %
                  </li>
                  <li className="wind">Wind: {props.data.wind} km/h</li>
                </ul>
              </div>
              <div className="col-6 ">
                <img
                  src={props.data.icon}
                  alt={props.data.description}
                  className="mainWeatherPic img-fluid mt-5 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
