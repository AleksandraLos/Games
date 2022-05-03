var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:urlSlug', function(req, res) {

    const game = games.find(game => game.url_slug == url_slug);


res.render('games', {
     title: game.name,
     game
 });
});

module.exports = router;