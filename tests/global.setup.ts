import { test as setup, expect } from '@playwright/test';
import { Admin_storageState } from '../playwright.config';

setup('Global setup', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/'); // Replace with the actual URL of the login page
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('kaaviyav');
    await page.locator('#loginpassword').click();
    await page.locator('#loginpassword').fill('kaaviyav');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('link', { name: 'Welcome kaaviyav' })).toBeVisible(); // Verify that the login link is no longer visible after login
    await page.context().storageState({ path: Admin_storageState });
});