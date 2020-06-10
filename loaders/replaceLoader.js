// loader不要使用箭头函数，因为内部this会绑定相关属性和方法，使用箭头函数this会指向空对象
module.exports = function (source) {
  const options = this.query;
  // console.log(this.query)  // 可以通过query取到options配置
  // console.log(source)  // 匹配到的文件都会进入此函数，source是当前文件的内容
  return source.replace(options.source, options.target)
}

