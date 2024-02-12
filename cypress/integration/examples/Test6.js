//<reference type="Cypress"/>

describe('Verify the hover event and invisible element ', function()
{
    it('verify the button hover event and click on top text option and url verification ', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


        // how to trigger hover event and verify the text on Url 
        //invoke is use to show the content of menu 
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')

        // mouse over event not supported by cypress we have to use force click Jquery function.
        //force is use to click on specific option even it is hide(handke invisble elements), if you want to force click on first menu without reading all the option (use force directtly without invoke show )
        //cy.contains('Top').click({force:true})

    })
  
} )
