# FileFlow Backend - Getting Started

This document provides quick setup instructions for the FileFlow backend.

## Quick Start

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Setup environment:**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration if needed
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Start production server:**
   ```bash
   npm start
   ```

5. **Run tests:**
   ```bash
   npm test
   ```

## API Endpoints

The following endpoints are available (currently returning placeholder responses):

- `GET /health` - Health check endpoint
- `GET /api/v1` - API information
- `POST /api/v1/compress/image` - Image compression (placeholder)
- `POST /api/v1/convert/word-to-pdf` - Word to PDF conversion (placeholder)
- `POST /api/v1/pdf/merge` - PDF merge (placeholder)

## Project Structure

```
backend/
├── src/
│   ├── api/              # API route definitions
│   │   ├── compress.js   # Image compression routes
│   │   ├── convert.js    # Document conversion routes
│   │   ├── pdf.js        # PDF manipulation routes
│   │   └── index.js      # Main API router
│   ├── config/           # Configuration management
│   │   └── index.js      # Environment variables and settings
│   ├── controllers/      # Request handlers (to be implemented)
│   ├── jobs/             # Background job definitions (to be implemented)
│   ├── services/         # Business logic services (to be implemented)
│   ├── utils/            # Utility functions (to be implemented)
│   └── server.js         # Express server setup
├── tests/                # Test files
│   └── server.test.js    # Basic server tests
├── uploads/              # File upload directory (gitignored)
├── package.json          # Project dependencies and scripts
└── .env.example          # Environment configuration template
```

## Next Steps

The core backend structure is now set up. Future development will include:

1. Implementing actual file processing logic in services/
2. Adding background job processing with BullMQ
3. Implementing specific controllers for each endpoint
4. Adding more comprehensive tests
5. Setting up file validation and security measures