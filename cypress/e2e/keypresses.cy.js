// describe('Key Presses tests', () => {
//     beforeEach(() => {
//         cy.visit('/key_presses')
//     })
//     it('Inputs a test value and asserts that the value is set correctly', () => {
//         const testValue = 'fdchvghcvhc\'' // Change test value here to appropriate term
//         cy.get('input[type="text"]').type(testValue).trigger('change')
//         cy.get('#result').contains(testValue.charAt(testValue.length -1).toUpperCase()) // Page displays last character as uppercase in results section
//     })
// })

describe('Key Presses tests', () => {
    beforeEach(() => {
        cy.visit('/key_presses')
    })

    it('Inputs a test value and asserts that the value is set correctly', () => {
        const testValue = "fdchvghcvhc" // Change test value here to appropriate term
        const specialKeys = {
            'Shift': 'SHIFT',
            'Control': 'CONTROL',
            'Alt': 'ALT',
            'Meta': 'WIN',
            'Escape': 'ESCAPE',
            'ArrowLeft': 'LEFT',
            'ArrowUp': 'UP',
            'ArrowRight': 'RIGHT',
            'ArrowDown': 'DOWN',
            'Backspace': 'BACK_SPACE',
            'Tab': 'TAB',
            'Enter': 'ENTER',
            ' ': 'SPACE',
            '!': 'EXCLAMATION_MARK',
            '@': 'AT',
            '#': 'HASH',
            '$': 'DOLLAR',
            '%': 'PERCENT',
            '^': 'CARET',
            '&': 'AMPERSAND',
            '*': 'ASTERISK',
            '(': 'LEFT_PARENTHESIS',
            ')': 'RIGHT_PARENTHESIS',
            '-': '', 
            '_': 'UNDERSCORE',
            '=': 'EQUALS',
            '+': 'PLUS',
            '[': 'LEFT_BRACKET',
            ']': 'RIGHT_BRACKET',
            '{': 'OPEN_BRACKET',
            '}': 'CLOSE_BRACKET',
            '\\': 'BACKSLASH',
            '|': 'PIPE',
            ';': 'SEMICOLON',
            ':': 'COLON',
            '\'': 'APOSTROPHE',
            '"': 'QUOTE',
            ',': 'COMMA',
            '.': 'PERIOD',
            '/': 'SLASH',
            '<': 'LESS_THAN',
            '>': 'GREATER_THAN',
            '?': 'QUESTION_MARK'
        }

        cy.get('input[type="text"]').type(testValue).trigger('change')
        cy.get('#result').invoke('text').then(resultText => {
            const lastChar = testValue.charAt(testValue.length - 1)
            const expectedText = specialKeys[lastChar] !== undefined ? specialKeys[lastChar] : lastChar.toUpperCase()

            if (expectedText === '') {
                expect(resultText.trim()).to.equal('You entered:')
            } else {
                expect(resultText.trim()).to.equal(`You entered: ${expectedText}`)
            }
        })
    })
})
