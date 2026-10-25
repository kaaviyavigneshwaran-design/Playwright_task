import { test, expect } from '../lib/fixtures/demoFixture.ts';

test('Delete one product from cart', async ({
  loginPage,
  cartPage,
  productPage,
  page,
}) => {
  const itemToDelete = 'Nokia lumia 1520';

  await loginPage.navigateToHomePage();
  await productPage.selectProduct(itemToDelete);
  await productPage.addSelectedProductToCart();
  await productPage.navigateToCart();

  const deleteRequest = page.waitForResponse(res => res.url().includes('deleteitem'));
  await cartPage.deleteItem(itemToDelete);

  expect((await deleteRequest).ok()).toBeTruthy();
});