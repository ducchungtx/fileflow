'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { compressImage } from '@/lib/api';

// Define types for our state
interface CompressResult {
  url: string;
  size: string;
  originalSize: string;
  compressionRatio: number;
  name: string;
}

export default function CompressPage() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [quality, setQuality] = useState<number>(80);
  const [format, setFormat] = useState<string>('auto');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CompressResult | null>(null);

  // File drop handler
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    setResult(null);
    
    const selectedFile = acceptedFiles[0];
    if (!selectedFile) return;
    
    // Create a preview URL
    const previewUrl = URL.createObjectURL(selectedFile);
    setFile(selectedFile);
    setPreview(previewUrl);
  }, []);

  // Configure dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxFiles: 1,
    multiple: false
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select an image file first');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // Call the API to compress the image
      const response = await compressImage(file, {
        quality: quality,
        format: format
      });
      
      // Create a download URL from the response blob
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      
      // Show the compressed result
      setResult({
        url: downloadUrl,
        size: formatFileSize(blob.size),
        originalSize: formatFileSize(file.size),
        compressionRatio: Math.round((1 - (blob.size / file.size)) * 100),
        name: `compressed_${file.name}`
      });
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to compress the image');
      console.error('Compression error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Format file size to human-readable format
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Compression</h1>
      <p className="text-center text-muted-foreground mb-8">
        Reduce image file size while maintaining quality
      </p>

      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div 
          {...getRootProps()} 
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/20 hover:border-primary/50'}
            ${file ? 'bg-muted/20' : ''}
          `}
        >
          <input {...getInputProps()} />
          
          {preview ? (
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-xs h-64 mb-4">
                <Image 
                  src={preview} 
                  alt="Preview" 
                  fill
                  className="object-contain rounded" 
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {file?.name} ({formatFileSize(file?.size || 0)})
              </p>
              <p className="text-xs mt-2">Click or drag to replace</p>
            </div>
          ) : (
            <div className="py-8">
              {isDragActive ? (
                <p>Drop the image here...</p>
              ) : (
                <div>
                  <p className="mb-2">Drag & drop an image here, or click to select</p>
                  <p className="text-sm text-muted-foreground">
                    Supports JPG, PNG, WEBP (Max 10MB)
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="quality">
                Quality: {quality}%
              </label>
              <input
                id="quality"
                type="range"
                min="1"
                max="100"
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-full"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Lower quality = smaller file size
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="format">
                Output Format
              </label>
              <select
                id="format"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="w-full p-2 rounded-md border border-input bg-background"
              >
                <option value="auto">Auto (Same as input)</option>
                <option value="jpeg">JPEG</option>
                <option value="png">PNG</option>
                <option value="webp">WEBP</option>
              </select>
            </div>
          </div>
          
          {error && (
            <div className="mb-4 p-3 bg-destructive/10 text-destructive rounded-md">
              {error}
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={!file || loading}
            variant="default"
          >
            {loading ? 'Compressing...' : 'Compress Image'}
          </Button>
        </form>
      </div>

      {result && (
        <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Compression Results</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2 relative min-h-60">
              <div className="relative w-full h-60">
                <Image 
                  src={result.url} 
                  alt="Compressed" 
                  fill
                  className="object-contain rounded" 
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Original size:</span>
                  <span className="font-medium">{result.originalSize}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Compressed size:</span>
                  <span className="font-medium">{result.size}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Reduction:</span>
                  <span className="font-medium text-primary">{result.compressionRatio}%</span>
                </li>
              </ul>
              
              <Button asChild className="w-full mt-4" variant="outline">
                <a href={result.url} download={result.name}>
                  Download
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
