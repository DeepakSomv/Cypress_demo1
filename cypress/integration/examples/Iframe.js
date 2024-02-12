//<Reference types="Cypress" />
//<Reference types="cypress-iframe" />
import 'cypress-iframe'


describe('How to handle iframe ', function()
{
    it('verify the iframe page redirection and count the pricing box ', function()

    {
        cy.visit(Cypress.env('url')+"AutomationPractice/")
        cy.frameLoaded("#courses-iframe")

        //eq menthod use to navigate on index like 0,1,2,3...
        cy.iframe().find("a[href*='mentorship']").eq(0).click();

        // TC: to verify whether 2 price box availble or not
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
    })
})