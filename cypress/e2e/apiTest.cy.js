/// <reference types="Cypress" />

import newApiCall from '../support/pages/apiTests';

describe('API test in Cypress', () => {

    it('Must find and verify objects with the property "Category: Authentication & Authorization"', () => {

      newApiCall.newApiTest()
      
    });
  });