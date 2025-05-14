import { test, expect, devices } from '@playwright/test';
import { TopPage } from '../pages/top-page';

test.use({ ...devices['iPhone 14'], viewport: { width: 390, height: 844 } });

test('loads site on iPhone Safari (WebKit emulation)', async ({ page }) => {
  const topPage = new TopPage(page);

  await topPage.goto();
  await topPage.verifyTopBannerIsVisible();
  
  await expect(page.getByText('踏み出す一歩未来の選択')).toBeVisible();
});

test.use({ ...devices['Pixel 5'] });

test('loads site on Android Chrome (Chromium emulation)', async ({ page }) => {
  const topPage = new TopPage(page);
  
  await topPage.goto();
  await topPage.verifyTopBannerIsVisible();
});
