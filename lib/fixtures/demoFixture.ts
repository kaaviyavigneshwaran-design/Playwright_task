
import { test as BaseTest } from '@playwright/test';
export { expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import CartPage from '../pages/cartPage';
import ProductPage from '../pages/productPage';


type MyPages = {
  loginPage: LoginPage;
  productPage: ProductPage;
  cartPage: CartPage;
};

export const test = BaseTest.extend<MyPages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  }
  
});


