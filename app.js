'use strict';
const nodemailer = require('./lib/load');

module.exports = app => {
  if (app.config.mailer) nodemailer(app);
};
