import setWeatherData from "./setweatherdata";

export async function getCities(lt, ln) {
  const response = await fetch("http://localhost:5000/weather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      latitude: lt,
      longitude: ln,
    }),
  });

  const data = await response.json();
  console.log(data);
  setWeatherData(data);
}
