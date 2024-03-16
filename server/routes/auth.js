const router = require('express').Router();
const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



router.post('/register', async (req, res) => {
    const {email, name, password, username} = req.body;
    const hash = await bcrypt.hash(password, 10);
    const user = await UserModel.create({email: email, hashPass: hash, username: username, name: name});
    if(!user) {
        // console.log(user);
        res.json("Registration failed!!");
    } else {
        const token = jwt.sign({id: toString(user._id)}, "secret-key-here", {expiresIn: "1d"});
        res.cookie("token", token);
        res.status(201).json({user: user});
    }
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await UserModel.findOne({email: email});
    if(user) {
        bcrypt.compare(password, user.password, (match) => {
            if(!match) res.json({error: "Username and password is incorrect"});
            const token = jwt.sign({id: toString(user._id)}, "secret-key-here", {expiresIn: "1d"});
            res.cookie("token", token);
            console.log(user);
            res.status(201).json({user: user});
        });
    } else {
        console.log(user);
        res.json("Email is wrong");
    }

})

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.clearCookie('userid');
    res.redirect('/');
})

module.exports = router;
