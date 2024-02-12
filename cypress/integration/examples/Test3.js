//<reference type="Cypress"/>

describe('verify the html elements ', function()
{
    it('verify the checkbox , dropdown, radio button event', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // checkbox
        //assertion and need to use "be." to verify the beheviour. have. we can use when we compare expected value 
        // if you want to verify multiple should then we can use ".and"
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        // to uncheck the first option1
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        // to check the mnultiple checkbox from all the preset checkboxes 
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //Static Dropdown selection verify 
        cy.get('select').select('Option2').should('have.value','option2')

        // Dynamic dropdown selection verification 
        cy.get('#autocomplete').type('ind')


        // to find specific dropdown value from the suggestion list (by using looping) 
        // .ui-menu-item div= locator of the dropdown and their values , $e1 = elements , index= total values , $list= all value list 
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {

            if($e1.text()=="India")
            {
                $e1.click()
            }

        })
        // to verify the value(India) is properly selected or not (1. perform the actiopn and 2nd verify always)
        cy.get('#autocomplete').should('have.value','India')


        // Verify the text box on Hide and show click 
        // visible , non visible assetion 
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radio button check and verified it's checked or not
        cy.get('[value="radio2"]').check().should('be.checked')

    } )
  
} )
