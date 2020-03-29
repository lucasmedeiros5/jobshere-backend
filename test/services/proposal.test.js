const assert = require('assert');
const app = require('../../src/app');

describe('\'proposal\' service', () => {
  it('registered the service', () => {
    const service = app.service('proposal');

    assert.ok(service, 'Registered the service');
  });
});
