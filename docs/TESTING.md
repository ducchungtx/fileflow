# Test Image for FileFlow

This is a simple test to verify the image compression functionality works correctly.

## Test Instructions

1. Create a test image or use any image file
2. Navigate to http://localhost:3000/compress/image
3. Upload the image using drag & drop or file picker
4. Adjust compression settings as needed
5. Click "Nén ảnh" to compress
6. Download and verify the compressed result

## Expected Results

- File size should be reduced based on quality settings
- Image should maintain visual quality appropriate to the compression level
- Multiple formats should be supported (JPEG, PNG, WebP)
- Dimension constraints should be applied if specified

## API Testing

You can also test the backend API directly:

```bash
curl -X POST http://localhost:5000/api/v1/compress/image \
  -F "image=@your-test-image.jpg" \
  -F "quality=70" \
  -F "format=jpeg" \
  --output compressed-result.jpg
```