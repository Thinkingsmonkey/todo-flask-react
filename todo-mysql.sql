CREATE DATABASE todo;
USE todo;
DROP TABLE member;
DROP TABLE task;

DELETE FROM member WHERE username="test";

SHOW CREATE TABLE task;
SELECT * FROM member;
SELECT * FROM task;
INSERT INTO member(username, password_hash, salt, email) values("test", "test","testttt","sf@gmail.com");
CREATE TABLE member(
	id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(500) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);
INSERT INTO task(member_id, title) values(6, "ttt");
CREATE TABLE task(
	id INT PRIMARY KEY AUTO_INCREMENT,
	member_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    priority ENUM('High', 'Medium', 'Low') DEFAULT "Medium",
    state ENUM('Todo', 'Doing', 'Done') DEFAULT "Todo",
    start DATETIME DEFAULT CURRENT_TIMESTAMP,
    deadline DATETIME DEFAULT (NOW() + INTERVAL 1 DAY),
    description TEXT,
    FOREIGN KEY (member_id) REFERENCES member(id) ON DELETE CASCADE
);