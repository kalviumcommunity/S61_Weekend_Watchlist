const express = require("express");
const connectDB = require("./config/db");
const { MovieRoute } = require("./Route")
connectDB();

const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("pong");
});

app.use("/api", MovieRoute);

app.listen(port, () => {
  console.log("Server is running");
});