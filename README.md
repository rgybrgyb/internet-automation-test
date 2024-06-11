# internet-automation-test
Cypress Test Automation suite for The Internet by streamlabs - https://the-internet.herokuapp.com/

This repo contains tests executed across the vast majority of the 42 pages on the site, which each demonstrate a common website functionality.

## Installation
1. Clone the repository:

2. Install dependencies:
   Running this suite requires Cypress, which has Node.js as a dependency. 
   Full Cypress dependency details can be found here - https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements
   Node installation - https://nodejs.org/en/download/package-manager

3. Ensure Cypress is installed globally
   Cypress installation instructions can be found here - https://docs.cypress.io/guides/getting-started/installing-cypress
   If npm is installed, use the following command to install Cypress globally.
   ```bash
    npm install -g cypress
    ```

## Usage
1. Open Cypress Test Runner:
    ```bash
    npx cypress open
    ```

2. Run tests headlessly:
    ```bash
    npx cypress run
    ```

3. To run a specific test:
    ```bash
    npx cypress run --spec "cypress/e2e/challengingdom.cy.js"
    ```
    Replacing the directory with the desired test filepath.

## Structure
- `cypress/`
  - `fixtures/`: Contains test data, currently a test gif image.
  - `e2e/`: Contains the test scripts.
  - `downloads/`: Will contain downloaded test files. Relevant tests will delete downloaded files after verifying the download has finished, so should only be populated during operation.
 
## Contact
rgybrgybrgyb@gmail.com

2024
