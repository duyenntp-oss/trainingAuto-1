import { test, expect } from '@playwright/test';
import { loginCases } from './data/login-data';

for (const loginData of loginCases) {
  test(`Login - ${loginData.expectedResult}`, async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username', loginData.username);
    await page.fill('#password', loginData.password);
    await page.click('button[type="submit"]');

    const message = page.locator('#flash');

    if (loginData.expectedResult === 'success') {
      await expect(message).toContainText('You logged into a secure area!');
    } else if (loginData.expectedResult === 'invalid-password') {
      await expect(message).toContainText('Your password is invalid!');
    } else {
      await expect(message).toContainText('Your username is invalid!');
    }
  });
}