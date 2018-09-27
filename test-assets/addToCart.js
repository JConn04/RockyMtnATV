module.exports = (pageObjects, entries) => {
    pageObjects
        .click('@Search')
        .setValue('@Search', entries.Search)
        .click('@searchBtn')
        .expect.element('@Result').to.be.visible
    pageObjects
        .click('@Item')
        .expect.element('@Result2').to.be.visible
    pageObjects
        .click('@addCartBtn')
        .waitForElementVisible('@Popup', 5000)
        .click('@Popup')
        .waitForElementNotVisible('@Popup', 5000)
    pageObjects
        .click('@cartBtn')
        .waitForElementVisible('@qtyField', 5000)
        .click('@addQuantity')
        .expect.element('@qtyField').value.to.contain("2")
    pageObjects
        .click('@minusQuantity')
        .expect.element('@qtyField').value.to.contain("1")
    pageObjects
        .click('@Remove')
        .waitForElementVisible('@cartEmpty', 5000)
        
}