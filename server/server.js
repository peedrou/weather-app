import express from "express";
import cors from "cors";

const WEATHERBIT_API_KEY = process.env.WEATHERBIT_API_KEY;
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors({ origin: "*" }));

app.post("/weather", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(5000, () => {
  console.log("Server Started boy");
});
