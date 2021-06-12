import "dotenv/config";
import express from "express";
const app = express();

// Making the directory "public" static
app.use(express.static("public"));

// Setting .ejs file to be viewed by default
app.set("view engine", "ejs");

// Landing Page Route
app.get("/", (req, res) => {
  res.render("index");
});

// Articles Page Routes
app.get("/articles", (req, res) => {
  res.render("articles");
});

// Videos Page Routes
app.get("/videos", (req, res) => {
  res.render("videos");
});

// Audios Page Routes
app.get("/audios", (req, res) => {
  res.render("audios");
});

// // Undefined Route
app.get("*", (req, res) => {
  res.send("Page Not Found Bitch");
});

//Connecting to Database
// mongoose.connect(process.env.DB_CONNECTION , {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}, () => {
//     console.log("Connected to Database");
// });

// Listening to Server
app.listen(3000, () => {
  console.log("Growthademy Has Started at Server localhost://3000");
});
