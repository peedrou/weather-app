function setWeatherData(data) {
  console.log("weather data", data);
  const locationElement = document.getElementById("data-location");
  const windElement = document.getElementById("data-wind");
  const temperatureElement = document.getElementById("data-temperature");
  const rainElement = document.getElementById("data-rain");
  console.log(data.data[0].city_name);
  console.log(data.data[0].app_temp);
  console.log(data.data[0].precip);
  console.log(data.data[0].wind_spd);

  locationElement.textContent = data.data[0].city_name;
  temperatureElement.textContent = String(data.data[0].app_temp);
  rainElement.textContent = String(data.data[0].precip);
  windElement.textContent = String(data.data[0].wind_spd);

  const weatherinfo = [
    data.data[0].city_name,
    String(data.data[0].app_temp),
    String(data.data[0].precip),
    String(data.data[0].wind_spd),
  ];
  return weatherinfo;
}

export default setWeatherData;
