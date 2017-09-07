**本项目不再维护，正在开发整套系统**

# Vue Blog admin 管理后台系统





## 技术栈
```
Vue2.0         # https://cn.vuejs.org/v2/guide/
Vuex           # 状态共享
VueRouter      # Vue 路由
Sass           # 目前最火的CSS预处理器
Animat.css     # CSS动画库
ES6            # ES6是目前的趋势
Webpack        # 构建打包工具
Element-UI     # PC-UI组件库
axios          # Promise HTTP请求库
vue-simplemde  # Markdown 编辑器。 后续要换一个。
Echarts        # 图表




```
## 屌丝之路， 带你逆袭
+ 打算写一个博客系统。 所以就抽点时间先把后台给搞了。由于后台系统给自己用。本项目用的**Chrome浏览器**开发。 貌似主流浏览器都能支持。比如css只加了-webkit-前缀， 功能呢目前就这么多，后续会增加。 PC端和后端到时候会分享。

+ 目前很多后台系统逐渐开始构建SPA，优势：体验好，只需刷新一次页面。如果你的系统还
是传统开发模式， 建议改用SPA。

+ **项目用到SASS预处理器**， 不管你是用less还是stylus还是sass。很多同学不知道用css处理器到底有什么优势？ 在这里我就分享给大家： 方便维护、效率高。如果你的项目目前只加了-webkit-前缀， 哪一天突然又想支持firefox/opera 怎么办？难道你一个一个去加么？可以用变量名去声明，比如很多组件都要统一颜色。那么你是不是来回复制粘贴呢？哪一天颜色又改了呢，成本是不是大了？ 其实还有很多好玩的，不一一介绍了，还在用css文件写的同学赶快来逆袭。

+ **使用axios的好处**，有的同学为了使用ajax去引用jQuery，导致项目又增大。 axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，它本身具有以下特征：

 ```
1. 从浏览器中创建 XMLHttpRequest
2. 从 node.js 发出 http 请求
3. 支持 Promise API
4. 拦截请求和响应
5. 转换请求和响应数据
6. 取消请求
7. 自动转换JSON数据
8. 客户端支持防止 CSRF/XSRF 	
 ```
+ **为什么要用ES6去开发？** 目前很多ES6的特性，Chrome/Firefox/Safari 都支持了。 但是有些浏览器还不能够支持。 难道要等所有浏览器支持才用吗？ 还好有强大的Babel转换器帮我们解决这一问题。很多ES6的特性都是ES5的语法糖。 不管是开发还是维护都非常的方便和强大。

+ **SVG iconfont代替img** 建议大家小图标都用iconfont或者svg去代替，好处是iconfont只发送一次http请求减少服务器压力，还是矢量图。 如果是彩色的那就用svg代码，是代码哦。不管是大小还是清晰度都比img有优势。 缺点就是svg 不支持IE6/7/8. 那谁他吗还支持那个？

+ **关于项目其他问题:**  目前遇到一个刺手的问题，当表单自动保存的时候会出现黄色背景， 目前最好的办法是利用transition 去过度背景。 这种方法单页面还是用缺陷的。 至于autocomplete， Chrome早就不支持了。 
路由用到了懒加载，好处是首次加载快。 缺点是当需要加载路由的时候需要去请求js文件，如果很渣渣的服务器就会延迟几百毫秒。 好点的服务器不存在这个问题不用担心。


   





![](https://raw.githubusercontent.com/xjh22222228/vue-blog-admin/master/static/images/preview01.png)

![](https://raw.githubusercontent.com/xjh22222228/vue-blog-admin/master/static/images/preview02.png)


``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8088
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


![](https://raw.githubusercontent.com/xjh22222228/diamonds/master/static/images/pay.jpg)














	
