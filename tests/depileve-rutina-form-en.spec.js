import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(90000);
  await page.goto('https://depileve.com/contact/');
  await page.getByRole('textbox', { name: 'Your name' }).click();
  await page.getByRole('textbox', { name: 'Your name' }).fill('yann');
  await page.getByRole('textbox', { name: 'Your email' }).click();
  await page.getByRole('textbox', { name: 'Your email' }).fill('emial@gmail.com');
  await page.getByRole('combobox').selectOption('Bangladesh');
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('subject');
  await page.getByRole('textbox', { name: 'Your message (optional)' }).click();
  await page.getByRole('textbox', { name: 'Your message (optional)' }).fill('this is a test');
  await page.getByRole('checkbox', { name: 'I have read and accepted the' }).check();
  await page.getByRole('checkbox', { name: 'I consent to my data being' }).check();
  await page.getByRole('textbox', { name: 'Your email' }).dblclick();
  await page.getByRole('textbox', { name: 'Your email' }).fill('');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
});