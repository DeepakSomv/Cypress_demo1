//<reference type="Cypress"/>



describe('How to get attri value and how to act upon it & visit method will not allow to open new domain url ', function()
{
    it('verify the button click to open child window ', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")



    cy.get('#opentab').then(function(e1)
    {
        const url=e1.prop('href')
        cy.visit(url)
    
    })

    })
  
} )
