# MySQL --> MongoDB
Convert all mysql query we have learned to mongodb

## Create functions

### Create Database in MongoDB
```
use myNewDatabase
```
- It will create a database named myNewDatabase if not exit 

### Create a collection in database 
```
db.createCollection("users")
```
- It will create a collection named users in database myNewDatabase if not exit

### Create a shema in mongodb
- Mongodb is shema less

### Insert many data in mongodb

```
db.users.insertMany([{"user" : "Suman"}, {"user" : "Swapan"}, {"user" : "Bubun"}]);
```

## View or get data

### Get all data in mongodb
```
db.users.find();
```
- This will return all data in users 

### Get one property from the data
```
db.users.find({}, {name : 1});
```
- This will return only name property from the users collection

### Get multiple properties from the data
```
db.users.find({}, {email : 1, password :  1});
```
- This will return email and password properties from the users collection

### Sort data assending
```
db.users.find().sort({name : 1});
```
- This will sort the data in users collection by name property in ascending order

### Sort data desending
```
db.users.find({}, {name : 1}).sort({name : -1});
```
- This will give name data and sort the data in users collection by name property in desending order

### Limit data
```
db.users.find({}, {name : 1, email : 1}).sort({name : 1}).limit(6)
```
- This will give name and email data and sort the data in users collection by name property in assending order and limit the data to 6

```
db.users.find({}, {name : 1, email : 1}).sort({name : 1}).skip(6).limit(6)
```
- This will skip the data to 6 and then limit the data to 6

### Get distinct data
```
db.comments.distinct("name")
```
- This will give distinct (unique) name data from the comments collection

### Filter data greater then 
```
db.movies.find({"imdb.rating" : {$gt : 5}})
```
- This will give data where imdb.rating is greater than 5

 ### And operorator
```
db.movies.find({"imdb.rating" : {$gt : 6, $lt : 8}})
```
- This will give data where imdb.rating is greater than 6 and less than 8
- **Anothetr way**
```
db.movies.find({
  $and: [
    {"imdb.rating": {$gt: 6}},
    {"imdb.rating": {$lt: 8}}
  ]
})
```

### Get all data of a specific property
```
db.comments.find({name : "Andrea Le"});
```

### Or operator
```
db.comments.find({$or : [{name : 'Andrea Le'}, {name : "Greg Powell"}]})
```

## Like operation using regex
```
db.users.find({
name : {
	$regex : /^a/i,
	$not : /t$/
}
})
```


## Update data

### Update one data
- Update include the `$set` operator when updating a specific field in a document in MongoDB.
```
db.comments.findOneAndUpdate({name : "Andrea Le"}, {$set : {name : "Andrea Le (Updated)"}});
```