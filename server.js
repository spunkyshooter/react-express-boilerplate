import express from "express";
import mongoose from "mongoose";
import config from "./config";
import bodyParser from 'body-parser';

const app = express();

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(express.json()); //body-parser in built inside express now
const PORT = process.env.PORT || 4000; //in local dev, we use port 4000

app.get("/api", (req, res) => {
  res.json({ data: "value" });
});


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
