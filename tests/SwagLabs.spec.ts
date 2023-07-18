import { test, expect } from "@playwright/test";
import { Login } from "../PageObjects/Login";
import { Cart } from "../PageObjects/AddToCart";
import { Informations } from "../PageObjects/CheckoutInformation";

test.describe("Swag Labs - Tests", () => {
  const data = require("../DataDriven/dados.json");
  let login: Login;
  let AddCart: Cart;
  let info: Informations;

  test.beforeEach(async ({ page }) => {
    login = new Login(page);
    AddCart = new Cart(page);
    info = new Informations(page);

    await login.visit();
    await login.Login(data.username, data.password);
    await login.ClickToLogin();
  });

  test("Adicionar produtos no carrinho, colocar as informaçoes da compra e finalizar com sucesso!!", async ({
    page,
  }) => {
    await AddCart.ButtonCart();
    await AddCart.SeeToShopping();
    await AddCart.ClickOnChekout();
    await info.PutYourInformations(data.firstname, data.lastname, data.zipcode);
    await info.ClickOnContinue();
    await info.ClickOnFinish();

    const modalMessage = page.locator(".complete-header");
    await expect(modalMessage).toHaveText("Thank you for your order!");
  });
});
