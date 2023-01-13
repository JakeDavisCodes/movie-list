

USE movieList;

CREATE TABLE movies (
  id INTEGER(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  year INTEGER(4),
  director VARCHAR(20),
  runtime INTEGER(3),
  score INTEGER(3),
  PRIMARY KEY (id)
);

INSERT INTO movies (title) VALUES ('Mean Girls');
INSERT INTO movies (title) VALUES ('Hackers');
INSERT INTO movies (title) VALUES ('The Grey');
INSERT INTO movies (title) VALUES ('Sunshine');
INSERT INTO movies (title) VALUES ('Ex Machina');

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

