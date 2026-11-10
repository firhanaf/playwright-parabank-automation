import {expect, test} from "@playwright/test";

test.describe('Application Integrity Smoke Test', () => {
    test('should successfully load the main landing page structure', async ({ page }) => {
        // Navigate relatively using the default baseURL established in the config file
        await page.goto('index.htm');

        // Verify the runtime URL path conforms to the secure baseline application pattern
        await expect(page).toHaveURL(/\/parabank\/index.htm$/);

        // Ensure core structural elements are visible before letting downstream test steps run
        await expect(page.getByRole('button', { name: 'Log In'})).toBeVisible();
    })
})
