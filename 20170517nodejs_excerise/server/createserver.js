/**
 * Created by Administrator on 2017/5/17 0017.
 */
var http=require('http');
var server=http.createServer();
//创建错误报告
server.on('error',function (err) {
    console.log(err);
});
//创建服务监听
server.on('listening',function () {
    console.log('服务开启');
});
//创建用户响应
server.on('request',function (req,res) {
    console.log('有用户访问');
    res.write('欢迎来到该网站');
    res.end();
});
//监听端口
server.listen(8080,'localhost');