# annotate-webpack-plugin

A webpack plugin for adding document annotations

[中文文档](./README_CN.md)

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

The following comments will appear in the packaged file

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

> content: An object that represents the annotation

> options: An object that represents how to annotated

The following properties are acceptable for `options`

| key        | value         | description                                                             |
| ---------- | ------------- | ----------------------------------------------------------------------- |
| include    | Array<String> | Assign the file that to need annotated                                  |
| exclude    | Array<String> | Assign the file that not to need annotated                              |
| hideUpdate | Boolean       | Assign whether to hide `update`, is invalid when `content` has `update` |
