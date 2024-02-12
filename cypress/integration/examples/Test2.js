//<reference type="Cypress"/>

describe('verify the search and click on specific element', function()
{
    it('verify the search function , cart, checkout button click event', function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca');

        cy.wait(2000)

        // selenium get hit url in browser, cypress get acts like find element of selenium
       
        //parent child chaining 
        //use alias as command to allocate the locator to common variable name (.products to ProductLocator and use it with @)
        cy.get('.products').as('ProductLocator')
 
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
       cy.get('.cart-icon > img').click()
       cy.contains('PROCEED TO CHECKOUT').click()
       cy.contains('Place Order').click()

    } )
  
} )
