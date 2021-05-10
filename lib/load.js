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
  transporter.send = handleSendMail;

  app.beforeStart(() => {
    if (transporter.sendMail && transporter.send) {
      app.coreLogger.info('[egg-mailer] init instance success');
    }
  });

  return transporter;
}

async function handleSendMail(data) {
  const { app, config } = this;
  if (!app.mailer || typeof app.mailer.sendMail !== 'function') {
    app.coreLogger.error(
      '[egg-mailer] mailer instance does not exist or sendMail is not function'
    );
    return;
  }

  const defaultData = Object.assign(
    {},
    {
      from: config.mailer && config.mailer.auth && config.mailer.auth.user,
    },
    data
  );

  if (Array.isArray(defaultData.to)) {
    defaultData.to = defaultData.to.join();
  }

  const result = await app.mailer.sendMail(defaultData);

  return result;
}
