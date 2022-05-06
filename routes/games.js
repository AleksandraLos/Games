var express = require('express');
var router = express.Router();

// GET /games/{urlSlug}, t.ex. /games/tetris
router.get('/:urlSlug', async function (req, res) {

    // hämta ut urlSlug
    const urlSlug = req.params.urlSlug;
    const db = req.app.locals.db;

    const sql = `
    SELECT * FROM games
    INNER JOIN score
    ON score.game_id = games.id
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