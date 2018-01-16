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
        const product = req.params.name;
        const db = req.app.get('db');

        db.searchreadproduct([product]).then((product) => {
            res.status(200).send(product)
        })
    },

    getCart: (req, res) => {
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
    },

    changeQuantity: (req, res) => {
        const user = req.params.user;
        const product = req.params.productid;
        const quantity = req.params.quantity;
        const db = req.app.get('db');
        console.log(user);

        db.changeQuantity([user,product,quantity]).then((quantity)=>{
            res.status(200).send(quantity)
        })
    },

    payment: (req, res, next)=>{
        //convert amount to pennies
        const amountArray = req.body.amount.toString().split('');
        const pennies = [];
        for (var i = 0; i < amountArray.length; i++) {
          if(amountArray[i] === ".") {
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
      }, function(err, charge) {
          if (err) return res.sendStatus(500)
          return res.sendStatus(200);
        // if (err && err.type === 'StripeCardError') {
        //   // The card has been declined
        // }
      });
      }
}