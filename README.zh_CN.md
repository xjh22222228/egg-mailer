# egg-mailer

此插件基于 [nodemailer](https://github.com/nodemailer/nodemailer) 实现一个简单的配置封装，具体使用方法你还需要阅读 [nodemailer](https://github.com/nodemailer/nodemailer) 的文档。


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



## 开启插件

```js
// config/plugin.js
exports.mailer = {
  enable: true,
  package: 'egg-mailer',
};
```

## 配置

```js
// {app_root}/config/config.default.js
exports.mailer = {
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user, // 用户名
    pass: testAccount.pass  // 密码
  }
};
```

## 使用场景
```js
// app/controller/home.js
class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // 同步
    await app.mailer.send({
      from: '"Fred Foo 👻" <foo@example.com>', // 发件人地址, [可选] 默认为用户名
      to: "bar@example.com, baz@example.com",  // 接收人名单
      subject: "Hello ✔",                      // 主题
      text: "Hello world?",                    // 文本内容
      html: "<b>Hello world?</b>"              // html body
    });
    // 异步
    app.mailer.send({
      from: '"Fred Foo 👻" <foo@example.com>',
      // 支持数组 ['bar@example.com', 'baz@example.com']
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

## 详细配置

请到 [nodemailer](https://nodemailer.com/about/) 查看详细配置项说明。


## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
