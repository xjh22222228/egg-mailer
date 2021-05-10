# egg-mailer

[nodemailer](https://github.com/nodemailer/nodemailer) plugin for Egg.js.

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-mailer.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-mailer
[travis-image]: https://img.shields.io/travis/eggjs/egg-mailer.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-mailer
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-mailer.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-mailer?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-mailer.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-mailer
[snyk-image]: https://snyk.io/test/npm/egg-mailer/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-mailer
[download-image]: https://img.shields.io/npm/dm/egg-mailer.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-mailer


[README](README.md) | [中文文档](README.zh_CN.md)


## Install

```bash
$ npm i egg-mailer --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.mailer = {
  enable: true,
  package: 'egg-mailer',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.mailer = {
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass  // generated ethereal password
  }
};
```

see [nodemailer](https://nodemailer.com/about/) for more detail.

## Example
```js
// app/controller/home.js
class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // sync
    await app.mailer.send({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address, [options] default to user
      // // Array => ['bar@example.com', 'baz@example.com']
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    });
    // async
    app.mailer.send({
      from: '"Fred Foo 👻" <foo@example.com>',
      // Array => ['bar@example.com', 'baz@example.com']
      to: "bar@example.com, baz@example.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>"
    }, function (err, info) {
      if (err) {
        throw err;
      }
      console.log(info);
    });
    ctx.body = 'hi, mailer';
  }
}
```


## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
