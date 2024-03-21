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

router.patch('/:id', requireLoggedIn, async (req, res) => {
    const { likedBy, rating } = req.body;
    await AIModel.findById(req.params.id)
    .then(async doc => {
        if(likedBy) {
            if(doc.likes.includes(likedBy)) {
                const index = doc.likes.indexOf(likedBy);
                if (index > -1) { // only splice array when item is found
                    doc.likes.splice(index, 1); // 2nd parameter means remove one item only
                }
            } else {
                doc.likes.push(likedBy);
            }
        }
        if(rating) {
            doc.rating = (doc.count * doc.rating + rating) / (doc.count + 1);
            doc.count += 1;
        }
        await doc.save() 
        .then(() => {
            // console.log('Successfully updated');
            res.send({
                success: "Successfully updated",
                model: doc
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
            error: `Could not find specified document: ${e}`
        });
    });
})

module.exports = router;
