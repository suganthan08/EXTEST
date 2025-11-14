import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { getTestData } from '../utils/dataUtils';

test('Sample Advanced Assertion Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // 🔹 Test Data
  const user = getTestData('users.valid.admin');

  // 🔹 Step 1: Go to login page
  await page.goto('https://demoqa.com/login');

  // 🔹 Step 2: Login
  await loginPage.login(user.username, user.password);

  // 🔹 Step 3: Advanced Assertion using BasePage method
  await loginPage.verifyText('#userName-value', user.username);
});
