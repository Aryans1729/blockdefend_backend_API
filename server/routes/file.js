const express = require('express');
const router = express.Router();
const data = require("../data/data.json")
const {authenticateApiKey} = require("../lib/middlewares")

router.use(express.json());

// API to serve static JSON data
router.get('/data', authenticateApiKey,(req, res) => {
    res.send(data);
});
;

module.exports = router;