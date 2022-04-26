// server.js

// Import packages here
const express = require("express");
import cors from "cors";
import { readdirSync } from "fs";
import "dotenv/config";
const morgan = require("morgan");
const mongoose = require("mongoose");


// Create express app
const app = express();

// Database
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

// Apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Import Routes
readdirSync("./routes").map((r) => {
  app.use("/api", require(`./routes/${r}`));
});




// Set Port
const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
