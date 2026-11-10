# Playwright ParaBank Automation Suite

An end-to-end automated testing repository for the ParaBank banking platform, built using TypeScript and Playwright Test. This project is currently in active development.

## Project Status

- [x] Base framework configuration and environmental rules (Fase 1)
- [x] Initial infrastructure smoke test tier
- [ ] Page Object Model implementation (POM) (In Progress)

## Prerequisites

- Node.js v18.0.0 or higher
- NPM v9.0.0 or higher

## Getting Started

1. Clone the repository and navigate to the root directory.
2. Install the clean project environment dependencies:
   ```bash
   npm ci
   ```
3. Create your local environment configuration file:
   ```bash
   cp .env.example .env
   ```
4. Install the required native Chromium test binaries:
   ```bash
   npx playwright install chromium
   ```

## Available Scripts

- `npm run typecheck` - Validates TypeScript structural code integrity without emitting files.
- `npm run test:e2e` - Runs the automated tests headlessly in the background.
- `npm run test:e2e:ui` - Launches the visual interactive Playwright UI Mode interface.
- `npm run test:e2e:report` - Serves the local HTML report containing execution results history.
