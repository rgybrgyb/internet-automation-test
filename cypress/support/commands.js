// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Drag Command - https://stackoverflow.com/questions/55361499/how-to-implement-drag-and-drop-in-cypress-test
// Add typings for the custom drag command (Typescript only?)
//    declare :global {
//     namespace Cypress {
//          interface Chainable {
//              drag: (dragSelector: string, dropSelector: string) => Chainable;
//          }
//      }
//  }
// // Finally add the custom command
// Cypress.Commands.add('drag', drag);
require('@4tw/cypress-drag-drop')