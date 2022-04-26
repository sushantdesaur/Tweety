const express = require("express");
import cors from "cors";
import { readdirSync } from "fs";
const morgan = require("morgan");
import "dotenv/config";

// Create express app
const app = express();

// apply middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route

readdirSync("./routes").map((r) => {
  app.use("/api", require(`./routes/${r}`));
});

// Port
const port = process.env.PORT || 8000;
console.log(port);

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
