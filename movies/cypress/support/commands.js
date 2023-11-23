Cypress.Commands.add('requestMovies', (url, variableName) => {
    cy.request(url)
        .its("body")
        .then(response => {
            cy.wrap(response.results).as(variableName);
        });
});