console.log(Math.random())
document.write('hello world 333')
const div = document.createElement('div');
div.innerText = 'hello webpack'
document.body.appendChild(div)

// 关键先生，如果不加这里浏览器会刷新
if (module.hot) {
  module.hot.accept()
}
