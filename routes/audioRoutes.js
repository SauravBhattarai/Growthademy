const moment = require('moment');
const express = require('express');

const router = express.Router();

// Importing models
const Audio = require('../models/audios');

// Assigning no of cards to show at the pages
const cardsno = 6;

// Audios Page Routes
router.get("/", (req, res) => {
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
  

// To add audio to the audio collection
router.get("/addaudio", (req, res) => {
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

// CLicking show more button to add more content to the page



module.exports = router;