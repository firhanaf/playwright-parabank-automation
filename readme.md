# Playwright ParaBank Automation Suite

A production-grade, highly optimized end-to-end automated testing architecture for the ParaBank banking platform, built using TypeScript and Playwright Test.

## Prerequisites

Before setting up the project, ensure you have the following environments installed locally:
- Node.js v18.0.0 or higher
- NPM v9.0.0 or higher

## Getting Started

1. Clone the repository and navigate to the project root directory.
2. Install the production dependencies and TypeScript engine definitions:
   ```bash
   npm ci
   ```
3. Initialize your local configuration file by copying the environmental template:
   ```bash
   cp .env.example .env
   ```
4. Download the native Chromium browser binaries required for execution:
   ```bash
   npx playwright install chromium
   ```

## Test Execution Scripts

All orchestration commands are managed via NPM scripts. Run them from the root terminal:

- `npm run typecheck` - Validates codebase structural typing integrity without emitting build files.
- `npm run test:e2e` - Executes the automated test suite headlessly inside background worker threads.
- `npm run test:e2e:ui` - Launches the interactive visual Playwright UI Mode Runner panel.
- `npm run test:e2e:headed` - Runs tests visibly directly inside an open desktop browser instance.
- `npm run test:e2e:report` - Serves the locally generated interactive HTML test execution records history.