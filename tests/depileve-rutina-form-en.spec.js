import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://depileve.com/contact/');
  await page.getByRole('textbox', { name: 'Your name' }).click();
  await page.getByRole('textbox', { name: 'Your name' }).fill('biocooperation test');
  await page.getByRole('textbox', { name: 'Your email' }).click();
  await page.getByRole('textbox', { name: 'Your email' }).fill('ypoirot@biocooperation.org');
  await page.getByRole('combobox').selectOption('Korea South');
  await page.getByRole('combobox').selectOption('Korea North');
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('testing');
  await page.getByRole('textbox', { name: 'Your message (optional)' }).click();
  await page.getByRole('textbox', { name: 'Your message (optional)' }).fill('this is a test');
  await page.getByRole('checkbox', { name: 'I have read and accepted the' }).check();
  await page.getByRole('checkbox', { name: 'I consent to my data being' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
});