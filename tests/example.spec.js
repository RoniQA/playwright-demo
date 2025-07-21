const { test, expect } = require('@playwright/test');

test.use({ headless: false });

test('deve abrir a página inicial do Playwright', async ({ page }) => {
  // Define o tamanho da janela para um valor grande (simulando maximizado)
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Acessa a URL do site do Playwright
  await page.goto('https://playwright.dev');

  // Verifica se o título da página contém "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // Aguarda 5 segundos para visualizar
  await page.waitForTimeout(5000);
});