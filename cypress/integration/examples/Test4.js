//<reference type="Cypress"/>

describe('verify the alert popup  test suite', function()
{
    it('Verify the text on alert popup ,verify the text on redirected URL and navigate the page (back,previous)', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        // window:alert and => it's resolve the promise (str is to store text)
        cy.on('window.alert',(str)=> {
            {   
                // comparing the alert text string
                expect(str).to.equal('Hello , share this practice page and share your knowledge')
            }
        })

        //Window.confirm is cypress command to hanlde alert popup and it require the resolve the promise so we user => 
        cy.on('window.confirm',(str)=> {
            {   
                //mocha is framework to run these type of command 
                expect(str).to.equal('Hello , Are you sure you want to confirm?')
            }
        })

        //Remove target blank from the button click and remobeAttr is a Jquery function
        //cypress will not the switch the window so we need to remove target blank
        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.wait(2000)
        // verify the page is right or wrong which you redirected 
        // include use to verify the text present on the that open URL 
        cy.url().should('include','rahulshettyacademy')

        // How to navigate back from any page (forward,next,previous)
        cy.go('back')
       
    })
  
} )
