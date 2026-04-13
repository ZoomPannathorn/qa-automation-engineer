import { expect, test } from '@playwright/test';

async function signIn(page: Parameters<typeof test>[0]['page']) {
  await page.getByLabel('Username').fill('admin@demo.test');
  await page.getByLabel('Password').fill('password123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.locator('#login-status')).toHaveText('Signed in as QA Admin');
}

test.describe('Checkout coverage', () => {
  test('enables checkout only after login and item selection', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('button', { name: 'Proceed to checkout' })).toBeDisabled();

    await page.getByTestId('add-to-cart-1').click();
    await expect(page.getByRole('button', { name: 'Proceed to checkout' })).toBeDisabled();

    await signIn(page);
    await expect(page.getByRole('button', { name: 'Proceed to checkout' })).toBeEnabled();
  });

  test('updates subtotal and item count after adding products', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('add-to-cart-1').click();
    await page.getByTestId('add-to-cart-2').click();

    await expect(page.locator('#item-count')).toHaveText('2');
    await expect(page.locator('#subtotal')).toHaveText('$55.00');
  });

  test.skip('applies free shipping once subtotal reaches $50 @known-defect', async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('add-to-cart-1').click();
    await page.getByTestId('add-to-cart-2').click();

    await expect(page.locator('#shipping')).toHaveText('$0.00');
    await expect(page.locator('#shipping-message')).toHaveText('Free shipping applied.');
  });
});
