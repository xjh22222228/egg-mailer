'use strict';

const mock = require('egg-mock');
const request = require('supertest');

describe('test/nodemailer test', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-mailer',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('test', () => {
    return request(app.callback()).get('/').expect(200)
      .expect('hi, mailer');
  });
});
