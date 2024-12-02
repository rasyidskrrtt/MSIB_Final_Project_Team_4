const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/database');
const { port } = require('./config/env');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes'); 

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api', routes); 

// Error handler middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
