
import { test, expect } from '../lib/fixtures/demoFixture';
import testData from '../testData/items.json';

test.describe(' Login', () => {
  test('Verify user can login successfully', async ({loginPage,page,}) => {
    await loginPage.navigateToHomePage();
    await loginPage.openLoginModal();

    await loginPage.login(
      testData.user.username,
      testData.user.password
    );

   await expect(await loginPage.isWelcomeUserDisplayed()).toBeVisible();
  });
});
