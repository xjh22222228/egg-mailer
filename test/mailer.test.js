'use strict';

const mock = require('egg-mock');

describe('test/mailer.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/mailer-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, mailer')
      .expect(200);
  });
});
