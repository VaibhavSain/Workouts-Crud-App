const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const workoutRoutes = require("./routes/workout");
const app = express();

app.use("/api/workouts", workoutRoutes);
//middlware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log("connected to db && listening  on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
});
