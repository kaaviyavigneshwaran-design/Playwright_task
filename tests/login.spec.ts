
import { test, expect } from '../lib/fixtures/demoFixture';

test.describe(' Login', () => {
  test('Verify user can login successfully', async ({loginPage,page,}) => {
    await loginPage.navigateToHomePage();
    await loginPage.openLoginModal();

    await loginPage.login(
      'kaaviyav',
      'kaaviyav'
    );

   await expect(await loginPage.isWelcomeUserDisplayed()).toBeVisible();
  });
});
