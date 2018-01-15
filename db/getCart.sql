select * from carts
inner join products on carts.product_id = products.product_id
where customer_id = $1