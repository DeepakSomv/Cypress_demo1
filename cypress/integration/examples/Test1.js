//<reference type="Cypress"/>

describe('Verify the search', function()
{
    it('Verify the sea', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca');

        cy.wait(2000)

        // selenium get hit url in browser, cypress get acts like find element of selenium
        cy.get('.product:visible').should('have.length',4)
        //parent child chaining 
        //use alias as command to allocate the locator to common variable name (.products to ProductLocator and use it with @)
        cy.get('.products').as('ProductLocator')

        // Assertion
        cy.get('@ProductLocator').find('.product').should('have.length',4)
     
        // print the log in console (devloper tab) after  this line is executed.
        cy.get('@ProductLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
            {

                console.log('dev')

            })
        // looping to find producy name = Cashews - 1 Kg from all product list 
        cy.get('@ProductLocator').find('.product').each(($el, index, $list) => {

           const textveg= $el.find('h4.product-name').text()
           
           if(textveg.includes('Cashews - 1 Kg'))
           {
            cy.wrap($el).find('button').click()
            
           }
        })

        // assertion if logo text match with the expected text 
        cy.get('.brand').should('have.text','GREENKART')

        // print the logo text ( need to use .then as we are using .text and text is not cypress command so it will not excute the code on squnce mananer )
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())
        })
        //cy.logo(logo.text())

    } )
  
} )
