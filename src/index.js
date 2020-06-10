import icon from './result_icon_fail.png'

const sum = require('./sum')

// 这是webpack的默认入口
console.log('hello world!')
console.log('3 + 5 = ' + sum(3, 5))

const img = new Image()
img.src = icon;
document.querySelector("#app").append(img)
