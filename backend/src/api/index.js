const express = require('express');
const router = express.Router();

// Import route modules
const compressRoutes = require('./compress');
const convertRoutes = require('./convert');
const pdfRoutes = require('./pdf');

// Route groups
router.use('/compress', compressRoutes);
router.use('/convert', convertRoutes);
router.use('/pdf', pdfRoutes);

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    name: 'FileFlow API',
    version: '1.0.0',
    endpoints: {
      compress: {
        'POST /api/v1/compress/image': 'Compress image files'
      },
      convert: {
        'POST /api/v1/convert/word-to-pdf': 'Convert Word documents to PDF'
      },
      pdf: {
        'POST /api/v1/pdf/merge': 'Merge multiple PDF files'
      }
    }
  });
});

module.exports = router;