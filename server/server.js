import express from "express";
import cors from "cors";
import axios from "axios";

const WEATHERBIT_API_KEY = "";
//process.env.WEATHERBIT_API_KEY;
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors({ origin: "*" }));

app.post("/weather", (req, res) => {
  const url = `https://api.weatherbit.io/v2.0/current?lat=${req.body.latitude}&lon=${req.body.longitude}&key=${WEATHERBIT_API_KEY}&include=minutely`;
  axios({ url: url, responseType: "json" }).then((data) => res.json(data.data));
});

app.listen(5000, () => {
  console.log("Server Started boy");
});
