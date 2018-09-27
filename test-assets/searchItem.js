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
        .click('@Search')
        .setValue('@Search', entries.Search2)
        .expect.element('@Result3').to.be.visible

}