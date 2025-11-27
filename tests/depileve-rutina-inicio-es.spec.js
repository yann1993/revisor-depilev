import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://depileve.com/es/');
  await page.getByRole('link', { name: 'Waxing Academy' }).click();
  await page.getByRole('link', { name: 'Nuestra historia' }).click();
  await page.getByRole('link', { name: 'Contacto' }).click();
});