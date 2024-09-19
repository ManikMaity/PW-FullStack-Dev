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

-- Filtering on multiple columns
