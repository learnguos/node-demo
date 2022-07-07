// 导入 express
const express = require('express')
// 导入包
const compression = require('compression')
// 创建 web 服务器
const app = express()
// 在const app = express(); 新增下面代码
// 启用中间件，一定要把这行代码，写到静态资源托管之前。
app.use(compression())
// 使用express第三方中间件 托管静态资源
app.use(express.static('./dist'))
// 启动 web 服务器
app.listen(8001, () => {
  console.log('web server running at http://127.0.0.1:8001')
})
