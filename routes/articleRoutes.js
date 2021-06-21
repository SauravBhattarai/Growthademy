const moment = require('moment');
const express = require('express');

const router = express.Router();

// Importing models
const content = require('../models/contents');

// Assigning no of cards to show at the pages
const cardsno = 6;

// To add content to the contents collection
router.get("/addaudio", (req, res) => {
    const content = new content({
        title: "Net Ninja Video Tutorial",
        length: "45 m",
        link: "https://www.youtube.com/watch?v=VVGgacjzc2Y"
    });

    content.save()
        .then((result) => {
        res.send(result)
        })
        .catch((err) => {
        console.log(err)
        });
});

// Content Page Routes
router.get("/audios", (req, res) => {
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
  

module.exports = router;