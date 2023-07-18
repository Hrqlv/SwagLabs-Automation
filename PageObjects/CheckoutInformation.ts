import { Locator, Page } from "@playwright/test";

export class Informations {
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly zipCode: Locator;
  readonly ButtonContinue: Locator;
  readonly ButtonFinish: Locator;

  constructor(page: Page) {
    this.firstName = page.locator("#first-name");
    this.lastName = page.locator("#last-name");
    this.zipCode = page.locator("#postal-code");
    this.ButtonContinue = page.locator("#continue");
    this.ButtonFinish = page.locator("#finish");
  }

  async PutYourInformations(
    firstName: string,
    lastName: string,
    zipCode: string
  ) {
    await this.firstName.type(firstName);
    await this.lastName.type(lastName);
    await this.zipCode.type(zipCode);
  }

  async ClickOnContinue() {
    await this.ButtonContinue.click();
  }

  async ClickOnFinish() {
    await this.ButtonFinish.click();
  }
}
