const chai = require('chai');
const numeros = require('../app/numeros');

var assert = chai.assert;

describe('TDD de Operações com numeros', () => {
  it('Teste: deve verificar se numero é divisivel', () => {
    assert.equal(numeros.eDivisivel(6, 2), true);
  });

});
