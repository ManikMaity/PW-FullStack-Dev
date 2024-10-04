# Transaction in Database

ACID property in RDBMS
- ACID means Atomicity, Consistency, Isolation, and Durability
- Any transaction is either committed or rolled back
- **Atomicity:** Atomicity gurantee the db excute all operations in a transaction or roollback. No partial commit is allowed.
- **Consistency:** Consistency means that the data in the database is consistent with the data in the memory. Date moves from a valid state to another valid state. Forain key helps us in consistency.
- **Isolation:** Isolation means that the transaction is not going to change the data in the database. If many people are accessing the same data, only one person will be able to change the data.
- Isolation levels : 
    1. Serializable - If one people is accessing the same data, only one person will be able to change the data. Most preferred.
    2. RepeatableRead - If one people is accessing the same data, multiple people will be able to change the data.
    3. ReadCommitted - If one people is accessing the same data, multiple people will be able to change the data.

- **Durability:** Durability means that the data in the database is durable. If the system crashes, the data in the database is not affected.