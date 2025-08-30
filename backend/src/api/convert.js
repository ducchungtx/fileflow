const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configure multer for file uploads
const upload = multer({
  dest: 'uploads/',
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB
  },
  fileFilter: (req, file, cb) => {
    // Accept Word documents
    const wordMimeTypes = [
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    
    if (wordMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only Word documents are allowed'), false);
    }
  },
});

// POST /api/v1/convert/word-to-pdf
router.post('/word-to-pdf', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        error: 'No file uploaded',
        message: 'Please upload a Word document'
      });
    }

    // TODO: Implement Word to PDF conversion logic
    res.json({
      message: 'Word to PDF conversion endpoint (not yet implemented)',
      file: {
        originalName: req.file.originalname,
        size: req.file.size,
        mimeType: req.file.mimetype,
        path: req.file.path
      }
    });
  } catch (error) {
    res.status(500).json({
      error: 'Word to PDF conversion failed',
      message: error.message
    });
  }
});

module.exports = router;