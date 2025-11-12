import { test ,expect } from '@playwright/test';
import testData from '../Data/testData.json';
import { Loginpage } from '../pages/LoginPage';

test('login using data from JSON', async ({page}) =>{
    const loginpage=new Loginpage(page);
    await page.goto('https://demoqa.com/login');

    const user = testData.validUser.username;
    const pass = testData.validUser.password;

    await loginpage.login(user,pass)
    await expect(page.locator("//label[@id=''userName-value']")).toBeVisible();
} )