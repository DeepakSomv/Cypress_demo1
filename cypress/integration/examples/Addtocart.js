//<reference type="Cypress"/>
import ProductPage from "./PageObjects/ProductPage"
const productpage= new ProductPage()

describe('Validate the add to cart flow for the input items ', function()
{
    before(function() {

        // Resolve the promise to access the value which fixture return, use then function to resolve the promise.
       cy.fixture('example').then(function(data)
       {
        // We need to specific global variable to access json file data from class everywhere so we have used This keyword to access data globally.
            this.data=data
       })
    })

    it('Verify the product name and add the product based on product title and compare the all product price total(sum) with final total price hit add to cart and confirm the success message ', function()
    {
        const productpage= new ProductPage()
    
        // set env variable and in that you can set url (cypress.config file)
        cy.visit(Cypress.env('url')+"angularpractice/shop")
        productpage.ShopButtonClick().click()

        //set function  in > support > commands.js and use here
        //set the product name attri in the example.json file and use here 
        //for each loop to check all array element for productName and store into the element.
        this.data.productName.forEach(function(element)  {

            //selectProduct will hit the commands.js file and run the function of it.
            cy.selectProduct(element)

        });
        productpage.CheckoutButtonClick().click()

        
        var sum=0
        //We have to use each loop to get the cart value in array , use each loop and get the value in element becuase we want all product amount which is in cart page 
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

            const amount=$el.text()

            // split the text on the based upon the wihte space 
            var result= amount.split(" ")

            // so the amount text is ₹. 50000 > result[0]=₹. and result[1]=50000 so we can use trip command on 1st index of arrow to get the only number as amount
            result= result[1].trim()
            sum= Number(sum)+Number(result)
            
            // Resolve the promise to print the sum value in log to review the sum number once the loop get finished as we are using the JS code in the loop 
        }).then(function()
        {
            cy.log(sum)
        })

        //we have to resolve the promise to get total amount number as we are using js code not a cypress code 
        cy.get('h3 strong').then(function(element)
        {   
            //The text will store in amount
            const totalprice=element.text()
            //it Will split it
            var res= totalprice.split(" ")
            // it will trim so we get the actual total price field value
            var totalinnumbers=res[1].trim()

            // (Assertion) now compare the sum of all product price and total of price match or not 
            expect(Number(totalinnumbers)).to.equal(sum)
        })
        productpage.ClickonChckoutbuttononcart().click()
        productpage.TypeinCountryTextbox()
        productpage.Selectthefirstsuggest().click()
        productpage.ClickonCheckBox().click({force:true})
        productpage.ClickonPurchaseButton().click()
        //productpage.ComparesuccessMessage().should('includes.text','Success! Thank you! Your order will be delivered in next few weeks :-).')

        // Another way to check the text keyword("Success") available in the success message or not 
        //We have to resolve the promise vie .then method and store the text into the element, expect is a assestion to make it true (expect(true).to.be.true)
        cy.get('.alert').then(function(element)
        {   
            // store the actual text into the Actualtext param and use that param into assertion
            const Actualtext=element.text()

            // make the assesrion true if we have Success text availble in the sucess alert message.
            expect(Actualtext.includes("Success")).to.be.true
        })
    })
})