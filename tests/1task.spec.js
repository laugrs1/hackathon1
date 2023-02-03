import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://mikeleshtembari.github.io/jumping-frogs/');

  await page.locator('span:nth-child(3) > img').click();
  await page.locator('.pink > img').first().click();
  await page.locator('span:nth-child(6) > img').click();
  await page.locator('span:nth-child(4) > img').click();
  await page.locator('span:nth-child(2) > img').click();
  await page.locator('img').first().click();
  await page.locator('.pink > img').first().click();
  await page.locator('span:nth-child(5) > img').click();
  await page.locator('span:nth-child(7) > img').click();
  await page.locator('span:nth-child(6) > img').click();
  await page.locator('span:nth-child(4) > img').click();
  await page.locator('.green > img').first().click();
  await page.locator('span:nth-child(3) > img').click();
  await page.locator('span:nth-child(5) > img').click();
  await page.locator('.green > img').first().click();
});
