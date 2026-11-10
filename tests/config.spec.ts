import {expect, test} from '@playwright/test';

test('cek landing page', async ({ page }) => {
    await page.goto('index.htm');
    await expect(page).toHaveURL('https://parabank.parasoft.com/parabank/index.htm')
    console.log('URL yang dibuka:', page.url());
    await expect(page.getByRole('img', { name: 'ParaBank' })).toBeVisible();
    await expect(page.getByText('Experience the difference')).toBeVisible();
});