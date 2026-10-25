
import { Page, Locator } from '@playwright/test';

export default class CartPage {
  readonly page: Page;
  readonly cartRows: Locator;
  readonly totalPrice: Locator;
  readonly placeOrderButton: Locator;
  readonly orderModal: Locator;
  readonly nameInput: Locator;
  readonly countryInput: Locator;
  readonly cityInput: Locator;
  readonly cardInput: Locator;
  readonly monthInput: Locator;
  readonly yearInput: Locator;
  readonly purchaseButton: Locator;
  readonly confirmationMessage: Locator;
  readonly deleteButtons: Locator;
  readonly cartProductNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartRows = this.page.locator('#tbodyid tr');
    this.totalPrice = this.page.locator('#totalp');
    this.placeOrderButton = this.page.getByRole('button', { name: 'Place Order' });
    this.orderModal = this.page.locator('#orderModal');
    this.nameInput = this.page.locator('#name');
    this.countryInput = this.page.locator('#country');
    this.cityInput = this.page.locator('#city');
    this.cardInput = this.page.locator('#card');
    this.monthInput = this.page.locator('#month');
    this.yearInput = this.page.locator('#year');
    this.purchaseButton = this.page.getByRole('button', { name: 'Purchase' });
    this.confirmationMessage = this.page.locator('.sweet-alert');
    this.deleteButtons = this.page.locator('#tbodyid tr a');
    this.cartProductNames = this.page.locator('#tbodyid tr td:nth-child(2)');
  }

  async proceedToCheckout() {
    await this.placeOrderButton.click();
  }

  async fillOrderDetails(
    name: string,
    country: string,
    city: string,
    card: string,
    month: string,
    year: string
  ) {
    await this.nameInput.fill(name);
    await this.countryInput.fill(country);
    await this.cityInput.fill(city);
    await this.cardInput.fill(card);
    await this.monthInput.fill(month);
    await this.yearInput.fill(year);
  }

  async purchaseOrder() {
    await this.purchaseButton.click();
  }

  async closeConfirmation() {
    await this.confirmationMessage.getByRole('button', { name: 'OK' }).click();
  }
  async deleteItem(itemName: string) {
  const row = this.cartRows.filter({
    has: this.page.getByRole('cell', { name: itemName, exact: true })
  });

  await row.first().getByRole('link', { name: 'Delete' }).click();
}

async isItemDisplayed(itemName: string): Promise<boolean> {
  const product = this.cartProductNames.filter({
    hasText: itemName
  });

  return await product.count() > 0;
}
}
