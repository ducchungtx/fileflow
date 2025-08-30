require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  redis: {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: parseInt(process.env.REDIS_PORT) || 6379,
  },
  upload: {
    maxFileSize: process.env.MAX_FILE_SIZE || '50mb',
    uploadPath: process.env.UPLOAD_PATH || './uploads',
  },
};