
class newApiCall {

    newApiTest() {

      cy.request('GET', 'https://api.publicapis.org/entries')
      .then((response) => {

        expect(response.status).to.eq(200);

        const responseBody = response.body;

        const authObjects = responseBody.entries.filter(
          (entry) => entry.Category === 'Authentication & Authorization'
        );

        expect(authObjects.length).to.be.greaterThan(0);

        cy.log('Objects found with the property "Category: Authentication & Authorization":');
        authObjects.forEach((obj) => {
          cy.log(JSON.stringify(obj, null, 2));
        });

        cy.log(`Number of objects found: ${authObjects.length}`);
      });
    }
}

export default new newApiCall();