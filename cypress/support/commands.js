// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('getBySel', (selector, ...args) => {
    const isXpath = selector.startsWith('//') || selector.startsWith('(') || selector.startsWith('/')
    const command = isXpath ? 'xpath' : 'get';
    return cy[command](selector, ...args);
});

Cypress.Commands.add('hold', (time) => {
    if (time > 0) {
        time = time * 1000
        cy.wait(time)
    } else {
        cy.wait(1000)
    }
})

Cypress.Commands.add('saveSeparatedValuesToJson', (selector, fileName) => {
    cy.get(selector).invoke('text').then((text) => {
        // Remove any extra whitespace or newlines
        const value = text.trim();

        // Split the value into an array based on the "SO-" prefix
        const parts = value.split(/(?=SO-\d{9})/).filter(Boolean); // This regex splits on every occurrence of "SO-" followed by digits

        // Create an object with separated data
        const separatedData = {};
        parts.forEach((part, index) => {
            separatedData[`data${index + 1}`] = part;
        });

        // Save the separated data to a JSON file
        cy.writeFile(`cypress/fixtures/${fileName}`, separatedData);
    });
});
