import { expect, type Locator, type Page } from '@playwright/test';

export class TopPage {
  readonly page: Page;
  readonly bannerTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bannerTitle = page.getByText('踏み出す一歩未来の選択');
  }

  async goto() {
    await this.page.goto('https://rikon.asahi.com/');
  }

  /**
   * 
   * バナー "踏み出す一歩未来の選択" が表示されているか確認
   */
  async verifyTopBannerIsVisible() {
    await expect(this.bannerTitle).toBeVisible();
  }
}