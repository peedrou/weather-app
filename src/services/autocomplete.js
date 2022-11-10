import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";
import { getCities } from "./weather.service";

const AutoComplete = () => {
  const [value, setValue] = useState(null);

  const handleClick = async () => {
    console.log(value);
    const valueAsJson = JSON.stringify(value);
    await geocodeByAddress(valueAsJson)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => getCities(lat, lng));
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
          onClick={handleClick}
        >
          Search Current weather
        </button>
      </div>
    </div>
  );
};

export default AutoComplete;
