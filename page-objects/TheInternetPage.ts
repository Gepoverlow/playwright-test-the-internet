import { expect, Locator, Page } from '@playwright/test';

export class TheInternetPage {

  readonly page: Page;
  readonly abTestingLink: Locator;
  readonly addRemoveElementsLink: Locator;
  readonly basicAuthLink: Locator;
  readonly brokenImagesLink: Locator;

  constructor(page: Page) {

    this.page = page;
    this.abTestingLink = page.locator('a', { hasText: 'A/B Testing' });
    this.addRemoveElementsLink = page.locator('a', { hasText: 'Add/Remove Elements' });
    this.basicAuthLink = page.locator('a', { hasText: 'Basic Auth' });
    this.brokenImagesLink = page.locator('a', { hasText: 'Broken Images' });

  }

  async goto() {

    await this.page.goto('https://the-internet.herokuapp.com/');

  }

  async clickAbTestingLink() {

    await this.abTestingLink.click()
    
  }

  async verifyAbTestingPage() {

    const regex = new RegExp(`^(A/B Test Control|A/B Test Variation 1)$`);

    await expect(this.page.locator('h3')).toBeVisible()
    await expect(this.page.locator('h3')).toContainText(regex)

  }

  async verifyBasicAuthPage() {

    await expect(this.page.locator('h3', { hasText: 'Basic Auth' })).toBeVisible()

  }


  async clickBasicAuthLink() {

    await this.basicAuthLink.click()

  }

  async completeAlertBoxAndSubmit() {

    this.page.on('dialog', async dialog => {
 
      await expect(dialog.type()).toContain('prompt'); 

      await dialog.accept('admin')

    })

  }

}