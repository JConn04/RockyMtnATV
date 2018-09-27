var testData = require('../test-assets/testData')
var searchItem = require('../test-assets/searchItem')
var signIn = require('../test-assets/signIn')
var addToCart = require('../test-assets/addToCart')
var checkout = require('../test-assets/checkout')
var RockyMtn = ''

module.exports = {
    beforeEach: browser => {
        RockyMtn = browser.page.rockyTest(),
            RockyMtn.navigate()

    },

    after: browser => {
        browser.end()
    },

    'Sign in to account': browser => {
        //https://dmutah.atlassian.net/browse/Q7JC-68
        testData.signIn.forEach(test => {
            signIn(RockyMtn, test)
        })

    },

    'Search Item': browser => {
        //https://dmutah.atlassian.net/browse/Q7JC-69
        testData.searchItem.forEach(test => {
            searchItem(RockyMtn, test)
        })

    },

    'Add to cart': browser => {
        //https://dmutah.atlassian.net/browse/Q7JC-70
        testData.addToCart.forEach(test => {
            addToCart(RockyMtn, test)
        })
    },

    'Checkout': browser => {
        // https://dmutah.atlassian.net/browse/Q7JC-74
        testData.checkout.forEach(test => {
        checkout(RockyMtn, test)
        })
    }
       
}