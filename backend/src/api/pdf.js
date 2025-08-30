const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB per file
  },
  fileFilter: (req, file, cb) => {
    // Accept PDF files
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'), false);
    }
  },
});

// POST /api/v1/pdf/merge
router.post('/merge', upload.array('files', 10), (req, res) => {
  try {
    if (!req.files || req.files.length < 2) {
      return res.status(400).json({
        error: 'Insufficient files',
        message: 'Please upload at least 2 PDF files to merge'
      });
    }

    // TODO: Implement PDF merge logic
    res.json({
      message: 'PDF merge endpoint (not yet implemented)',
      files: req.files.map(file => ({
        originalName: file.originalname,
        size: file.size,
        mimeType: file.mimetype,
        path: file.path
      }))
    });
  } catch (error) {
    res.status(500).json({
      error: 'PDF merge failed',
      message: error.message
    });
  }
});

module.exports = router;