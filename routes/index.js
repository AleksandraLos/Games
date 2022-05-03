var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',async function(req, res) {
const db = req.app.locals.db;

const sql = `
    SELECT id,
           game,
           player,
           score_date,
           points
      FROM users
  `;
  const result = await db.query(sql);

res.render('index', { title: 'Highscore',
allGames: result.rows });
});

module.exports = router;
