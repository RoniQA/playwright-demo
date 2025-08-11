const { test, expect } = require('@playwright/test');

test('Login com sucesso no SauceDemo', async ({ page }) => {
  // Acessa a página
  await page.goto('https://www.saucedemo.com/');

  // Mapeamento de elementos
  const campoUsuario = page.locator('#user-name');
  const campoSenha = page.locator('#password');
  const botaoLogin = page.locator('#login-button');

  // Preenche e envia
  await campoUsuario.fill('standard_user');
  await campoSenha.fill('secret_sauce');
  await botaoLogin.click();

  // Valida se entrou
  await expect(page.locator('.title')).toHaveText('Products');
});