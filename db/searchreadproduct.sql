select * from products
where product_name like $1 or lower(product_description) like $2 or lower(product_features) like $2
order by product_id