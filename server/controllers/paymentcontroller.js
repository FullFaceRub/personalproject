const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = {
    payment: (req, res, next) => {
        const amountArray = req.body.amount.toString().split('');
        const pennies = [];
        const { user, address, city, state, zipCode, total, email, phone, cart } = req.body;
        const date = new Date();
        var invoice;
        const db = req.app.get('db');
        for (var i = 0; i < amountArray.length; i++) {
            if (amountArray[i] === ".") {
                if (typeof amountArray[i + 1] === "string") {
                    pennies.push(amountArray[i + 1]);
                } else {
                    pennies.push("0");
                }
                if (typeof amountArray[i + 2] === "string") {
                    pennies.push(amountArray[i + 2]);
                } else {
                    pennies.push("0");
                }
                break;
            } else {
                pennies.push(amountArray[i])
            }
        }
        const convertedAmt = parseInt(pennies.join(''));

        const charge = stripe.charges.create({
            amount: convertedAmt, // amount in cents, again
            currency: 'usd',
            source: req.body.token.id,
            description: 'Test charge from react app'
        }, function (err, charge) {
            if (err) return res.sendStatus(500)
            db.createInvoice([user, date, address, city, state, zipCode, total, email, phone]).then((invoice) => {
                let invoiceId = invoice[0].invoice_id
                for(i=0;i<cart.length;i++){
                    let productId = cart[i].product_id;
                    let qty = cart[i].quantity
                    db.createInvoiceline([invoiceId, productId, qty]).then((line)=>{
                    })                    
                }
                db.clearCart([user]).then((emptyCart)=>{
                    var cart = []
                    db.getCart([user]).then(resp => {
                       cart.push(resp)
                        db.getCartTotal([user]).then(total => {
                            cart.push(total)
                            res.send(cart);
                        })
                    })

                })
            })

        });
    }
}