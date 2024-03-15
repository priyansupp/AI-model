const router = require('express').Router();
const UserModel = require('../models/user');
const AIModel = require('../models/aimodel');
const { requireLoggedIn } = require('../middleware/auth_middleware');


// GET profile of user
router.get('/profile/:id', requireLoggedIn, async (req, res) => {
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


// GET all models created by a particular user
router.get('/models/profile/:id', requireLoggedIn, async (req, res) => {
    await AIModel.find({ userid: req.params.id })
    .then((docs) => {
        console.log(`The following docs are retrieved: ${docs}`);
        res.send(docs);
    })
    .catch(err => {
        console.log(`Documents could not be fetched. Error: ${err}`);
        res.send({
            error: "Documents could not be fetched."
        });
    });
})


// GET all models
router.get('/models', async (req, res) => {
    await AIModel.find()
    .then((docs) => {
        console.log(`The following docs are retrieved: ${docs}`);
        res.send(docs);
    })
    .catch(err => {
        console.log(`Documents could not be fetched. Error: ${err}`);
        res.send({
            error: "Documents could not be fetched."
        });
    });
});


// GET a particular model
router.get('/models/:id', async (req, res) => {
    await AIModel.findById(req.params.id)
    .then((doc) => {
        console.log(`The following docs are retrieved: ${doc}`);
        res.send(doc);
    })
    .catch(err => {
        console.log(`Document could not be fetched. Error: ${err}`);
        res.send({
            error: "Document could not be fetched."
        });
    });

});


// POST a model
router.post('/models', requireLoggedIn, async (req, res) => {
    // validate first

    const { Userid, Modelname, Desc, Url, Cat, Lib } = req.body;

    // encode image
    // const encodedImage = img.toString('base64');

    // store Document details
    const aimodel = new AIModel({
        userid: Userid,
        modelname: Modelname,
        desc: Desc,
        url: Url,
        category: Cat,
        library: Lib
    });
    await aimodel.save()
    .then((doc) => {
        console.log(`The document has been saved: ${doc}`);
        res.send({
            success: "Document saved successfully.",
            id: doc._id
        });
    })
    .catch(err => {
        console.log(`Document could not be saved. Error: ${err}`);
        res.send({
            error: "Document could not be saved."
        });
    });
});



module.exports = router;

