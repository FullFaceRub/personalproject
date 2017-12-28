module.exports = {
    getCategory: (req,res)=>{
        const category = req.params.category;
        const db = req.app.get('db');

        db.readproductcategory([category]).then((category)=>{
            res.status(200).send(category)
        })
    },

    getProduct: (req,res)=>{
        const product = req.params.productid;
        const db = req.app.get('db');

        db.readsingleproduct([product]).then((product)=>{
            res.status(200).send(product)
        })
    },

    searchProduct: (req,res)=>{
        const product = req.params.name;
        const db = req.app.get('db');

        db.searchreadproduct([product]).then((product)=>{
            res.status(200).send(product)
        })
    }    
}