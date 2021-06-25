const moment = require('moment');
const express = require('express');

const router = express.Router();

// Importing models
const content = require('../models/contents');

// Assigning no of cards to show at the pages
const cardsno = 6;

// Articles Page Routes
router.get("/", (req, res) => {
    res.render("articles", {navSelectTitle : "articles", cardsno});
});

// CLicking show more button to add more content to the page


module.exports = router;