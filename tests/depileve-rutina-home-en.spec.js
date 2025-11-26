import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://depileve.com/');
  await page.getByRole('link', { name: 'Waxing Academy' }).click();
  await page.getByRole('link', { name: 'Our Story' }).click();
});