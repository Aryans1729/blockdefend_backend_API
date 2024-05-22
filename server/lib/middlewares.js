const { validationResult } = require("express-validator");


// Middleware function to check if the API key is provided and valid
exports.authenticateApiKey = (req, res, next) => {
  const providedApiKey = req.headers["x-api-key"];

  if (!providedApiKey || providedApiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: "Unauthorized: Invalid API key" });
  }
  next();
};

// Middleware function to validate request using express-validator
exports.validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
