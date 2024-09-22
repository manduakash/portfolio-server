const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 6969;
require('dotenv').config();
const cors = require('cors');

// Middleware to use @client side 
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json({ limit: "30mb" }));

// Middleware to parse x-www-form-urlencoded data
app.use(express.urlencoded({ limit: "30mb", extended: true }));

// Import routes
const projectRoutes = require('./src/routes/project');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Use routes
app.use('/api/project/', projectRoutes);

// Define a route
app.get('/', (req, res) => {
  res.send('Server is online!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
