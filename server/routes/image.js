const express = require('express');
const path = require('path');
const { authenticateApiKey } = require('../lib/middlewares');
const router = express.Router();

router.use(express.json());


/// Route to serve the image
router.get('/image', authenticateApiKey,(req, res) => {
    const imagePath = path.join(__dirname, '../../images', 'chrome-extension-image.jpg');
    res.sendFile(imagePath);
});

module.exports = router;