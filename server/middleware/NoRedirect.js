const passport = require('passport');

module.exports = {
    NoRedirect: (req, res, next) => {
        console.log(req.query.redirectto);
        req.session.redirectorsomething = req.query.redirectto
        // req.session.redirectorsomething = "Dan is cool"
        next();
    },

    authenticate: (req,res,next)=>{
        let auth = passport.authenticate('auth0', {
            successRedirect: `http://localhost:3000/#${req.session.redirectorsomething}`,
            failureRedirect: 'http://localhost:3000/failedlogin',
        })

        auth(req,res,next);
    }
}