SHOW DATABASES;

CREATE TABLE USERS (
    EMAIL VARCHAR(50),
    PASSWORD VARCHAR(50),
    USERNAME VARCHAR(50),
    ID INT PRIMARY KEY AUTO_INCREMENT
);

USE CLASSDB;

SELECT * FROM USERS;

INSERT INTO
    USERS (EMAIL, `PASSWORD`, `USERNAME`)
VALUES (
        "Sanket@pw.com",
        "sanket123",
        "Sanket Singh"
    ),
    (
        "manik@pw.com",
        "manik2003",
        "Manik Maity"
    );

-- TASK 1
CREATE TABLE POST (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    TITLE VARCHAR(40),
    BODY VARCHAR(1000),
    USER_ID VARCHAR(50),
    CREATED_AT DATE
);

SELECT * FROM POST;

INSERT INTO
    POST (
        `TITLE`,
        `BODY`,
        `USER_ID`,
        `CREATED_AT`
    )
VALUES (
        "WHAT IS YOUR PET'S NAME",
        "MY PET'S NAME IS PEPI",
        "MANIK2003",
        '2024-09-15'
    ),
    (
        "WHAT IS DEGREES",
        "MY HAVE A BCOM DEGREE",
        "MANK123",
        '2023-08-19'
    );

-- Filtering data in select query
SELECT * FROM POST WHERE `USER_ID` = "MANIK2003" AND `CREATED_AT` > "2024-09-01"; 

SELECT * FROM POST WHERE `TITLE` LIKE "%NAME%";
SELECT * FROM POST WHERE `BODY` LIKE "%MAITY";


-- Sort data in select query
SELECT * FROM POST ORDER BY CREATED_AT DESC;

-- This is to delete data.
-- Use condition to delete which data.
DELETE FROM POST WHERE ID = 4;

UPDATE POST SET `BODY` = "I AM A SELF TOUGHT DEVELOPER" WHERE ID = 7;