'use strict';

const assert = require('assert');
const nodemailer = require('nodemailer');

module.exports = app => {
  app.coreLogger.info('start create mailer');
  app.addSingleton('mailer', createMailer);
};

/**
 * @param  {Object} config   框架处理之后的配置项，如果应用配置了多个实例，会将每一个配置项分别传入并调用多次
 * @param  {Application} app 当前的应用
 * @return {Object}          返回创建的实例
 */
function createMailer(config, app) {
  assert(config);

  const transporter = nodemailer.createTransport(config);
  transporter.send = async data => {
    assert(data && data.to && data.subject && (data.text || data.html));
    Object.assign(data, { from: config.auth.user });
    const res = transporter.sendMail(data);
    return res;
  };

  Object.assign(transporter, { nodemailer });
  app.beforeStart(() => {
    if (transporter.sendMail) {
      app.coreLogger.info('[egg-mailer] init instance success');
    }
  });

  return transporter;
}
