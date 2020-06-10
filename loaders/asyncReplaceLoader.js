module.exports = function (source) {

  // 告诉webpack，需要处理异步事件
  const callback = this.async();
  // 会等待异步事件处理完成再继续下一个loader
  setTimeout(() => {
    // 异步事件处理完成后，执行callback return结果
    // callback接收四个参数 err, result, sourceMaps, meta
    const res = source.replace('hello', 'hi')
    // console.log(res)
    callback(null, res)
  }, 1000)
}

