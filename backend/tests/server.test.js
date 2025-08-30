const request = require('supertest');
const app = require('../src/server');

describe('FileFlow Backend API', () => {
  test('GET /health should return status ok', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);
    
    expect(response.body.status).toBe('ok');
    expect(response.body.message).toBe('FileFlow Backend API is running');
  });

  test('GET /api/v1 should return API info', async () => {
    const response = await request(app)
      .get('/api/v1')
      .expect(200);
    
    expect(response.body.name).toBe('FileFlow API');
    expect(response.body.version).toBe('1.0.0');
    expect(response.body.endpoints).toBeDefined();
  });

  test('GET /nonexistent should return 404', async () => {
    const response = await request(app)
      .get('/nonexistent')
      .expect(404);
    
    expect(response.body.error).toBe('Route not found');
  });
});