import { test as teardown, expect } from '@playwright/test';
import testData from '../testData/items.json';

teardown('Logout', async ({ page }) => {
  await page.goto(testData.baseUrl);
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});