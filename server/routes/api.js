const router = require('express').Router();
const UserModel = require('../models/user');
const { requireLoggedIn } = require('../middleware/auth_middleware');
const blogRoutes = require('./blogs');
const modelRoutes = require('./models');


// GET profile of user
router.get('/profile/:id', async (req, res) => {
    await UserModel.findById(req.params.id)
    .then((doc) => {
        console.log(`The following docs are retrieved: ${doc}`);
        res.send(doc);
    })
    .catch(err => {
        console.log(`Profile could not be fetched. Error: ${err}`);
        res.send({
            error: "Profile could not be fetched."
        });
    });
});


router.use('/models', modelRoutes);
router.use('/blogs', blogRoutes);


module.exports = router;

