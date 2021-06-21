const mongoose   = require('mongoose');

// Importing models
const Video = require('./models/videos');
const Audio = require('./models/audios');

const videos = [
    {
        title: "How NIKE brand started - Shoedog by Phil Knight",
        length: "30 min",
        link: "https://www.youtube.com/watch?v=c7doeq2rd5c"
    },
    {
        title: "Brain study experiments and conclusions",
        length: "30 min",
        link: "https://www.youtube.com/watch?v=TZfBmD-AmeI"
    },
    {
        title: "How can we be emotionally intelligent? – EQ",
        length: "30 min",
        link: "https://www.youtube.com/watch?v=xPXOWah7jIc"
    },
    {
        title: "Growth Mindset and its Cultivation",
        length: "30 min",
        link: "https://www.youtube.com/watch?v=4tBZ8_9dwaU"
    },
    {
        title: "Psychology of Procastination - end procastination by using these methods",
        length: "30 min",
        link: "https://www.youtube.com/watch?v=--tU8C1SzN4"
    },
    {
        title: "Embrace Boredom - Deep work (Cal Newport) ",
        length: "30 min",
        link: "https://www.youtube.com/watch?v=lj3ncS4eCR8"
    },
    {
        title: "Sapiens - (points extracted short summary) Nepali ",
        length: "30 min",
        link: "https://www.youtube.com/watch?v=ifta2alx5mM"
    },
    {
        title: "Deal with changes in life - Who moved my cheese? (summary)",
        length: "30 min",
        link: "https://www.youtube.com/watch?v=vKaa8_qx-n8"
    },
    {
        title: "Habits that make you successful - Million Dollar Habits (summary)",
        length: "30 min",
        link: "https://www.youtube.com/watch?v=ApMSN7Bsm9A"
    },
    {
        title: "The Millionaire Nextdoor - strategies shared by the millionaires (Nepali video)",
        length: "30 min",
        link: "https://www.youtube.com/watch?v=E1uDH1QuG4I"
    }
]

const audios = [
    {
        title: "Factors that influence Growth",
        length: "30 min",
        link: "https://anchor.fm/growthademy/episodes/Factors-that-influence-Growth-euolki"
    },
    {
        title: "Is Knowledge Power?",
        length: "30 min",
        link: "https://anchor.fm/growthademy/episodes/Is-Knowledge-Power-e100373"
    },
    {
        title: "How to increase your financial status?",
        length: "30 min",
        link: "https://anchor.fm/growthademy/episodes/How-to-increase-your-financial-status-e111fea"
    },
    {
        title: "Life that followed engineering with Yuyutshu Karki - episode 1#",
        length: "30 min",
        link: "https://anchor.fm/growthademy/episodes/Life-that-followed-engineering-with-Yuyutshu-Karki---episode-1-e11fgtn"
    },
    {
        title: "Investment and finance management/ personal finance with Sanjeev Khanal ep2#",
        length: "30 min",
        link: " https://anchor.fm/growthademy/episodes/Investment-and-finance-management-personal-finance-with-Sanjeev-Khanal-ep2-e11rfb4"
    },
    {
        title: "Fit for Travel with Irada Subedi ep3#",
        length: "30 min",
        link: "https://anchor.fm/growthademy/episodes/Fit-for-Travel-with-Irada-Subedi-ep3-e128phk"
    },
    {
        title: "Library Mindset with Saurav Bhattarai - ep4#",
        length: "30 min",
        link: "https://anchor.fm/growthademy/episodes/Library-Mindset-with-Saurav-Bhattarai---ep4-e12m8mq"
    }
]

function seedDataforVideo() {
    // Remove all data from database
    Video.deleteMany({}, (error) => {
        if (error){
            console.log(error.message);
        } else {
            Video.deleteMany({}, (error) => {
                if (error){
                    console.log("Videos could not be removed");
                    console.log(error.message);
                } else {
                    console.log("Videos were removed");
                }
            });
            
            // Insert new data into the database
            videos.forEach((video) => {
                seed = new Video(video);
                seed.save()
                .then((result) => {})
                .catch((err) => {
                    console.log(err)
                });
            });

            console.log("Video seed success");
        };
    }
    )
}

function seedDataforAudio() {
    // Remove all data from database
    Audio.deleteMany({}, (error) => {
        if (error){
            console.log(error.message);
        } else {
            Audio.deleteMany({}, (error) => {
                if (error){
                    console.log("Audios could not be removed");
                    console.log(error.message);
                } else {
                    console.log("Audios were removed");
                }
            });
            
            // Insert new data into the database
            audios.forEach(audio => {
                seed = new Audio(audio);
                seed.save()
                .then((result) => {})
                .catch((err) => {
                    console.log(err)
                });
            })

            console.log("Audio seed success");
        };
    }
    )
}

function seedFunction() {
    seedDataforAudio();
    seedDataforVideo();
}

module.exports = seedFunction;

