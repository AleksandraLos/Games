var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',async function(req, res) {
const db = req.app.locals.db;

const sql = `
    SELECT id,
           name,
           player,
           date,
           score
      FROM users
  `;
  const result = await db.query(sql);

res.render('index', { title: 'Highscore',
users: result.rows });
});

module.exports = router;
