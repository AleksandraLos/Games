 CREATE DATABASE highscore;

 CREATE TABLE game(
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(50) NOT NULL,
  description VARCHAR(250) NOT NULL,
  release_year VARCHAR(50) NOT NULL,
  player VARCHAR(250) NOT NULL,
  date VARCHAR(250) NOT NULL,
  score NUMERIC(5,2),
  genre VARCHAR(50) NOT NULL,
  image_url VARCHAR(250),
  url_slug VARCHAR(50) NOT NULL
);

 INSERT INTO game (
  title,
  description,
  release_year,
  player,
  date,
  score,
  genre,
  image_url,
  url_Slug
) VALUES (
   'Tetris',
   'Lorem ipsum dolor',
   1984-06-06,
   'player',
   'date',
   'score',
   'Puzzle',
   'https://cdn.mos.cms.futurecdn.net/FJY29u96GopjnjRhWi2N6i-1200-80.jpg',
   'tetris'
);

 INSERT INTO game (
  title,
  description,
  release_year,
  player,
  date,
  score,
  genre,
  image_url,
  url_Slug
) VALUES (
    'Pac-Man',
    'Lorem ipsum dolor',
    1980-05-22,
    'player',
    'date',
    'score',
    'Arcade',
    'https://assets.funnygames.se/5/14195/67216/672x448/pacman.webp',
    'pac-man'
);

 INSERT INTO game (
  title,
  description,
  release_year,
  player,
  date,
  score,
  genre,
  image_url,
  url_Slug
) VALUES (
   'Donkey Kong',
   'Lorem ipsum dolor',
    1981,
   'player',
   'date',
   'score',
   'Arcade',
   'https://static.wikia.nocookie.net/nintendo/images/8/84/MPS_Donkey_Kong_Artwork.png/revision/latest?cb=20211112234853&path-prefix=en',
   'donkey-kong'
);

 INSERT INTO game (
  title,
  description,
  release_year,
  player,
  date,
  score,
  genre,
  image_url,
  url_Slug
) VALUES (
    'Cabal',
    'Lorem ipsum dolor',
    2005,
    'player',
    'date',
    'score',
    'Action',
    'https://naimg.playthisgame.com/playthisgame_new/images/games/gamebanner1.jpg',
    'cabal'
);

 INSERT INTO game (
  title,
  description,
  release_year,
  player,
  date,
  score,
  genre,
  image_url,
  url_Slug
) VALUES (
   'Asteroid',
   'Lorem ipsum dolor',
   1979,
   'player',
   'date',
   'score',
   'Action',
   'https://wgm8.com/wp-content/uploads/2011/12/26-07-16-2.jpg',
   'asteroids'
);

