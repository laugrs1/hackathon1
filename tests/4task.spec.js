import { test, expect } from '@playwright/test';

test('4 task', async ({ page }) => {
  await page.goto('https://jacksonpollock.org/');

  await page.locator('#myCanvas').click({
    position: {
      x: 593,
      y: 531
    }
  });
  await page.locator('#myCanvas').click({
    position: {
      x: 921,
      y: 430
    }
  });
  await page.locator('#myCanvas').click({
    position: {
      x: 656,
      y: 196
    }
  });
  await page.locator('#myCanvas').click({
    position: {
      x: 626,
      y: 194
    }
  });
  await page.locator('#myCanvas').click({
    position: {
      x: 626,
      y: 182
    }
  });
  await page.locator('#myCanvas').click({
    position: {
      x: 384,
      y: 345
    }
  });
  await page.locator('#myCanvas').click({
    position: {
      x: 534,
      y: 547
    }
  });
  await page.locator('#myCanvas').click({
    position: {
      x: 267,
      y: 516
    }
  });
  await page.locator('#myCanvas').click({
    position: {
      x: 483,
      y: 497
    }
  });
  await page.locator('#myCanvas').click({
    position: {
      x: 280,
      y: 240
    }
  });
  await page.locator('#myCanvas').click({
    position: {
      x: 474,
      y: 320
    }
  });
  await page.locator('#myCanvas').click({
    position: {
      x: 897,
      y: 250
    }
  });
  await page.locator('#myCanvas').click({
    position: {
      x: 828,
      y: 531
    }
  });
});