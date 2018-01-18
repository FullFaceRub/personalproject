update carts
set quantity = $3
where customer_id = $1 and product_id=$2
returning *