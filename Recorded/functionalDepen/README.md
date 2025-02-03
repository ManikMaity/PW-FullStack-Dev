# Functional Dependencies
- We represent a f d like `A -> B`
- A is functionally dependent on B
- B is dependent and A is determanal
- For every value of A, we can uniquely determine the value of B

## Axioms 
- Reflexivity
- Augmentation
- Transitivity - if A → B and B → C, then A → C

## Database Keys
- Keys are set of attributes that uniquely identify an entity.
- Super, Composite, Candiadate, Primary, foreign keys

### Super Keys
- A super key is a single attribute that uniquely identifies an table.
- Set of keys that are used to identify a row in a table.

### Candidate Keys
- The minimum set of attributes that can be used to identify a row in a table.
- Ex. - only eployee id or only employee phone

### Composite Keys
- A composite key is two or more than two attributes that uniquely identifies a table. the atributes that form composite key are not any key independently.

### Primary Keys
- There are more than one candidate key and we can chose one as primary key.

### Alternate Keys 
- All candidate keys other than the primary key.

### Foreign Keys
- A foreign key is a key in one table that refers to a primary key in another table.
- A table can have multiple foreign keys.

## Functional Dependency Closure (f*)
- For every functional dependency in a database, the closure is the set of all keys that are used to identify a row in a table.

Q. R → {A, B, C, D}
- AB → C
- BC → D
- CD → A

A* → {A}
AB -> {c}