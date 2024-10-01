-- AIRBNB DATABASE
CREATE DATABASE airbnb;

USE airbnb;

CREATE TABLE properties (
    id INT PRIMARY KEY,
    city VARCHAR(50),
    country VARCHAR(50),
    number_of_rooms INT,
    year_listed YEAR
);

INSERT INTO properties (id, city, country, number_of_rooms, year_listed)
VALUES
(1, 'Paris', 'France', 5, 2018),
(2, 'Tokyo', 'Japan', 2, 2017),
(3, 'New York', 'USA', 2, 2022);

INSERT INTO properties (id, city, country, number_of_rooms, year_listed)
VALUES
(4, 'London', 'UK', 3, 2021),
(5, 'Berlin', 'Germany', 4, 2019),
(6, 'Sydney', 'Australia', 6, 2020),
(7, 'Rome', 'Italy', 2, 2016),
(8, 'Dubai', 'UAE', 8, 2023);


-- Get all the columns from a table
SELECT * FROM properties;

-- Return the city column from the table
SELECT CITY FROM properties;

-- Get the city and year_listed columns from the table
SELECT CITY, YEAR_LISTED FROM PROPERTIES;

-- Get the listing id, city, ordered by the number_of_rooms in ascending order
SELECT ID, CITY, NUMBER_OF_ROOMS FROM PROPERTIES ORDER BY NUMBER_OF_ROOMS ASC;

-- Get the listing id, city, ordered by the number_of_rooms in descending order
SELECT ID, CITY, NUMBER_OF_ROOMS FROM PROPERTIES ORDER BY NUMBER_OF_ROOMS DESC;

-- Get the first 5 rows from airbnb_listings
SELECT * FROM PROPERTIES LIMIT 5;

-- Get a unique list of cities where there are listings
SELECT DISTINCT CITY FROM PROPERTIES;

-- Filtering on numeric columns

-- Get all the listings where number_of_rooms is more or equal to 3
SELECT * FROM PROPERTIES WHERE NUMBER_OF_ROOMS >= 3;

-- Get all the listings where number_of_rooms is more than 3
SELECT * FROM PROPERTIES WHERE NUMBER_OF_ROOMS > 3;

-- Filtering columns within a range—Get all the listings with 3 to 6 rooms
SELECT * FROM PROPERTIES WHERE NUMBER_OF_ROOMS BETWEEN 3 AND 6;


-- Get all the listings that are based in 'Paris'
SELECT * FROM PROPERTIES WHERE CITY = "Paris";

-- Filter one column on many conditions—Get the listings based in the 'USA' and in ‘France’
SELECT * FROM PROPERTIES WHERE COUNTRY = "USA" OR COUNTRY = "France";

SELECT * FROM PROPERTIES WHERE COUNTRY IN ("USA", "France");

-- Get all listings where city starts with "j" and where it does not end with "t"
SELECT * FROM PROPERTIES WHERE CITY LIKE "d%" AND CITY NOT LIKE "%k";

-- Update the firts
UPDATE properties SET city = "Paris (Updated)" WHERE id = 1;

SELECT * FROM properties LIMIT 5 OFFSET 2;

SELECT * FROM properties LIMIT 1 OFFSET 3;


CREATE TABLE COMMENTS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    comment TEXT,
    USER_ID INT,
    POST_ID INT,
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO COMMENTS (comment, USER_ID, POST_ID)
VALUES
("Comment 1", 1, 1),
("Comment 2", 2, 1),
("Comment 3", 3, 1),
("Comment 4", 1, 2),
("Comment 5", 2, 2),
("Comment 6", 3, 2),
("Comment 7", 1, 3),
("Comment 8", 2, 3),
("Comment 9", 3, 3);

-- This will delete all the comments data.
-- This not the preferred way.
DELETE FROM comments;

SELECT * FROM comments;

DROP TABLE COMMENTS;

-- faster way to delete all the data.
-- It internally drops the table and recereates it.
TRUNCATE TABLE COMMENTS;


CREATE TABLE LIKES (
    id INT PRIMARY KEY AUTO_INCREMENT,
    USER_ID INT,
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    LIKEABLE_ID INT,
    LIKEABLE_TYPE ENUM("Post", "Comment"),-- This will be used so it take the value "Post" or "Comment"
    FOREIGN KEY (USER_ID) REFERENCES USERS(ID) -- This will check
);

INSERT INTO LIKES (USER_ID, LIKEABLE_ID, LIKEABLE_TYPE)
VALUES
(2, 1, "Post"),
(2, 1, "Post"),
(3, 1, "Post"),
(1, 2, "Post"),
(2, 2, "Post"),
(3, 2, "Post"),
(1, 3, "Post"),
(2, 3, "Post"),
(3, 3, "Post"),
(1, 1, "Comment"),
(2, 1, "Comment"),
(3, 1, "Comment"),
(1, 2, "Comment"),
(2, 2, "Comment"),
(3, 2, "Comment"),
(1, 3, "Comment"),
(2, 3, "Comment"),
(3, 3, "Comment");

DROP TABLE likes;

SELECT * FROM LIKES;

-- If in future we wnat to add shorts like also
-- We can alter the table 
ALTER TABLE likes MODIFY LIKEABLE_TYPE ENUM("Post", "Comment", "Short");
INSERT INTO likes (USER_ID, LIKEABLE_ID, LIKEABLE_TYPE) VALUES (1, 4, "Short");

-- If we try to add somthing which isnt in enum
-- Then it will throw error

INSERT INTO likes (USER_ID, LIKEABLE_ID, LIKEABLE_TYPE) VALUES (1, 4, "Whatever");
-- Data truncated for column 'LIKEABLE TYPE' at row 1;

SELECT * FROM users;


ALTER TABLE likes ADD COLUMN USERNAME VARCHAR(50);

ALTER TABLE likes DROP COLUMN USERNAME;

SELECT * FROM likes JOIN users ON likes.USER_ID = users.ID JOIN comments ON comments.`USER_ID` = likes.`USER_ID`;