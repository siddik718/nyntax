import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

import router from "./Routes/record.routes.js";

config();
const app = express();
const PORT = process.env.PORT || 4000;
const URL = process.env.URL;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server started at : http://localhost:${PORT}`);

  mongoose
    .connect(URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));
});
