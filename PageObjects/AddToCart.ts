import { Locator, Page } from "@playwright/test";

export class Cart {
  readonly ButtonCart1: Locator;
  readonly ButtonCart2: Locator;
  readonly Shopping: Locator;
  readonly Checkout: Locator;

  constructor(page: Page) {
    this.ButtonCart1 = page.locator(
      'button[name="add-to-cart-sauce-labs-backpack"]'
    );
    this.ButtonCart2 = page.locator(
      'button[name="add-to-cart-sauce-labs-bike-light"]'
    );
    this.Shopping = page.locator("#shopping_cart_container");
    this.Checkout = page.locator("#checkout");
  }

  async ButtonCart() {
    await this.ButtonCart1.click();
    await this.ButtonCart2.click();
  }

  async SeeToShopping() {
    await this.Shopping.click();
  }

  async ClickOnChekout() {
    await this.Checkout.click();
  }
}
