import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { getCities } from "./weather.service";
import GetImage from "./getimage";

const AutoComplete = (props) => {
  const [value, setValue] = useState(null);

  const handleAll = async () => {
    const valueAsJson = JSON.stringify(value);
    const results = await geocodeByAddress(valueAsJson);
    const { lat, lng } = await getLatLng(results[0]);
    const cityInfo = await getCities(lat, lng);

    console.log("cityInfo", cityInfo);

    props.onDataLoad({
      location: cityInfo.data[0].city_name,
      temperature: cityInfo.data[0].app_temp,
      rain: cityInfo.data[0].precip,
      wind: cityInfo.data[0].wind_spd,
    });
  };

  return (
    <div>
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
      <div className="input-wrapper">
        <button
          className="search-button"
          id="search-button"
          onClick={handleAll}
        >
          Search Current weather
        </button>
      </div>
    </div>
  );
};

export default AutoComplete;
