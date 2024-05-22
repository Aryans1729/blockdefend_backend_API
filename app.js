const express = require("express");
const bodyParser = require("body-parser");
const fileRoute = require("./server/routes/file")
const imageRoute  = require("./server/routes/image")
const rateLimit = require('express-rate-limit');

require("dotenv").config();
const cors = require("cors")
const app = express();
app.use(bodyParser.json());
app.use(cors())

// Apply rate limiter to all routes
const limiter = rateLimit({
    windowMs:  60 * 1000, // 1 minute
    max: 10000, // limit each IP to 10k requests per windowMs
  });
  app.use(limiter);

// // Connect to MongoDB using Mongoose
// const mongoUrl = process.env.MONGO_URI;
// mongoose.connect(mongoUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// console.log("Connected to MongoDB");
const pathPrefix = "/api";

// Include routes for payment operations
app.use(pathPrefix, fileRoute);
app.use(pathPrefix, imageRoute);
module.exports = app;
