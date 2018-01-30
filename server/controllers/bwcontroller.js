const underscore = require('underscore');

module.exports = {
    getCategory: (req, res) => {
        const category = req.params.category;
        const db = req.app.get('db');

        db.readproductcategory([category]).then((category) => {
            res.status(200).send(category)
        })
    },

    getProduct: (req, res) => {
        const product = req.params.productid;
        const db = req.app.get('db');

        db.readsingleproduct([product]).then((product) => {
            res.status(200).send(product)
        })
    },

    searchProduct: (req, res) => {
        const standard = req.params.query.toUpperCase();
        const lower = req.params.query.toLowerCase();
        const product = '%' + standard + '%';
        const desc = '%' + lower + '%';
        const db = req.app.get('db');

        db.searchreadproduct([product, desc]).then((product) => {
            res.status(200).send(product)
        })
    },

    getCart: (req, res) => {
        const user = req.params.user;
        const db = req.app.get('db');

        db.getCart([+user]).then((cart) => {
            res.status(200).send(cart)
        })
    },

    getCartTotal: (req, res) => {
        const user = req.params.user;
        const db = req.app.get('db');

        db.getCartTotal([user]).then((total) => {
            res.status(200).send(total);
        })
    },

    addToCart: (req, res) => {
        const user = req.params.user;
        const product = req.params.productid;
        const quantity = req.params.quantity;
        const db = req.app.get('db');

        db.getCart([user]).then((carts) => {
            let newQty;
            for (var i = 0; i < carts.length; i++) {
                if (carts[i].customer_id == user && carts[i].product_id == product) {
                    newQty = Number(quantity) + Number(carts[i].quantity)


                }

            }
            if (newQty) {
                db.changeQuantity([+user, +product, +newQty]).then((qty) => {
                    res.send(qty)
                })
            } else {
                db.addToCart([user, product, quantity]).then((product) => {
                    res.status(200).send(product)
                })
            }
        })
    },

    changeQuantity: (req, res) => {
        const user = req.params.user;
        const product = req.params.productid;
        const quantity = Number(req.params.quantity);
        const db = req.app.get('db');
        var data = {};
        db.changeQuantity([+user, +product, +quantity]).then((quantity) => {
            db.getCart([+user]).then((cart) => {
                db.getCartTotal([+user]).then((total) => {
                    data.cart = cart;
                    data.total = total
                    res.status(200).send(data)
                })
            })
        })
    },

    removeFromCart: (req, res) => {
        const user = req.params.user;
        const product = req.params.productid;
        const db = req.app.get('db');
        var data = {};
        db.removeFromCart([+user, +product]).then((quantity) => {
            db.getCart([+user]).then((cart) => {
                db.getCartTotal([+user]).then((total) => {
                    data.cart = cart;
                    data.total = total;
                    res.status(200).send(data);
                })
            })
        })
    },

    getInspired: (req, res) => {
        const db = req.app.get('db');

        db.getInspired().then((inspiration) => {
            res.status(200).send(inspiration)
        })
    },

    getOrders: (req, res) => {
        const db = req.app.get('db');
        const { user } = req.params

        db.getInvoices([+user]).then((orders) => {
            var ordersArr = [];
            for (var i in orders) {
                ordersArr.push(orders[i])
            }
            var results = [];
            for (var i = 0, obj = {}; i < ordersArr.length; i++) {
                if (ordersArr[i].invoice_id != obj.invoiceNumber) {
                    obj = {
                        invoiceNumber: ordersArr[i].invoice_id,
                        invoiceDate: ordersArr[i].invoicedate,
                        total: ordersArr[i].total,
                        invoicelines: []
                    }
                    results.push(obj)
                }

                obj.invoicelines.push({
                    invoiceLine: ordersArr[i].invoiceline_id,
                    image: ordersArr[i].product_image,
                    product: ordersArr[i].product_name,
                    price: ordersArr[i].product_price,
                    quantity: ordersArr[i].quantity
                })
            }


            res.status(200).send(results)
        })
    },

    updateCart: (req, res, next) => {
        const db = req.app.get('db');
        const { user, product, quantity } = req.params;

        db.updateCart([user, product, quantity]).then((cart) => {
            res.status(200).send(cart)
        })
    }
}