const { test, expect } = require('@playwright/test');

test('Successful login to SauceDemo', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://www.saucedemo.com/');

  // Element mapping
  const usernameField = page.locator('#user-name');
  const passwordField = page.locator('#password');
  const loginButton = page.locator('#login-button');

  // Fill and submit
  await usernameField.fill('standard_user');
  await passwordField.fill('secret_sauce');
  await page.waitForTimeout(3000);
  await loginButton.click();

  // Validate successful login
  await expect(page.locator('.title')).toHaveText('Products');
  await page.waitForTimeout(3000);
});