/*Example Leaderboard for online game*/
CREATE TABLE player(
	player_id serial PRIMARY KEY,
	account_name VARCHAR(25) UNIQUE NOT NULL,
	email VARCHAR(150) UNIQUE NOT NULL,
    join_date DATE);


CREATE TABLE game(
	game_id serial PRIMARY KEY,
	game_name VARCHAR(25) UNIQUE NOT NULL,
	game_desc VARCHAR(255));


CREATE TABLE score(
	score_id serial PRIMARY KEY,
	game_id INT NOT NULL,
    player_id INT NOT NULL,
    score_value INT CHECK(score > 0),
	score_time date,
    CONSTRAINT score_game_id_fkey FOREIGN KEY (game_id)
        REFERENCES game (game_id) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION,
    CONSTRAINT score_player_id_fkey FOREIGN KEY (player_id)
        REFERENCES player (player_id) MATCH SIMPLE
        ON UPDATE NO ACTION ON DELETE NO ACTION);
	

INSERT INTO player(account_name, email, join_date)
VALUES ('jim1121','jim1121@examplegame.com',current_date),
('hyper32','hyper32@examplegame.com',current_date),
('exec55','exec55@examplegame.com',current_date),
('whyme','whyme@examplegame.com',current_date),
('hayah','hayah@examplegame.com',current_date),
('you2','you2@examplegame.com',current_date),
('forfun','forfun@examplegame.com',current_date),
('lol4','lol4@examplegame.com',current_date),
('gotya','gotya@examplegame.com',current_date),
('oohhh44','oohhh44@examplegame.com',current_date);


INSERT INTO game(game_name, game_desc)
VALUES ('Puzzle','Use available tranformations to create specified object'),
('Ice Cream Store','Use transform functions to complete customer orders'),
('Shape Rush','Match as many shapes as possible before the time runs out');


INSERT INTO score(game_id, player_id, score, score_time)
VALUES (1,1,100,current_timestamp),
(1,1,500,current_timestamp),
(1,1,10,current_timestamp),
(1,2,100,current_timestamp),
(1,3,200,current_timestamp),
(1,1,10,current_timestamp),
(2,2,100,current_timestamp),
(2,2,300,current_timestamp),
(1,1,1000,current_timestamp);

--Time saver (but there is certainly better ways)
INSERT INTO score(game_id, player_id, score, score_time)
VALUES ((SELECT floor(random()*(3-1+1))+1),(SELECT floor(random()*(10-1+1))+1),(SELECT floor(random()*(10000-1+1))+1),current_timestamp);


/*View Queries*/

--View Top 10 player scores
CREATE VIEW top10_scores AS
SELECT account_name,score_value
FROM score
INNER JOIN player ON player.player_id = score.player_id
ORDER BY score_value DESC
LIMIT 10;

--View each game's play count
CREATE VIEW game_play_count AS
SELECT MAX(game_name) AS game_name, COUNT(*) AS play_count
FROM score
INNER JOIN game ON game.game_id = score.game_id
GROUP BY score.game_id
ORDER BY play_count DESC;

--View all highest scores per game for the first player
CREATE VIEW player_highest_scores_per_game AS
SELECT MAX(account_name), MAX(game_name) AS game_name, MAX(score_value) AS highest_score
FROM score
INNER JOIN player ON player.player_id = score.player_id
INNER JOIN game ON game.game_id = score.game_id
WHERE score.player_id = 1
GROUP BY score.game_id
ORDER BY highest_score DESC;


