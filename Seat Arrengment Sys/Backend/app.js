const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use("/",(req, res, next) => {
    res.send("It Is working");
})


mongoose.connect("mongodb+srv://leslyperera58_db_user:C7vMOCaLaLiIpIMg@cluster0.f3gstl3.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.error("Could not connect to MongoDB...", err));