insert into invoicelines
(invoice_id, product_id, quantity, product_price)
values ($1,$2,$3,(select product_price from products where product_id = $2))
returning *