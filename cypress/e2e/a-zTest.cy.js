/// <reference types="Cypress" />

import newInterfaceTest from '../support/pages/interfaceTests';

describe('Sorted A to Z', () => {

  it('Select de filter sort a to z and compare if the items are in the right order', () => {

    newInterfaceTest.login()
    newInterfaceTest.sortedAtoZ()

});
    
})
