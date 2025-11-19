import { Page } from "@playwright/test";

export class Loginpage{
    constructor (private page:Page) {}

    private usernameField = this.page.locator("//input[@id='userName']");
    private passwordField = this.page.locator("//input[@id='passwor']");
    private loginButton = this.page.locator("//button[@id='login']");

    async login(username:string,password:string){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();



        
    }
    const ERROR_MESSAGES: Record<string, string> = {
  invalid_username: "Invalid username or password.",
  invalid_password: "Invalid username or password.",
  blank_username: "Username is required",
  blank_password: "Password is required",
  blank_fields: "Username and password are required",
  locked_account: "Account locked or disabled",
};

import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login test', async ({ page }) => {
  await page.goto('https://example.com/login');

  const login = new LoginPage(page);

  await login.login('admin', 'secret123');
});


}