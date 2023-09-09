/// <reference types="Cypress" />

import newInterfaceTest from '../support/pages/interfaceTests';

describe('Sorted Z to A', () => {

  it('Select de filter sorted z to a and compare if the itens are in the right order', () => {

    newInterfaceTest.login()
    newInterfaceTest.sortedZtoA()
    
  })


})