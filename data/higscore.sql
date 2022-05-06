  CREATE DATABASE highscore;

  CREATE TABLE games (
        id INTEGER GENERATED ALWAYS AS IDENTITY,
        game_name VARCHAR(250) NOT NULL,
        genre VARCHAR(50) NOT NULL,
        description VARCHAR(500) NOT NULL,
        release_year NUMERIC(4) NOT NULL,
       	image_url VARCHAR(550) NOT NULL,
        url_slug VARCHAR(50) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE (url_slug)
);

  CREATE TABLE score (
        id INTEGER GENERATED ALWAYS AS IDENTITY,
        player VARCHAR(100) NOT NULL,
        date DATE NOT NULL,
        score INTEGER NOT NULL,
        game_id INTEGER NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY(game_id)
        REFERENCES games(id)
);

  INSERT INTO games (
        game_name,
		    genre,
        description,
        release_year,
		    image_url,
        url_slug
)
  VALUES (
      'Tetris',
	    'Puzzle',
	    'A tetris is a tile-matching puzzle game, developed in the Soviet Union in 1984. The game has a simple goal of destroying lines of block before it reaches the top. The line is made up of a square block. The Tetrimino is the shape of the 4 connected blocks that falls vertically down.',
	    '1984',
	    'https://cdn.mos.cms.futurecdn.net/FJY29u96GopjnjRhWi2N6i-1200-80.jpg',
	    'tetris'
),
(
      'Pac-Man',
	    'Arcade',
	    'Pac-Man is an action maze chase video game; the player controls the eponymous character through an enclosed maze. The objective of the game is to eat all of the dots placed in the maze while avoiding four colored ghosts — Blinky (red), Pinky (pink), Inky (cyan), and Clyde (orange) — that pursue him.',
	    '1980',
	    'http://www.todayifoundout.com/wp-content/uploads/2013/08/pacman.jpg',
	    'pac-man'
),
(
      'Donkey Kong',
	    'Arcade',
	    'Donkey Kong is a video game series created by Shigeru Miyamoto. It follows the adventures of an ape named Donkey Kong and his clan of other apes and monkeys. The franchise primarily consists of platform games, originally single-screen action puzzle games and later side-scrolling platformers.',
	    '1981',
	    'https://media.wired.com/photos/5926ae95cefba457b079acf4/master/w_2560%2Cc_limit/DonkeyKong_TA.jpg',
	    'donkeyKong'
),
(     'Cabal',
	    'Action',
      'Cabal has one-player and two-player-simultaneous modes of gameplay. Each player assumes the role of an unnamed commando trying to destroy several enemy military bases. There are 5 stages with four screens each. The player starts with a stock of three lives and uses a gun with limitless ammunition and a fixed number of grenades to fend off enemy troops and attack the base',
      '1988',
      'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Cabal_arcadeflyer.png/220px-Cabal_arcadeflyer.png',
      'cabal'
),
(
	    'Asteroid',
	    'Arcade',
	    'The objective of Asteroids is to destroy asteroids and saucers. The player controls a triangular ship that can rotate left and right, fire shots straight forward, and thrust forward. Once the ship begins moving in a direction, it will continue in that direction for a time without player intervention unless the player applies thrust in a different direction. The ship eventually comes to a stop when not thrusting.',
	    '1979',
	    'https://wgm8.com/wp-content/uploads/2011/12/26-07-16-2.jpg',
	    'asteroid'
)

 INSERT INTO score (
		    player,
        date,
        score,
        game_id
)
  VALUES 
    ('Johan Andersson','2020-04-08','45678',1),
    ('Sven Melander','2005-04-12','56565',2),
    ('Anna Vikander','2000-02-02','98989',3),
    ('Per Svensson','2022-02-02','12123',4),
    ('Jessica Frisk','2022-02-02','76543',5)