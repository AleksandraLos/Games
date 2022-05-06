var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',async function(req, res) {
const db = req.app.locals.db;

const sql = `
    SELECT * FROM games
    INNER JOIN score
    ON score.game_id = games.id
  `;
  const result = await db.query(sql);

  let games = result.rows;

res.render('index', { title: 'Highscore',
games});
});

module.exports = router;
