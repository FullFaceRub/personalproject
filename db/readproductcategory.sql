select * from products
where category_id = $1
order by product_id;