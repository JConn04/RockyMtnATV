module.exports = (pageObjects, entries) => {
    pageObjects
        .click('@Login')
        .setValue('@Username', entries.Username)
        .click('@Password')
        .setValue('@Password', entries.Password)
        .click('@loginBtn')
        .expect.element('@Result4').to.be.visible
}