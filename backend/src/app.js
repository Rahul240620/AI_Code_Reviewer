const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());

//routes import
const aiRoutes = require("./routes/ai.routes");

//routes declaration
app.use("/ai", aiRoutes);

module.exports = app;
