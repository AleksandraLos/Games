var express = require('express');
var router = express.Router();


router.get('/games', async (req, res) => {

    const db = req.app.locals.db;

    const sql = `
        SELECT * FROM games
    `;

    const result = await db.query(sql);
    const games = result.rows;

    res.render('admin/games', {
        title:'Sök spel',
        games
    });
    });

    router.get('/new', async (req, res) => {

        res.render('admin/new', {
            title:'New Game'
        });
        });

        router.post("/new", async (req, res, next)  => {

            const {
              game_name,
              description,
              image_url,
              genre,
              release_year
            } = req.body;
        
            const game = {
              game_name,
              description,
              image_url,
              genre,
              url_slug: generateUrlSlug(game_name),
              release_year,
            };
        
            const db = req.app.locals.db;
        
            await saveGame(game, db);
          
            res.redirect(`/admin/games`);
            
          });
        
          const generateUrlSlug = (game_name)  => 
          game_name.replace('-', '').replace(' ', '-').toLowerCase();
          
        
          async function saveGame(game, db) {
        
            const sql = `
              INSERT INTO games (
                game_name,
                description,
                image_url,
                genre,
                url_slug,
                release_year
              ) VALUES ($1, $2, $3, $4, $5, $6)
            `;
        
            await db.query(sql, [
                game.game_name,
                game.description,
                game.image_url,
                game.genre,
                game.url_slug,
                game.release_year
          ]);
          }
          router.get("/score", async function (req, res, next) {

            const db = req.app.locals.db;
          
            const sql = `
                  SELECT * FROM games
              `;
          
            const result = await db.query(sql);
          
            const games = result.rows;
        
            res.render("admin/score", {
              title: "New Score",
              games
            });
          });
          router.post("/score", async (req, res, next)  => {
            const { game_name } = req.body;
        
            const {
              player,
              date,
              score,
            } = req.body;
        
            const db = req.app.locals.db;
        
            const sql = `
              SELECT id,
                     game_name
                FROM games
            `;
        
            const result = await db.query(sql);
        
            const rows = result.rows;
        
            let game_id = rows.find(x => x.game_name === game_name);
        
                const saveSql = `
                INSERT INTO score(
                    player,
                    date,
                    score,
                    game_id
                ) VALUES ($1, $2, $3, $4)
            `;
                db.query(saveSql, [player, date, score, game_id.id])
              
          
          
            res.redirect(`/admin/games`);
            
          });

    module.exports = router;    