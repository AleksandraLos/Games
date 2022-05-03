var express = require('express');
var router = express.Router();

// GET /games/{urlSlug}, t.ex. /games/tetris
router.get('/:urlSlug', function (req, res) {

    // hämta ut urlSlug

    // Kör SQL SELECT mot game-tabellen för att hämta upp
    // spel vars url_slug = urlSlug (alltså den du hämtade ut)
    const game = {};

    // Hämta 10 bästa highscores för spelet, alltså behöver du 
    // göra ytterligare en SQL SELECT
    const highscores = [];

    res.render('games/details', {
        title: game.name,
        game,
        highscores
    });
});

module.exports = router;