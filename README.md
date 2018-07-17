# annotate-webpack-plugin
a webpack plugin for annotating the code.

## install
```bash
npm install annotate-webpack-plugin
```

## usage
```js
// webpack.config.js
const AnnotatePlugin = require('annotate-webpack-plugin')
module.exports = {
  plugins: [
    new AnnotatePlugin({
      author: 'hanger',
      create: '2018/7/9'
    }, {
      include: ['test.js']
    })
  ]
}
```
打包后的`test.js`头部会写入如下注释：
```js
/**
 * author: hanger
 * create: 2018/7/4
 * update: 2018/7/17
 */
...
```

## option
`new AnnotatePlugin(content, opitons)`

> content 接受一个对象，表示需要注释的内容

> opition 接受一个对象，表示插件配置项

`opition`可以接受如下选项：

key | value | description
-- | -- | -- 
include | Array<String> | 规定需要注释的文件，选填
exclude | Array<String> | 规定不需要注释的文件，选填
update | Boolean | 规定是否显示`update`，默认`true`，当`content`中存在`update`属性时，该选项无效

## changelog
### 2018.7.17
> v0.1.2 添加 include、exclude、update配置

### 2018.7.9
> v0.1.0 初始化项目
