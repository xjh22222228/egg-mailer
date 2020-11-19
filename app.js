'use strict';

const nodemailer = require('nodemailer');

class Email {
  constructor(app) {
    this.app = app;
    this.config = app.config;
    this.handleSendMail = this.handleSendMail.bind(this);
    this.app.mailer = nodemailer.createTransport(this.config.mailer);
    this.app.mailer.send = this.handleSendMail;
  }

  async handleSendMail(data, callback) {
    if (!this.app.mailer || typeof this.app.mailer.sendMail !== 'function') {
      console.log('Mail Delivery Failed, Check the configuration file.');
      return;
    }

    const defaultData = Object.assign({}, {
      from: this.config.mailer && this.config.mailer.auth && this.config.mailer.auth.user,
    }, data);

    if (Array.isArray(defaultData.to)) {
      defaultData.to = defaultData.to.join();
    }

    if (typeof callback === 'function') {
      this.app.mailer.sendMail(defaultData, callback);
      return;
    }

    return new Promise((resolve, reject) => {
      this.app.mailer.sendMail(defaultData, function(err, info) {
        if (err) {
          reject(err);
        }
        resolve(info);
      });
    });
  }
}

module.exports = Email;
