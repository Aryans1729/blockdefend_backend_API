const express = require('express');
const path = require('path');
const { authenticateApiKey } = require('../lib/middlewares');
const router = express.Router();

router.use(express.json());


// /// Route to serve the image
// router.get('/image', authenticateApiKey,(req, res) => {
//     const imagePath = path.join(__dirname, '../../images', 'chrome-extension-image.jpg');
//     res.sendFile(imagePath);
// });

const imageUrl = "https://techpp.com/wp-content/uploads/2023/02/Best-image-downloader-chrome-extensions.jpg";  // Replace this with the actual URL of your image

router.get('/get_data', (req, res) => {
    const placeAd = req.query.placeAd === 'true';
    const image = placeAd ? imageUrl : '';

    const response = {
        image: image,
        placeAd: placeAd
    };

    res.json(response);
});


module.exports = router;