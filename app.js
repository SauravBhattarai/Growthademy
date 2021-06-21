const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Importing seeds
const seedFunction = require('./seeds');
// seedFunction();

require('dotenv/config');

// Importing routers
const videoRoutes = require('./routes/videoRoutes')
const audioRoutes = require('./routes/audioRoutes')
const articleRoutes = require('./routes/articleRoutes')

// Assigning no of cards to show at the pages
const cardsno = 6;

// Using the static middleware
app.use(express.static("public"));

// Setting .ejs file to be viewed by default
app.set("view engine", "ejs");

// Landing Page Route
app.get("/", (req, res) => {
  res.render("index", {navSelectTitle : "home"});
});

// Video page Routes
app.use("/videos", videoRoutes);

// Audio page Routes
app.use("/audios", audioRoutes);

// Articles Page Routes
app.get("/articles", (req, res) => {
  res.render("articles", {navSelectTitle : "articles", cardsno});
});

// // Undefined Route
app.get("*", (req, res) => {
  res.send("Page Not Found Bitch");
});

// Connecting to Database and listening to server
mongoose.connect(process.env.DB_CONNECTION , {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then((result) => 
    // Listening to server
    app.listen(3000, () => {
      console.log("Growthademy Has Started at Server localhost://3000");
    }))
  .catch((err) => console.log(`Error connecting to database : ${err}`));

