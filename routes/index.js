var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res) {
  const db = req.app.locals.db;

  const sql = `
SELECT * FROM score, games
WHERE
    score IN
    (
        SELECT MAX(score)
        FROM score
		   WHERE games.id = score.game_id
        GROUP BY game_name
    )
ORDER BY game_name ASC
  `;
  const result = await db.query(sql);

  let games = result.rows;

  res.render('index', {
    title: 'Highscore',
    games
  });
});

module.exports = router;
