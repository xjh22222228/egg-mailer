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

  it('test mailer sendMail function', () => {
    assert.ok(app.mailer.sendMail, 'sendMail 方法不存在');
  });

  it('test mailer sendMail mail', async () => {
    const res = await app.mailer.sendMail({
      to: 'bar@example.com, baz@example.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    });
    const getRes = app.mailer.nodemailer.getTestMessageUrl(res);
    assert.ok(res, 'send email 结果错误');
    assert.ok(getRes, '结果抓取失败');
  });
});
