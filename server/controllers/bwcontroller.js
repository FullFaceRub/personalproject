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
        const product = '%' + req.params.query + '%';
        const db = req.app.get('db');

        db.searchreadproduct([product]).then((product) => {
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

        db.addToCart([user, product, quantity]).then((product) => {
            res.status(200).send(product)
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
                    data.cart=cart;
                    data.total = total
                    res.status(200).send(data)
                })
            })
        })
    },

    removeFromCart: (req,res) => {
        const user = req.params.user;
        const product = req.params.productid;
        const db = req.app.get('db');
        var data = {};
        db.removeFromCart([+user,+product]).then((quantity)=>{
            db.getCart([+user]).then((cart) => {
                db.getCartTotal([+user]).then((total) => {
                    data.cart=cart;
                    data.total=total;
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

    createInvoice: (req,res) => {
        
    }
}