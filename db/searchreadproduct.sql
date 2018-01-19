select * from products
where product_name like $1
order by product_id