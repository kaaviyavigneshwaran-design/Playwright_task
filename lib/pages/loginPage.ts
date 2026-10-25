
import { Page, Locator } from '@playwright/test';

export default class LoginPage {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly welcomeUser: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = this.page.locator('#login2');
    this.usernameInput = this.page.locator('#loginusername');
    this.passwordInput = this.page.locator('#loginpassword');
    this.loginButton = this.page.getByRole('button', { name: 'Log in' });
    this.welcomeUser = this.page.locator('#nameofuser');
  }

  async navigateToHomePage() {
    await this.page.goto('https://www.demoblaze.com/');
  }

  async openLoginModal() {
    await this.loginLink.click();
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async isWelcomeUserDisplayed(): Promise<Locator> {
    return this.welcomeUser;
  }
}
