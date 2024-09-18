# Databases
- The traditional way to store data is file storage.
- Databases will give you an organized way to store and retrieve data.
- Example of a database: MySQL, PostgreSQL, SQLite, etc.

## Types of Databases
- Relational Database (RDMS) (Sql)
- No-SQL Database (No-Sql)

## Database Management Systems (DBMS) VS Databases
- Database Management System (DBMS) is a software that manages and stores data.
- Database is a collection of data.

## SQL
- SQL stands for Structured Query Language
- Structured Query Language (SQL) is a language that is used to communicate with databases.
- SQL is kind of like a starndard of databases.

## RDBMS (Relational Database Management System)
- Relational Database Management System (RDBMS) is a software that manages and stores data in a relational database.
- Example of RDBMS: MySQL, PostgreSQL, SQLite, etc.
- All of them depends on SQL standards but they query syntax is different.
- All of them store data in table like format.
- ACID compliance (Atomicity, Consistency, Isolation, Durability).


## NoSQL (Non-Relational Database Management System)
- Example of NoSQL: MongoDB, Redis, etc.
- NoSQL databases are not based on SQL but they are based on different query syntax.
- They don't store data in table like format but they store data in different different formats.
- MongoDB store data in JSON like format.

## MySQL
- Whenever we download any database in local mechine there is a db server like localhost3306
- By requiring this database server we can access any database in local mechine.
- We have to create a mysql databese instance by using the mysql workbench.
- We can write the query in mysql workbench.
- Mysql query is mostly case insensitive but uppercase is preferred.
- Every query should end with semicolon (;).
- We can use VScode entention to  connect to mysql database and write query inside vscode.

### Syntax
- Create a database and comment.
```sql
CREATE DATABASE CLASSDB; -- Create a database in mysql (This is a comment )
```
- Show all the databases and create database if it doesn't exist.
```sql
SHOW DATABASES; -- List all the db in mechine

CREATE DATABASE IF NOT EXISTS CLASSDB;
```

```sql
DROP DATABASE classdb; -- Delete a database
```
```sql
-- Select a database to work
-- After running this query we will work inside this database
USE CLASSDB;
```

```sql
-- Show all the tables in the database
SHOW TABLES;
```
```sql
CREATE TABLE USERS (
    EMAIL VARCHAR(50),
    PASSWORD VARCHAR(50),
    USERNAME VARCHAR(40),
    ID INT PRIMARY KEY AUTO_INCREMENT -- UNIQUE IDENTIFIER -> "PRIMARY KEY", AUTO_INCREMENT -> "IT WILL AUTO INCREMENT INCASE NO VALUE PROVIDED"
); -- This will create a tabele user. This is a skema or blueprint 
```

```sql
DESC USERS; -- This will show the structure of the table
```

```sql
INSERT INTO USERS (EMAIL, PASSWORD, USERNAME) VALUES ("manikmaity@gmail.com", "1234", "Manik Maity");
-- This command insert data to the table columns
```

```sql
SELECT * FROM USERS;
-- This will show all the data in the table
```

```sql
INSERT INTO USERS (EMAIL, PASSWORD, USERNAME) VALUES ("hitam@gmail.com", "123", "Hitam"), ("kiran@gmail.com", "kiran12", "Kiran"), ("subhas@gmail.com", "subhas12", "Shibas"); -- Bulk insert, insert multiple rows togather
```

- In sql database data is stored in rows and columns.
- Every column store one property of data. (Like name, age, address, etc.)
- Rows store one individual record for the property. (Like manik, 21, Kolktata, etc.)
- SQL support datatype to store data.
- Numaric data type: int, float, double, decimal
- String data type: char, varchar, text
- JSON data type: json
- Date and time data type: date, time, datetime

### Note -
- Its not like no-sql are better than sql databases.
- Its not like sql databases are better than no-sql databases.
- Its more like for what purpose you are using the database.