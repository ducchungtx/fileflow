const express = require('express');
const cors = require('cors');
const config = require('./config');

const app = express();

// Middleware
app.use(cors({
  origin: config.corsOrigin,
  credentials: true,
}));

app.use(express.json({ limit: config.upload.maxFileSize }));
app.use(express.urlencoded({ extended: true, limit: config.upload.maxFileSize }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'FileFlow Backend API is running',
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use('/api/v1', require('./api'));

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl,
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message,
  });
});

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`🚀 FileFlow Backend API Server is running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;