# DB-Assignment

## Questions and Answers

1. **Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.**
   
   The relationship between "Product" and "Product_Category" is Many-to-One, meaning many products can belong to one product category. This is represented by the "category_id" field in the "Product" schema, which references the primary key "id" in the "Product_Category" schema.

2. **How could you ensure that each product in the "Product" table has a valid category assigned to it?**
   
   To ensure that each product in the "Product" table has a valid category assigned to it, you can enforce referential integrity by using foreign key constraints in the database schema. In Mongoose, you can achieve this by defining a foreign key reference to the "Product_Category" model in the "Product" schema and ensuring that only existing category IDs can be assigned to the "category_id" field when creating or updating a product. Additionally, you can handle validation logic within your application's business logic or middleware to ensure that category assignments are valid before saving the product data.
