import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/lambda-tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
 
  /* Retry */
  retries:2,
  /*workers*/
  workers: 1,
  /* Reporter */
  reporter: 'html',
  
  /* Shared settings for all the projects below. See https://www.lambdatest.com/selenium-playground/ */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'https://www.lambdatest.com/selenium-playground/',

    /* Collect trace when retrying the failed test. */
    trace:"retain-on-failure",
    screenshot:"only-on-failure",
    video:"retain-on-failure", 
    headless: false,
    actionTimeout: 0,
    colorScheme: 'dark',
  },
  
  timeout: 60*1000,
  expect: {
    // Maximum time expect() should wait for the condition to be met.
    timeout: 10*1000,
    
  },
  
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

  ],
 
});
{
  reporter: {"allure-playwright"};
}

