// describe('Notification Message tests', () => {
//     const checkNotification = (expectedMessage) => {
//         cy.get('#flash').then($flash => {
//             if ($flash.text().includes(expectedMessage)) {
//                 cy.log('Found expected message: ${expectedMessage}')
//             } else {
//                 cy.get('p > a').click()
//                 cy.reload()
//                 checkNotification(expectedMessage)
//             }
//         })
//     }
//     beforeEach(() => {
//         cy.visit('/notification_message')
//     })
//     it('Checks that the "Action successful" notification displays on load', () => {
//         cy.get('#flash').contains('Action successful')
//     })
//     it('Clicks the link and checks the notification message until it loads "Action unsuccessful, please try again"', () => {
//         if (cy.get('#flash').should('not.contain','Action unsuccessful, please try again')) {
//             checkNotification('Action unsuccessful, please try again')
//         }
//     })
// })

describe('Notification Message tests', () => {
    const checkNotification = (expectedMessage, attempt = 1) => {
        // Limit the number of attempts to prevent infinite loops
        if (attempt > 10) {
            throw new Error('Exceeded maximum number of attempts to find the expected notification message');
        }

        cy.get('body').then($body => {
            if ($body.find('#flash').length > 0) {
                cy.get('#flash').then($flash => {
                    if ($flash.text().includes(expectedMessage)) {
                        cy.log(`Found expected message: ${expectedMessage}`)
                    } else {
                        cy.get('p > a').click()
                        cy.reload()
                        checkNotification(expectedMessage, attempt + 1)
                    }
                })
            } else {
                cy.get('p > a').click()
                cy.reload()
                checkNotification(expectedMessage, attempt + 1)
            }
        })
    }

    beforeEach(() => {
        cy.visit('/notification_message')
    })

    it('Checks that the "Action successful" notification displays on load', () => {
        cy.get('#flash').contains('Action successful')
    })

    it('Clicks the link and checks the notification message until it loads "Action unsuccessful, please try again"', () => {
        checkNotification('Action unsuccesful, please try again') // (sic) on 'unsuccesful', this is the spelling used in the notification
    })
})
