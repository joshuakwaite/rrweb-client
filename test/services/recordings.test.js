const app = require('../../src/app');

describe('\'recordings\' service', () => {
  it('registered the service', () => {
    const service = app.service('recordings');
    expect(service).toBeTruthy();
  });
});
