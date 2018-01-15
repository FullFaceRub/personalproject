module.exports = {
    getCategory: (req, res) => {
        const category = req.params.category;
        const db = req.app.get('db');

        db.readproductcategory([category]).then((category) => {
            res.status(200).send(category)
        })
    },

    getProduct: (req, res) => {
        console.log(req.params.productid)
        const product = req.params.productid;
        const db = req.app.get('db');

        db.readsingleproduct([product]).then((product) => {
            res.status(200).send(product)
        })
    },

    searchProduct: (req, res) => {
        const product = req.params.name;
        const db = req.app.get('db');

        db.searchreadproduct([product]).then((product) => {
            res.status(200).send(product)
        })
    },

    getCart: (req, res) => {
        console.log(req.params.user);
        const user = req.params.user;
        const db = req.app.get('db');

        db.getCart([user]).then((cart)=>{
            res.status(200).send(cart)
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
    }
}