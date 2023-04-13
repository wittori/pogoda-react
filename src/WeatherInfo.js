import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <h3 className="text-capitalize">{props.data.description}</h3>
            <br />
            <button type="submit" className="currentLocationButton">
              Current location
            </button>
          </div>
          <div className="col-md-6">
            <div className="d-flex justity-content-evenly">
              <div className="col-md-6 weatherNow mt-5">
                <ul>
                  <li className="temperatureNow">
                    <WeatherTemperature celsius={props.data.temperature} />
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
              <div className="col-md-6 ">
                <div className="mt-5 pt-5 ps-4">
                  <WeatherIcon code={props.data.icon} size={120} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
