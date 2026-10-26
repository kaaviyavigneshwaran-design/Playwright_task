
import { test, expect } from '../lib/fixtures/demoFixture.ts';
import testData from '../testData/items.json';

test('Checkout and purchase products', async ({
  loginPage,
  productPage,
  cartPage,
  page,
}) => {
  // Step 1: Open Demoblaze
  await loginPage.navigateToHomePage();

  // Step 2: Add products from JSON
  for (const item of testData.items) {
    await productPage.selectProduct(item.itemName);
    await productPage.addSelectedProductToCart();

    // Return to home page before selecting the next product
    await page.goto(testData.baseUrl);
  }

  // Step 3: Click the Cart icon
  await productPage.navigateToCart();

  // Step 4: Verify products are present
  for (const item of testData.items) {
    await expect(
      cartPage.cartRows.filter({
        has: page.getByRole('cell', {
          name: item.itemName,
          exact: true,
        }),
      }).first()
    ).toBeVisible();
  }

  // Step 5: Open the Place Order modal
  await cartPage.proceedToCheckout();
  await expect(cartPage.orderModal).toBeVisible();

  // Step 6: Fill order details
  await cartPage.fillOrderDetails(
    testData.checkout.name,
    testData.checkout.country,
    testData.checkout.city,
    testData.checkout.card,
    testData.checkout.month,
    testData.checkout.year
  );

  // Step 7: Purchase
  await cartPage.purchaseOrder();

  // Step 8: Verify confirmation
  await expect(cartPage.confirmationMessage).toBeVisible();
  await expect(cartPage.confirmationMessage).toContainText(
    testData.expectedConfirmationMessage
  );

  // Step 9: Close confirmation
  await cartPage.closeConfirmation();
});
