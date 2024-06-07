describe('Frames tests', () => {
    beforeEach(() => {
        cy.visit('nested_frames')
    })
    it('Finds the text "LEFT" in the first frame on the page', () => {
      cy.get('frame[name="frame-top"]').then($topFrame => {
        const topFrameBody = $topFrame[0].contentDocument.body
  
        cy.wrap(topFrameBody).find('frame[name="frame-left"]').then($leftFrame => {
          const leftFrameBody = $leftFrame[0].contentDocument.body
  
          cy.wrap(leftFrameBody).should('contain.text', 'LEFT')
        })
      })
    })
    it('Finds the text "MIDDLE" in the middle frame on the page', () => {
      cy.get('frame[name="frame-top"]').then($topFrame => {
        const topFrameBody = $topFrame[0].contentDocument.body
  
        cy.wrap(topFrameBody).find('frame[name="frame-middle"]').then($middleFrame => {
          const middleFrameBody = $middleFrame[0].contentDocument.body
  
          cy.wrap(middleFrameBody).should('contain.text', 'MIDDLE')
        })
      })
    })
    it('Finds the text "RIGHT" in the right frame on the page', () => {
      cy.get('frame[name="frame-top"]').then($topFrame => {
        const topFrameBody = $topFrame[0].contentDocument.body
  
        cy.wrap(topFrameBody).find('frame[name="frame-right"]').then($rightFrame => {
          const rightFrameBody = $rightFrame[0].contentDocument.body
  
          cy.wrap(rightFrameBody).should('contain.text', 'RIGHT')
        })
      })
    })
    it('Finds the text "BOTTOM" in the bottom frame on the page', () => {
      cy.get('frame[name="frame-bottom"]').then($bottomFrame => {
        const bottomFrameBody = $bottomFrame[0].contentDocument.body
  
        cy.wrap(bottomFrameBody).should('contain.text', 'BOTTOM')
    
      })
    })
})