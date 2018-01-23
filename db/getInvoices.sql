select invoices.invoice_id, invoices.invoicedate, invoices.total, invoicelines.invoiceline_id, products.product_image, products.product_name, invoicelines.product_price, invoicelines.quantity from invoices
inner join invoicelines on invoices.invoice_id = invoicelines.invoice_id
inner join products on invoicelines.product_id = products.product_id
where customer_id = $1
order by invoices.invoice_id desc