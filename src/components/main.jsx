import React, { useState } from "react";
import AutoComplete from "../services/autocomplete";

import sun from "../images/sun_normal.png";
import sun_overheat from "../images/sun_overheat.png";
import cloud from "../images/cloud_normal.png";
import cloud_rain from "../images/cloud_rain.png";

import "./main.scss";

function getImage(temperatureText, rainText) {
  let source;

  if (parseInt(temperatureText) > 30) {
    source = sun_overheat;
  } else if (parseInt(temperatureText) < 30 && parseInt(rainText) < 0.1) {
    source = sun;
  } else if (parseInt(rainText) > 0.1 && parseInt(rainText) < 0.5) {
    source = cloud;
  } else {
    source = cloud_rain;
  }
  return source;
}

function Main() {
  const [locationText, setLocationText] = useState("Location");
  const [windText, setWindText] = useState("None");
  const [temperatureText, setTemperatureText] = useState("None");
  const [rainText, setRainText] = useState("None");

  return (
    <div className="super-wrapper">
      <div className="main-wrapper">
        <div className="body">
          <div className="general-information">
            <div className="location" id="data-location">
              {locationText}
            </div>
            <div className="status">Weather</div>
          </div>
          <div className="details-wrapper">
            <div className="dv">
              <div className="detail">Wind</div>
              <div className="valu" id="data-wind">
                {windText}
              </div>
            </div>
            <div className="dv">
              <div className="detail">Temperature</div>
              <div className="valu" id="data-temperature">
                {temperatureText}
              </div>
            </div>
            <div className="dv">
              <div className="detail">Rain</div>
              <div className="valu" id="data-rain">
                {rainText}
              </div>
            </div>
          </div>
        </div>
        <div className="location-container">
          <AutoComplete
            onDataLoad={(data) => {
              setLocationText(data.location);
              setWindText(data.wind.toFixed(2));
              setTemperatureText(data.temperature);
              setRainText(data.rain);
            }}
          />
        </div>
      </div>{" "}
      {(temperatureText != "None" || rainText != "None") && (
        <img
          className="weather-image"
          src={getImage(temperatureText, rainText)}
        />
      )}
    </div>
  );
}

export default Main;
