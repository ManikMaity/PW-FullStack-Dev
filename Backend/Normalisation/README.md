# Normalisation
- Normalisation is a technique which help us reduce retendancy of data in your database table.

1. 1NF (First Normal Form)
- Every atribute should be atomic.
- Atomic means that a single value can be stored in a column. 
- Like if we have a address table to store address of a user. we can make a seprate table for city, state and country. And use the pincode as a foreign key. and reference it from address table.

3. 3NF (Third Normal Form)
- All fields should be dependent on primary key.


---

## Ecommerce Database 

- User - id, name, email, password, contact
- Product - id, name, price, description, rating, category_id, manufacturer_id
- Category - id, name
- Manufacturer - id, name, website, contact, description
- ProductReview - id, product_id, user_id, is_varified
- Order - id, user_id, order_value, payment_type, status
- OrderItem - id, order_id, product_id, quantity


### H.W
- How to create indexes in mysql.
- How to create indexes with more than one property.