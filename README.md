# login

> A Vue + element UI project

## module

>登录模块，忘记密码， 新用户注册

### 第一次提交

1. element UI组件：input输入框（通用，密码），drawer抽屉
2. vuex：存储用户的账号，密码，手机号（技术不太成熟）
3. router：目前只有一个页面

### 第二次提交

1. 登录页背景换成了背景图
2. 改变了elementui的主题色
3. 完善了各种校验
4. 改变了弹窗样式

### 第三次提交

添加了一个公共方法，弹出窗，因为复用几率很大，所以做了一个公共方法，目前没有找到其他方法，暂时这样，后期可以继续改进

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
