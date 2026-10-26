import { test, expect } from '../lib/fixtures/demoFixture.ts';
import testData from '../testData/items.json';

test('Delete one product from cart', async ({
  loginPage,
  cartPage,
  productPage,
  page,
}) => {
  const itemToDelete = testData.itemToDelete;

  await loginPage.navigateToHomePage();
  await productPage.selectProduct(itemToDelete);
  await productPage.addSelectedProductToCart();
  await productPage.navigateToCart();

  const deleteRequest = page.waitForResponse(res => res.url().includes('deleteitem'));
  await cartPage.deleteItem(itemToDelete);

  expect((await deleteRequest).ok()).toBeTruthy();
});