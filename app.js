import "dotenv/config";
import mongoose from 'mongoose';
import express from "express";
import moment from "moment";

// Importing models
import {Video} from './models/videos.js'
import {Audio} from './models/audios.js'

const app = express();

// Assigning no of cards to show at the pages
const cardsno = 6;

// Using the static middleware
app.use(express.static("public"));

// Setting .ejs file to be viewed by default
app.set("view engine", "ejs");

// To add video to the video collection
app.get("/getvideo", (req, res) => {
  const video = new Video({
    title: "Trevor Noah Live at Apollo",
    length: "1 hr 34s",
    link: "https://www.youtube.com/watch?v=vi7SeBI7z9A"
  });

  video.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    });
});

// To add audio to the audio collection
app.get("/addaudio", (req, res) => {
  const audio = new Audio({
    title: "Net Ninja Video Tutorial",
    length: "45 m",
    link: "https://www.youtube.com/watch?v=VVGgacjzc2Y"
  });

  audio.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    });
});

// Landing Page Route
app.get("/", (req, res) => {
  res.render("index", {navSelectTitle : "home"});
});

// Articles Page Routes
app.get("/articles", (req, res) => {
  res.render("articles", {navSelectTitle : "articles", cardsno});
});

// Videos Page Routes
app.get("/videos", (req, res) => {
  Video.find()
  .then((result) => {
    res.render("videos", {
      navSelectTitle : "videos", 
      cardsno,
      moment,
      videos: result
    });
  })
  .catch((err) => {
    console.log(err);
  });
});

// Audios Page Routes
app.get("/audios", (req, res) => {
  Audio.find()
  .then((result) => {
    res.render("audios", {
      navSelectTitle : "audios", 
      cardsno,
      moment,
      audios: result
    });
  })
  .catch((err) => {
    console.log(err);
  });
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

