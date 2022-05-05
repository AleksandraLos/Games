var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {

    res.render('games/router', {title:'Sök spel'})
    });

    module.exports = router;