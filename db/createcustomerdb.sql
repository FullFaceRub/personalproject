create table customers 
(customer_id serial primary key,
name varchar(180),
email varchar(180),
isadmin boolean,
auth_id text)