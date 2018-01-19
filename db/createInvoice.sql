insert into invoices
(customer_id, invoicedate, billingaddress, billingcity, billingstate, billingzipcode, total, email, phone)
values ($1,$2,$3,$4,$5,$6,$7,$8,$9)
returning *