import { chromium } from '@playwright/test'
import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60 * 10000);

BeforeAll(async () => {
  global.browser = await chromium.launch({
    headless: false,
  });
});

AfterAll(async () => {
  await global.browser.close();
});

Before(async () => {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async () => {
  await global.page.close();
});
