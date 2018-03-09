require('dotenv').config();
const passport = require('passport');

module.exports = {
    NoRedirect: (req, res, next) => {
        req.session.redirect = req.query.redirectto
        next();
    },

    authenticate: (req,res,next)=>{
        let auth = passport.authenticate('auth0', {
            successRedirect: `${req.session.redirect}`,
            failureRedirect: `${process.env.REDIRECT_STRING}failedlogin`,
        })

        auth(req,res,next);
    }
}