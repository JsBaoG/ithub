module.exports.showSignin = (req,res) =>{
    res.send('渲染登录页');
}

module.exports.handleSignin = (req,res) =>{
    res.send('处理登录请求');
}
module.exports.showSignup = (req,res) =>{
    res.send('渲染注册页面');
}
module.exports.handleSignin = (req,res) =>{
    res.send('处理注册请求');
}
module.exports.handleSignout = (req,res) =>{
    res.send('处理退出请求');
}
