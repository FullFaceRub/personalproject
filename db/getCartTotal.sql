select sum(product_price*cast(quantity as numeric)) as total from products
inner join carts on products.product_id = carts.product_id
where carts.customer_id = $1
Group by carts.customer_id;