import "dotenv/config";
import mongoose from 'mongoose';
import express from "express";
const app = express();

// Making the directory "public" static
app.use(express.static("public"));

// Setting .ejs file to be viewed by default
app.set("view engine", "ejs");

const cardsno = 6;

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
  res.render("videos", {navSelectTitle : "videos", cardsno});
});

// Audios Page Routes
app.get("/audios", (req, res) => {
  res.render("audios", {navSelectTitle : "audios", cardsno});
});

// // Undefined Route
app.get("*", (req, res) => {
  res.send("Page Not Found Bitch");
});

// Connecting to Database
// mongoose.connect(process.env.DB_CONNECTION , {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, () => {
//     console.log("Connected to Database");
// });

// Listening to Server
app.listen(3000, () => {
  console.log("Growthademy Has Started at Server localhost://3000");
});
