import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://depileve.com/es/contacto/');
  await page.getByRole('textbox', { name: 'Nombre' }).click();
  await page.getByRole('textbox', { name: 'Nombre' }).fill('nombre yann');
  await page.getByRole('textbox', { name: 'Correo electrónico' }).click();
  await page.getByRole('textbox', { name: 'Correo electrónico' }).fill('ypoirot@biocooperation.org');
  await page.getByRole('combobox').selectOption('Spain');
  await page.getByRole('textbox', { name: 'Asunto' }).click();
  await page.getByRole('textbox', { name: 'Asunto' }).fill('sin asunto');
  await page.getByRole('textbox', { name: 'Mensaje (opcional)' }).click();
  await page.getByRole('textbox', { name: 'Mensaje (opcional)' }).fill('this is a test');
  await page.getByRole('checkbox', { name: 'He leído y acepto la política' }).check();
  await page.getByRole('checkbox', { name: 'Consiento que mis datos sean' }).check();
  await page.getByRole('textbox', { name: 'Correo electrónico' }).dblclick();
  await page.getByRole('textbox', { name: 'Correo electrónico' }).fill('');
});