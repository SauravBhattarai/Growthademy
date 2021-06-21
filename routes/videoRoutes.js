const moment = require('moment');
const express = require('express');

const router = express.Router();

// Importing models
const Video = require('../models/videos');

// Assigning no of cards to show at the pages
const cardsno = 6;

// Videos Page Routes
router.get("/", (req, res) => {
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

// To add video to the video collection
router.get("/getvideo", (req, res) => {
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

module.exports = router;
