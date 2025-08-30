const sharp = require('sharp');

const compressImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const { quality = 80, format = 'auto', maxWidth, maxHeight } = req.body;

    // Parse quality as integer
    const qualityInt = parseInt(quality);
    if (isNaN(qualityInt) || qualityInt < 1 || qualityInt > 100) {
      return res.status(400).json({ error: 'Quality must be between 1 and 100' });
    }

    let sharpInstance = sharp(req.file.buffer);

    // Get image metadata
    const metadata = await sharpInstance.metadata();
    
    // Resize if dimensions are specified
    if (maxWidth || maxHeight) {
      const resizeOptions = {};
      if (maxWidth) resizeOptions.width = parseInt(maxWidth);
      if (maxHeight) resizeOptions.height = parseInt(maxHeight);
      resizeOptions.fit = 'inside';
      resizeOptions.withoutEnlargement = true;
      
      sharpInstance = sharpInstance.resize(resizeOptions);
    }

    // Determine output format
    let outputFormat = format === 'auto' ? metadata.format : format;
    let mimeType;

    // Apply compression based on format
    switch (outputFormat) {
      case 'jpeg':
      case 'jpg':
        sharpInstance = sharpInstance.jpeg({ quality: qualityInt });
        mimeType = 'image/jpeg';
        break;
      case 'png':
        sharpInstance = sharpInstance.png({ quality: qualityInt });
        mimeType = 'image/png';
        break;
      case 'webp':
        sharpInstance = sharpInstance.webp({ quality: qualityInt });
        mimeType = 'image/webp';
        break;
      default:
        // Default to jpeg for unknown formats
        sharpInstance = sharpInstance.jpeg({ quality: qualityInt });
        mimeType = 'image/jpeg';
        outputFormat = 'jpeg';
    }

    // Process the image
    const processedImageBuffer = await sharpInstance.toBuffer();

    // Set response headers
    res.set({
      'Content-Type': mimeType,
      'Content-Length': processedImageBuffer.length,
      'Content-Disposition': `attachment; filename="compressed_${req.file.originalname}"`
    });

    // Send the compressed image
    res.send(processedImageBuffer);

  } catch (error) {
    console.error('Image compression error:', error);
    res.status(500).json({ error: 'Failed to compress image: ' + error.message });
  }
};

module.exports = {
  compressImage
};