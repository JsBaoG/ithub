//分离 把app.js 中所有路由都写在router.js

// 1.引入express
const express = require('express');
// 2.创建一个路由容器
let router = express.Router();
let index = require('./controllers/index');
let user = require('./controllers/user');
// 3.创建路由表
router.get('/', index.showIndex);
router.get('/signin', user.showSignin)
        .post('/signin', user.handleSignin)
        .get('/signup', user.showSignup)
        .post('/signup', user.handleSignin)
        .post('/signout', user.handleSignout);

// 4.把路由输出
module.exports = router;
// 5.app.js中 把路由加载到app.js




//首页

//
// app.get('/sign',(req,res)=>{
//     res.send('渲染登录页');
// })
//
// app.post('/signin',(req,res)=>{
//     res.send('处理登录请求');
// })
