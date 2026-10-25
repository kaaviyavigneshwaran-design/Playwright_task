import { test, expect } from '../lib/fixtures/demoFixture.ts';
import testData from '../testData/items.json';

test('Add multiple products to cart', async ({
  loginPage,
  productPage,
  page,
}) => {
  await loginPage.navigateToHomePage();

  for (const item of testData.items) {
    await productPage.selectProduct(item.itemName);
    await productPage.addSelectedProductToCart();
    await page.goto('https://www.demoblaze.com/');
  }

  await productPage.navigateToCart();

  for (const item of testData.items) {
    await expect(
      await productPage.isProductDisplayed(item.itemName)
    ).toBeVisible();
  }
});
