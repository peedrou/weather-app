import { useEffect, useState } from "react";
import { getCities } from "./weather.service";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

const AutoComplete = () => {
  //getCities();

  const [value, setValue] = useState(null);

  const handleClick = async () => {
    console.log(value);
    const valueAsJson = JSON.stringify(value);
    await geocodeByAddress(valueAsJson)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) =>
        console.log("Successfully got latitude and longitude", { lat, lng })
      );
  };

  return (
    <div>
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
      <button
        className="search-button"
        id="search-button"
        onClick={handleClick}
      >
        Cum
      </button>
    </div>
  );
};

export default AutoComplete;
