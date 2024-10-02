# MongoDB

- RDMS - Relational Database Management System which store data in rows and columns
- But there is NoSQL database which store data in key value pairs and other formats.
- Radis store data in key value pairs
- Neo4j store data in graphs

## MongoDB
- MongoDB is a document database
- Json format is used to store in MongoDB
- And iternally it store data in BSON format
- BSON is binary JSON
- BSON is faster

## There is two way to make mongodb database 
- 1. Downloading the mongodb cummunity edition
- 2. Using mongodb cluster

## Inport data in mongodb
- Download the database (mflix)
- Make a new database in mongodb in the cluster
- Make a new collection in the same name of the database file name (ex mflix/users => users)
- Import data in the collection by clicking the "Inport" button and selectong the required data.

## Syntax
- Go the cli of the mongodb compass
- `db.users.find()` to get all the data of the user collection
- `db.myCollection.insertOne({"username" : "Manik"})` to insert the data in myCollection.
- If myCollection doesnt exit then it will create a new collection name myCollection and insert the data.
- `db.myCollection.drop()` to delete the collection
- `db.myCollection.insertMany([{"name" : "Manik"}, {"name" : "Sanket"}])` to insert many data together.
- `cls` to clear the screen

**Filter**
- `db.comments.find({email : "michiel_huisman@gameofthron.es"})` this will get the comment of michiel_huisman@gameofthron.es - filter
- `db.comments.find({email : "michiel_huisman@gameofthron.es"}).count()` this will get the count of comment of michiel_huisman@gameofthron.es
- **OR Query**
- `db.comments.find({$or : [{email : "michiel_huisman@gameofthron.es"}, {name : "Meera Reed"}]})` this will get the comment with email of michiel_huisman@gameofthron.es or name of meera reed
- `db.comments.find({email : "michiel_huisman@gameofthron.es", name : "Meera Reed"})` -AND Query

**Projection**
- `db.comments.find({}, {title : 1})` this will get and show only the title column of the comment
- `db.comments.find({}, {name : 0})` - this get all the properties except the name because `0` is used.

## Task 
- Create a query which will get all the moveis released after 2000 and have a rottentomato rating greater than 3
- MongoDB requires the correct dot notation to access nested fields within the document.
- So this is ❌
```
db.movies.find({year : {$gt : 2000}, tomatoes : { viewer : {rating : {$gt : 3}}}});
```

- This is right ✔️
```
db.movies.find({year : {$gt : 2000}, "tomatoes.viewer.rating" : {$gt : 3}});
```