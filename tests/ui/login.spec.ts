import { expect, test } from '@playwright/test';

test.describe('Login flow', () => {
  test('allows a valid user to sign in', async ({ page }) => {
    await page.goto('/');

    await page.getByLabel('Username').fill('admin@demo.test');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.locator('#login-status')).toHaveText('Signed in as QA Admin');
  });

  test('shows an error for invalid credentials', async ({ page }) => {
    await page.goto('/');

    await page.getByLabel('Username').fill('admin@demo.test');
    await page.getByLabel('Password').fill('wrong-password');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.locator('#login-status')).toHaveText('Invalid credentials');
  });
});
