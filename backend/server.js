const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
const auth = require('./auth'); // Import your authentication middleware

dotenv.config(); // Load environment variables from a .env file

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express Server!');
});

// Protect the /save-template route with JWT authentication
app.post('/save-template', auth, async (req, res) => {
  // Your code for saving templates here (for authenticated users)
});

// Protect the /edit-template route with JWT authentication
app.put('/edit-template/:templateId', auth, async (req, res) => {
  // Your code for editing templates here (for authenticated users)
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
