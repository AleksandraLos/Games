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
    WHERE games.url_slug = $1
`;

    const sqlHighscore = `
    SELECT * FROM score, games
WHERE
    date IN
    (
        SELECT MAX(date)
        FROM score
		   WHERE games.id = score.game_id
		   AND games.url_slug = $1
        GROUP BY score
    )
ORDER BY date DESC limit 10
    `
  const result = await db.query(sql, [urlSlug]);
  const resultScore = await db.query(sqlHighscore, [urlSlug]);

  const game = result.rows[0];
  const scores = resultScore.rows;


    res.render('games/details', {
        title: game.game_name,
        game,
        scores
    });
});

module.exports = router;