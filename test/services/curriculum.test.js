const assert = require('assert');
const app = require('../../src/app');

describe('\'curriculum\' service', () => {
  it('registered the service', () => {
    const service = app.service('curriculum');

    assert.ok(service, 'Registered the service');
  });
});
