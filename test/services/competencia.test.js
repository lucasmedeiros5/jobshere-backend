const assert = require('assert');
const app = require('../../src/app');

describe('\'competencia\' service', () => {
  it('registered the service', () => {
    const service = app.service('competencia');

    assert.ok(service, 'Registered the service');
  });
});
