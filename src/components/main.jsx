import React from "react";
import { getCities } from "../services/weather.service";
import AutoComplete from "../services/autocomplete";
import "./main.scss";

function Main() {
  return (
    <div className="main-wrapper">
      <div className="header">
        <div className="icon-container"></div>
      </div>
      <div className="body">
        <div className="general-information">
          <div className="status">Location</div>
          <div className="location">Weather</div>
        </div>
        <div className="details-wrapper">
          <div className="detail">Wind</div>
          <div className="value">None</div>
          <div className="detail">Temperature</div>
          <div className="value">None</div>
          <div className="detail">Rain</div>
          <div className="value">None</div>
        </div>
      </div>
      <div className="location-container">
        <AutoComplete />
      </div>
    </div>
  );
}

export default Main;
