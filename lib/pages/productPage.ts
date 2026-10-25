
import { Page, Locator, expect } from '@playwright/test';

export default class ProductPage {
  readonly page: Page;
  readonly productCards: Locator;
  readonly addToCartButton: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = this.page.locator('.card-title');
    this.addToCartButton = this.page.getByRole('link', { name: 'Add to cart' });
    this.cartLink = this.page.locator('#cartur');
  }

  async selectProduct(productName: string) {
    await this.page.getByRole('link', { name: productName, exact: true }).click();
  }

  async addSelectedProductToCart() {
    const [dialog] = await Promise.all([
      this.page.waitForEvent('dialog'),
      this.addToCartButton.click(),
    ]);
    await dialog.accept();
  }

  async navigateToCart() {
    await this.cartLink.click();
    await expect(this.page).toHaveURL(/cart\.html/);
  }

  async isProductDisplayed(productName: string): Promise<Locator> {
    return this.page.locator('#tbodyid tr').filter({ hasText: productName }).first();
  }

  async deleteProduct(productName: string) {
    const productRow = this.page.locator('#tbodyid tr').filter({
      hasText: productName,
    });

    await productRow.getByRole('link', { name: 'Delete' }).click();
  }
}
