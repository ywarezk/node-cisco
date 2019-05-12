const router = require('express').Router();
const Tasks = require('../models').tasks;

// /tasks/hello

router.get('', async function(req, res) {
    // Tasks.findAll().then(function(tasks) {
    //     res.json(tasks);
    // })
    const tasks = await Tasks.findAll();
    res.json(tasks);
});

router.post('', async function(req, res) {
    const task = await Tasks.insert(req.body);
    res.json(task);
});

module.exports = router;