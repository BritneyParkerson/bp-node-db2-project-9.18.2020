const express = require("express");
const db = require("../data/dbConfig.js");
const router = express.Router();

router.get('/', (req, res) => {
    db.select('*')
    .from('specs')
    .then(specs => 
        res.status(200).json({data:specs}))
    .catch(error => console.log(error));
});



router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('specs')
    .where('id', id)
    .first()
    .then(specs => {
        res.json(200).json({ datta: specs })
    }) 
    .catch(error = console.log('Could not retrieve API ID'))
});

router.post('/', (req, res) => {
    const acctInfo = req.body;
    db('specs')
    .insert(acctInfo)
    .then(res.status(201).json({ data:acctInfo}))
    .catch(error => console.log('Could not post new info'))
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const Updates = req.body;
    db('specs')
    .where('id', id)
    .update(Updates)
    .then(count => {
        if(count > 0) {
            res.status(200).json({ data:count })
        } else {
            res.status(404).json('Oops! Something went wrong')
        }
    })
    .catch(error => console.log(error));
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('specs')
    .where('id', id)
    .delete()
    .then(count => {
        if(count > 0) {
            res.status(200).json({ data:count })
        } else {
            res.status(404).json('Could not delete file')
        }
    })
    .catch(error => console.log(error));
});

module.exports = router;