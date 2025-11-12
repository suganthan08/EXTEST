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
}