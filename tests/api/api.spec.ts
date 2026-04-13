import { expect, test } from '@playwright/test';

test.describe('REST API coverage', () => {
  test('returns health status', async ({ request }) => {
    const response = await request.get('/api/health');
    expect(response.ok()).toBeTruthy();

    const payload = await response.json();
    expect(payload).toEqual({
      status: 'ok',
      service: 'shopsmart-demo',
    });
  });

  test('returns the product catalog', async ({ request }) => {
    const response = await request.get('/api/products');
    expect(response.ok()).toBeTruthy();

    const payload = await response.json();
    expect(payload.products).toHaveLength(3);
    expect(payload.products[0]).toMatchObject({
      id: 1,
      name: 'Noise-Canceling Headphones',
      price: 35,
    });
  });

  test('allows valid login', async ({ request }) => {
    const response = await request.post('/api/login', {
      data: {
        username: 'admin@demo.test',
        password: 'password123',
      },
    });

    expect(response.status()).toBe(200);

    const payload = await response.json();
    expect(payload.user).toMatchObject({
      name: 'QA Admin',
      role: 'automation-engineer',
    });
    expect(payload.token).toBeTruthy();
  });

  test('rejects missing credentials', async ({ request }) => {
    const response = await request.post('/api/login', {
      data: {
        username: '',
        password: '',
      },
    });

    expect(response.status()).toBe(400);

    const payload = await response.json();
    expect(payload.error).toBe('Username and password are required');
  });
});
