import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    test.setTimeout(240000);
  await page.goto('https://depileve.com/collection/waxes/film-wax/');
  await page.getByRole('main').getByRole('link', { name: 'Waxes' }).click();
  await page.getByRole('link', { name: 'Visit product category Film' }).click();
  await page.getByRole('main').getByRole('link', { name: 'Waxes' }).click();
  await page.getByRole('link', { name: 'Visit product category Strip' }).click();
  await page.getByRole('link', { name: 'Visit product category Roll and Go' }).click();
  await page.locator('#ajax-content-wrap').getByRole('link', { name: 'Strip wax' }).click();
  await page.getByRole('link', { name: 'Visit product category Roll-on' }).click();
  await page.locator('#ajax-content-wrap').getByRole('link', { name: 'Strip wax' }).click();
  await page.getByRole('link', { name: 'Visit product category Strip' }).click();
  await page.getByRole('main').getByRole('link', { name: 'Waxes' }).click();
  await page.getByRole('link', { name: 'Visit product category Traditional wax' }).click();
  await page.getByRole('link', { name: 'Visit product category Bees' }).click();
  await page.getByRole('main').getByRole('link', { name: 'Waxes' }).click();
  await page.getByRole('link', { name: 'Visit product category Traditional wax' }).click();
  await page.getByRole('link', { name: 'Visit product category Bio Wax' }).click();
  await page.getByRole('link', { name: 'Home', exact: true }).click();
});