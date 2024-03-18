const router = require('express').Router();
const AIModel = require('../models/aimodel');
const { requireLoggedIn } = require('../middleware/auth_middleware');

// GET all models created by a particular user
router.get('/profile/:id', async (req, res) => {
    await AIModel.find({ userid: req.params.id })
    .then((docs) => {
        // console.log(`The following docs are retrieved: ${docs}`);
        res.send(docs);
    })
    .catch(err => {
        // console.log(`Documents could not be fetched. Error: ${err}`);
        res.send({
            error: "Documents could not be fetched."
        });
    });
})


// GET all models
router.get('/', async (req, res) => {
    await AIModel.find()
    .then((docs) => {
        // console.log(`The following docs are retrieved: ${docs}`);
        res.send(docs);
    })
    .catch(err => {
        // console.log(`Documents could not be fetched. Error: ${err}`);
        res.send({
            error: "Documents could not be fetched."
        });
    });
});


// GET a particular model
router.get('/:id', async (req, res) => {
    await AIModel.findById(req.params.id)
    .then((doc) => {
        // console.log(`The following docs are retrieved: ${doc}`);
        res.send(doc);
    })
    .catch(err => {
        // console.log(`Document could not be fetched. Error: ${err}`);
        res.send({
            error: "Document could not be fetched."
        });
    });

});


// POST a model
router.post('/', requireLoggedIn, async (req, res) => {
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
        // console.log(`The document has been saved: ${doc}`);
        res.send({
            success: "Document saved successfully.",
            id: doc._id
        });
    })
    .catch(err => {
        // console.log(`Document could not be saved. Error: ${err}`);
        res.send({
            error: "Document could not be saved."
        });
    });
});

router.put('/:id', async (req, res) => {
    const { likes, rating } = req.body;
    await AIModel.findById(req.params.id)
    .then(async doc => {
        doc.likes= likes;
        if(!rating) {
            doc.rating = (doc.count * doc.rating + rating) / (doc.count + 1);
            doc.count += 1;
        }
        await doc.save()
        .then(() => {
            // console.log('Successfully updated');
            res.send({
                success: "Successfully updated"
            });
        })
        .catch(e => {
            // console.log(`Error: ${e}`);
            res.send({
                error: "Failed to update"
            });
        })
    })
    .catch(e => {
        // console.log(`Error: ${e}`);
        res.send({
            error: "Could not find specified document"
        });
    });
})

module.exports = router;
