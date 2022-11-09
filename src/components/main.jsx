import React from "react";
import AutoComplete from "../services/autocomplete";
import GetImage from "../services/getimage";
import "./main.scss";

function Main() {
  return (
    <div className="super-wrapper">
      <div className="main-wrapper">
        <div className="body">
          <div className="general-information">
            <div className="status" id="data-location">
              Location
            </div>
            <div className="location">Weather</div>
          </div>
          <div className="details-wrapper">
            <div className="dv">
              <div className="detail">Wind</div>
              <div className="value" id="data-wind">
                None
              </div>
            </div>
            <div className="dv">
              <div className="detail">Temperature</div>
              <div className="value" id="data-temperature">
                None
              </div>
            </div>
            <div className="dv">
              <div className="detail">Rain</div>
              <div className="value" id="data-rain">
                None
              </div>
            </div>
          </div>
        </div>
        <div className="location-container">
          <AutoComplete />
        </div>
      </div>{" "}
      <GetImage />
    </div>
  );
}

export default Main;
