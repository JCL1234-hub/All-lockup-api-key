const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const routes = require('./routes/index.routes');
const { errorHandler, notFoundHandler } = require('./middlewares/errorHandler.middleware');

dotenv.config();

const app = express();

// Security Middlewares
app.use(helmet()); // Sets security HTTP headers, protects against XSS
app.use(cors()); // Enables CORS
app.use(express.json({ limit: '10kb' })); // Body parser with size limit to prevent payload attacks
app.use(express.urlencoded({ extended: true }));

// Request Logging
app.use(morgan('dev'));

// Trust proxy for rate limiting (important for Vercel)
app.set('trust proxy', 1);

// Mount Routes
app.use('/api', routes);

// Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
