var express = require('express');
var router = express.Router();

// GET /games/{urlSlug}, t.ex. /games/tetris
router.get('/:urlSlug', async function (req, res) {

    // hämta ut urlSlug
    const urlSlug = req.params.urlSlug;
    const db = req.app.locals.db;
    const sql = `
    SELECT id,
          game_name,
          genre,
          description,
          release_year,
          image_url,
          url_slug
      FROM games
      WHERE url_slug = $1
  `;

  const result = await db.query(sql, [urlSlug]);
  const game = result.rows[0];


    res.render('games/details', {
        title: game.game_name,
        game
    });
});

module.exports = router;