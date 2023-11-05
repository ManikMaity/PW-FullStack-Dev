const user = 
{
    "First Name" : "Suman Maity",
    username: "manik Maity",
    email: "h@g.com",
    age: 20,
    isAdmin: true,
    tea: ["lemon", "masala", "green tea"]
    

}

console.log(user.username);
console.log(user["username"]);

user.email = "manik";
console.log(user)

delete user.isAdmin;
console.log(user)


console.log(user["First Name"]);

console.log(Object.keys(user));
console.log(Object.values(user));

console.log(user.hasOwnProperty('tea'));