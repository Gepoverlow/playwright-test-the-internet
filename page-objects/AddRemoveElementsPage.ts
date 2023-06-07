import { expect, Locator, Page } from '@playwright/test';

export class AddRemoveElementsPage {

    readonly page: Page;
    readonly buttonAddElement: Locator;
    readonly buttonRemoveElement: Locator;
    readonly containerElements: Locator;

    constructor(page: Page) {

        this.page = page;
        this.buttonAddElement = page.locator('button', { hasText: 'Add Element' })
        this.buttonRemoveElement = page.locator('button', { hasText: 'Delete' })
        this.containerElements = page.locator('#elements')

    }

    async goto() {

        await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    }

    async clickButtonAddElement() {

       await this.buttonAddElement.click()

    }

    async clickButtonRemoveElement() {

       await this.buttonRemoveElement.click()

    }

    async verifyAddElements() {

        await expect(this.containerElements.locator('button', { hasText: 'Delete' })).toBeVisible()

    }

    async verifyRemoveElements() {

        await expect(this.containerElements).toBeEmpty()

    }

}
