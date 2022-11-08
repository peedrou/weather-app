import React from "react";
import AutoComplete from "../services/autocomplete";
import "./main.scss";

function Main() {
  return (
    <div className="super-wrapper">
      <div className="main-wrapper">
        <div className="body">
          <div className="general-information">
            <div className="status">Location</div>
            <div className="location">Weather</div>
          </div>
          <div className="details-wrapper">
            <div className="dv">
              <div className="detail">Wind</div>
              <div className="value">None</div>
            </div>
            <div className="dv">
              <div className="detail">Temperature</div>
              <div className="value">None</div>
            </div>
            <div className="dv">
              <div className="detail">Rain</div>
              <div className="value">None</div>
            </div>
          </div>
        </div>
        <div className="location-container">
          <AutoComplete />
        </div>
      </div>{" "}
      <h1 className="weather-image">Placeholder</h1>
    </div>
  );
}

export default Main;
