import { test, expect } from '@playwright/test';

test('Solution to 10 Jumping Frogs Puzzle', async ({ page }) => {
  await page.goto('https://mikeleshtembari.github.io/jumping-frogs/');
  await page.locator('#total_frogs').selectOption('10');

  await page.locator('.pink > img').first().click();
  await page.locator('span:nth-child(5) > img').click();
  await page.locator('span:nth-child(4) > img').click();
  await page.locator('.pink > img').first().click();
  await page.locator('span:nth-child(8) > img').click();
  await page.locator('span:nth-child(9) > img').click();
  await page.locator('span:nth-child(7) > img').click();
  await page.locator('span:nth-child(5) > img').click();
  await page.locator('span:nth-child(3) > img').click();
  await page.locator('span:nth-child(2) > img').click();
  await page.locator('.pink > img').first().click();
  await page.locator('span:nth-child(6) > img').click();
  await page.locator('span:nth-child(8) > img').click();
  await page.locator('span:nth-child(10) > img').click();
  await page.locator('span:nth-child(11) > img').click();
  await page.locator('span:nth-child(9) > img').click();
  await page.locator('span:nth-child(7) > img').click();
  await page.locator('span:nth-child(5) > img').click();
  await page.locator('span:nth-child(3) > img').click();
  await page.locator('img').first().click();
  await page.locator('img').first().click();
  await page.locator('span:nth-child(4) > img').click();
  await page.locator('span:nth-child(6) > img').click();
  await page.locator('span:nth-child(8) > img').click();
  await page.locator('span:nth-child(10) > img').click();
  await page.locator('span:nth-child(9) > img').click();
  await page.locator('span:nth-child(7) > img').click();
  await page.locator('span:nth-child(5) > img').click();
  await page.locator('.green > img').first().click();
  await page.locator('span:nth-child(4) > img').click();
  await page.locator('span:nth-child(6) > img').click();
  await page.locator('span:nth-child(8) > img').click();
  await page.locator('span:nth-child(7) > img').click();
  await page.locator('.green > img').first().click();
  await page.locator('span:nth-child(6) > img').click();
  
  await expect(page.getByText('Game solved')).toBeVisible();
});

