const passport = require('passport');

module.exports = {
    NoRedirect: (req, res, next) => {
        req.session.redirect = req.query.redirectto
        next();
    },

    authenticate: (req,res,next)=>{
        let auth = passport.authenticate('auth0', {
            successRedirect: `http://localhost:3000/#${req.session.redirect}`,
            failureRedirect: 'http://localhost:3000/failedlogin',
        })

        auth(req,res,next);
    }
}