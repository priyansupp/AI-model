const jwt = require('jsonwebtoken');

// checks if user is logged in or not
const requireLoggedIn = (req, res, next) => {
    const token = req.cookies.token;
    if(token) {
        jwt.verify(token, process.env.JWTSECRET || "secret-key-here", (err, decodedToken) => {
            if(err) {
                console.log(`Token could not be verified. Err: ${err.message}`);
                res.redirect('/login');
            } else {
                console.log(`Token verified successfully. ${decodedToken}`);
                next();
            }
        })
    } else {
        res.redirect('/login');
    }
}


// checks 

module.exports = { requireLoggedIn };

