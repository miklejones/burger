const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    burger.all(data => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});
router.get('/api/burger', (req, res) => {
    burger.all(data => {
        console.log(`data: ${data}`);
        res.json(data);
    });
});

router.post('/api/burgers', (req, res) => {
    console.log(`burger name: ${req.body.name}`);
    burger.create([
        'burger_name'
    ], [
            req.body.name
        ], result => {
            res.json({ id: result.insertId })
        });


});

router.put('/api/burger/:id', (req, res) => {
    const condition = `id=${req.params.id}`;
    console.log(`condition: ${condition}`);
    console.log(`req.body: ${JSON.stringify(req.body.devoured)}`);
    console.log({ devoured: req.body.devoured });



    burger.update({ devoured: req.body.devoured }, condition, result => {
        console.log(`Changed Rows: ${result.changedRows}`);
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
router.delete('/api/burger/:id', (req, res) => {
    const condition = `id=${req.params.id}`;
    burger.delete(condition, result => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

});

module.exports = router;