const jwt = require('jsonwebtoken');
require('dotenv').config(); // Load environment variables

module.exports = function (req, res, next) {
  // Get the token from the request header
  const token = req.header('x-auth-token');

  // Check if token is not provided
  if (!token) {
    return res.status(401).json({ msg: 'Authentication failed. No token provided.' });
  }

  try {
    // Verify the token using the secret key from environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user payload to the request object
    req.user = decoded.user;
    next(); // Move on to the next middleware or route
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid.' });
  }
};
