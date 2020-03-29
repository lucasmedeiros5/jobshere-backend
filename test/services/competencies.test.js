const assert = require('assert');
const app = require('../../src/app');

describe('\'competencies\' service', () => {
  it('registered the service', () => {
    const service = app.service('competencies');

    assert.ok(service, 'Registered the service');
  });
});
