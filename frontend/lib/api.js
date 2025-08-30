/**
 * API utilities for making requests to the backend
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

/**
 * General fetch wrapper with error handling
 */
export async function fetchAPI(endpoint, options = {}) {
  const url = `${API_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({
        error: `HTTP error ${response.status}`
      }));
      throw new Error(error.error || error.message || `HTTP error ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
}

/**
 * Upload a file to the specified endpoint
 */
export async function uploadFile(endpoint, file, formData) {
  const data = new FormData();
  data.append('image', file);

  // Add additional form fields if provided
  if (formData) {
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
  }

  return fetchAPI(endpoint, {
    method: 'POST',
    body: data,
  });
}

/**
 * Compress an image with specified options
 */
export async function compressImage(file, options = {}) {
  const { quality = 80, format = 'auto' } = options;

  return uploadFile('/api/v1/compress/image', file, {
    quality,
    format,
    ...(options.maxWidth && { maxWidth: options.maxWidth }),
    ...(options.maxHeight && { maxHeight: options.maxHeight }),
  });
}
