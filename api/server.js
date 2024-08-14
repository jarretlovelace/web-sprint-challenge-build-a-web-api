const express = require('express');
const projectsRouter = require('./projects/projects-router');
const actionsRouter = require('./actions/actions-router');
const { logger } = require('./projects/projects-middleware'); // Ensure logger is a function
require('dotenv').config(); // Loads environment variables from a .env file

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Custom logger middleware
app.use(logger); 

// Define routes
app.use('/api/projects', projectsRouter);
app.use('/api/actions', actionsRouter);

// Export the app to be used in other files, like server.js
module.exports = app;
