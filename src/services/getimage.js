import sun from "../images/sun_normal.png";
import sun_overheat from "../images/sun_overheat.png";
import cloud from "../images/cloud_normal.png";
import cloud_rain from "../images/cloud_rain.png";

function GetImage() {
  return <img className="weather-image" src={sun}></img>;
}

export default GetImage;
