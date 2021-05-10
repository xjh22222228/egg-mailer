'use strict';

const mock = require('egg-mock');
const request = require('supertest');
const assert = require('assert');

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

  it('test mailer', () => {
    assert.ok(app.mailer, 'mailer 属性不存在');
  });

  it('test mailer send function', () => {
    assert.ok(app.mailer.send, 'send 方法不存在');
  });
});
