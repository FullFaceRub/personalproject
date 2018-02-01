insert into customers
(name,auth_id)
values($1,$2)
returning *