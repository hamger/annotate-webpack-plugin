# annotate-webpack-plugin

一个用于添加文档注释的 webpack 插件

[English document](./README.md)

## Install

```bash
npm install annotate-webpack-plugin
```

## Usage

```js
// webpack.config.js
const AnnotatePlugin = require("annotate-webpack-plugin");
module.exports = {
  plugins: [
    new AnnotatePlugin({
      author: "hanger",
      create: "2018/7/9"
    })
  ]
};
```

以下注释会出现在打包后的文件

```js
/**
 * author: hanger
 * create: 2018/7/4
 * update: 2018/7/17
 */
...
```

## Options

`new AnnotatePlugin(content, options)`

> content: 一个对象，表示需要注释的内容

> options: 一个对象，表示插件的配置项

`options`可以接受如下属性：

| key        | value         | description                                                                |
| ---------- | ------------- | -------------------------------------------------------------------------- |
| include    | Array<String> | 规定需要注释的文件，选填                                                   |
| exclude    | Array<String> | 规定不需要注释的文件，选填                                                 |
| hideUpdate | Boolean       | 规定是否隐藏`update`，默认`false`，当`content`有`update`属性时，该选项无效 |

## changelog

### 2018.8.24

> v0.1.7 添加英文文档

> v0.1.6 修复 options 无默认值导致的错误

### 2018.7.18

> v0.1.3 兼容正常不压缩和使用 uglifyjs-webpack-plugin 压缩的情况

### 2018.7.17

> v0.1.2 添加 include、exclude、update 配置

### 2018.7.9

> v0.1.0 初始化项目
