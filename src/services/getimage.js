import sun from "../images/sun_normal.png";
import sun_overheat from "../images/sun_overheat.png";
import cloud from "../images/cloud_normal.png";
import cloud_rain from "../images/cloud_rain.png";

function GetImage() {
  const temperatureElement =
    document.getElementById("data-temperature").textContent;
  const rainElement = document.getElementById("data-rain").textContent;

  let source;

  if (parseInt(temperatureElement) > 30) {
    source = sun_overheat;
  } else if (parseInt(temperatureElement) < 30 && parseInt(rainElement) < 0.1) {
    source = sun;
  } else if (parseInt(rainElement) > 0.1 && parseInt(rainElement) < 0.5) {
    source = cloud;
  } else {
    source = cloud_rain;
  }
  return <img className="weather-image" src={source}></img>;
}

export default GetImage;
