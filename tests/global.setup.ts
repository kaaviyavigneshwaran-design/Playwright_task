import { test as setup, expect } from '@playwright/test';
import { Admin_storageState } from '../playwright.config';
import testData from '../testData/items.json';

setup('Global setup', async ({ page }) => {
  await page.goto(testData.baseUrl);
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill(testData.user.username);
    await page.locator('#loginpassword').click();
    await page.locator('#loginpassword').fill(testData.user.password);
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: `Welcome ${testData.user.username}` })).toBeVisible(); // Verify that the login link is no longer visible after login
    await page.context().storageState({ path: Admin_storageState });
});