import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const IS_CI = !!process.env.CI;
const RAW_WORKERS = process.env.WORKERS;

function getWorkersValue(): number | string {
  if (IS_CI && !RAW_WORKERS) {
    return 1;
  }

  if (RAW_WORKERS) {
    if (RAW_WORKERS.endsWith('%')) {
      return RAW_WORKERS;
    }

    const parsed = Number(RAW_WORKERS);

    // Strict validation: Must be an integer and greater than 0
    if (!Number.isInteger(parsed) || parsed <= 0) {
      console.warn(`[Playwright Config] Invalid WORKERS="${RAW_WORKERS}". Falling back to 1 worker.`);
      return 1;
    }
    return parsed;
  }

  // Hardcoded to 2 for local execution to prevent overloading the unstable ParaBank demo server
  return 2;
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,

  forbidOnly: IS_CI,
  retries: IS_CI ? 2 : 0,
  workers: getWorkersValue(),

  // --- Tiered Timeouts ---
  globalTimeout: 60 * 60 * 1000,
  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  // --- Reporters Management ---
  reporter: IS_CI
      ? [
        ['list'],
        ['github'],
        ['html', { open: 'never' }]
      ]
      : [
        ['list'],
        ['html', { open: 'never' }] // 'never' prevents the terminal from freezing due to the built-in HTML server
      ],

  // --- Global Actions Configuration ---
  use: {
    baseURL: process.env.BASE_URL || 'https://parabank.parasoft.com/parabank/',

    // Adjusted to 10s based on trace data (±2s load time) to establish a strict fail-fast rule for lagging servers
    actionTimeout: 10000,        // Provides highly specific error logs at the exact failing locator line
    navigationTimeout: 10000,

    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
