const express = require('express')
const router = express.Router()
// const Subscriber = require('../models/subscriber')


// Getting all
router.get('/', (req, res) => {
    res.send('Hello World')
})

// Getting One
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
// Creating One

// Updating One

// Deleting One

module.exports = router