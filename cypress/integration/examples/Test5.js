//<reference type="Cypress"/>

describe('Verify the price of python course test suite', function()
{
    it('25 price verify for python course', function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //$el= for every array iteration store 
        //index= it will be 0 on first iteratrion and goes till last array count 

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

            const text = $el.text()

            if(text.includes("Python"))
            {   
                // .then method use to resolve promise becoz .next is not a cypress command it's jquery command so we have to use then keyword to make this continue to resolve promise(sequance)
                //.eq is use to jump on array index number 
                // .next JQ command use to find immediate next column (here we user to find price column to verify the price)
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    const pricetext= price.text()
                    expect(pricetext).to.equal('25')
                })
            }
        })
    })
  
} )
