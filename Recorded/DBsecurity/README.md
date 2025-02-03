# DB Security
- We should restrict the access to the database to only those who need it.
- We can change the IP Addresses that are allowed to access the database.
- `0.0.0.0/0` is not a good practice. Means everyone can access the database.

## Role Based Access Control (RBAC)
- Only give access to those who need it.
- Three types of users:
    - Admin
    - Read and Write
    - Read Only
- We can also implement custom roles.
- We can also create custom roles in monngo db compass comand line.
```bash
use admin;
db.createRole({
    role : "custom_role",
    privileges : [
       {
           resource : {
               db : "db_name",
               collection : "collection_name"
           },
           actions : [
               "find",
               "insert"
           ]
       } 
    ]
});
```
