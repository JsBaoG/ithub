// 1.引包
let express = require('express');
const router = require('./router');
let app = express();

app.use(router);

// app.listen(3000,()=>{
//     console.log('localhost3000');
// })
