CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT(11) NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(80) NOT NULL,
	devoured BOOLEAN NOT NULL,
	date DATETIME NOT NULL,
    PRIMARY KEY (id)
)