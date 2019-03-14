function AnnotatePlugin (content = {}, options = {}) {
  this.content = content
  this.options = options
}

AnnotatePlugin.prototype.apply = function (compiler) {
  var self = this
  compiler.plugin('emit', function (compilation, callback) {
    // 获取注释文本
    var annotation = '/**'
    if (self.content) {
      Object.keys(self.content).forEach(key => {
        annotation += '\n * ' + key + ': ' + self.content[key]
      })
      if (!self.content.update && !self.options.hideUpdate) {
        var now = new Date()
        var year = now.getFullYear()
        var month = now.getMonth() + 1
        var day = now.getDate()
        annotation += '\n * update: ' + year + '/' + month + '/' + day
      }
    }
    annotation += '\n */\n'

    // 获取需要注释的文件
    var passFiles = []
    var isInclude =
      self.options && self.options.include && self.options.include.length > 0
    var isExclude =
      self.options && self.options.exclude && self.options.exclude.length > 0

    if (isInclude) {
      var includeArr = []
      self.options.include.forEach(val => {
        includeArr.push(val)
      })
      includeArr = [...new Set(includeArr)]
    }
    if (isExclude) {
      var excludeArr = []
      self.options.exclude.forEach(val => {
        excludeArr.push(val)
      })
      excludeArr = [...new Set(excludeArr)]
    }

    for (var filename in compilation.assets) {
      if (!isInclude && !isExclude) {
        passFiles.push(filename)
      } else if (!isInclude && isExclude) {
        if (excludeArr.indexOf(filename) === -1) passFiles.push(filename)
      } else if (isInclude && !isExclude) {
        if (includeArr.indexOf(filename) > -1) passFiles.push(filename)
      } else {
        if (
          includeArr.indexOf(filename) > -1 &&
          excludeArr.indexOf(filename) === -1
        ) {
          passFiles.push(filename)
        }
      }
    }
    // 遍历所有符合要求的文件，加入自定义注释
    passFiles.forEach(val => {
      var source = compilation.assets[val]
      if (source['_value']) {
        // 使用 uglifyjs-webpack-plugin 压缩的情况
        compilation.assets[val]['_value'] = annotation + source['_value']
      } else {
        // 不压缩的情况
        compilation.assets[val]['_source'].children.unshift(annotation)
      }
    })

    callback()
  })
}

// export default AnnotatePlugin
module.exports = AnnotatePlugin
