export async function getCities() {
  const response = await fetch("http://localhost:5000/weather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      latitude: 0,
      longitude: 0,
    }),
  });

  const data = await response.json();
  console.log(data);
}
