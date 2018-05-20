var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;



let http = require('http')
let fs = require('fs')
let urlLib = require('url');
let querystring = require('querystring')
let sql = {};
http.createServer((req,res)=>{
    if(req.url != '/favicon.ico'){
        let str = "";
        req.on('data',(chunk)=>{
            str += chunk;
        });

        req.on('end',function(){
            if(req.url.indexOf('ajx') != -1){
                checkAjax(req,res,str);
            }else{
                getstatic("./www",req,res)
            }
        })
    }

}).listen(8080)
function checkAjax(req,res,str){
    let post = querystring.parse(str);
    let get = urlLib.parse(req.url,true).query;

    let data = get.act? get:post;
    switch(data.act){
        case 'login':
            if(sql[data.username]){
                if(data.password == sql[data.username]){
                    res.write("登陆成功")
                }else{
                    res.write("用户名或者密码有误")
                }
            }else{
                res.write("用户名不存在，请注册")
            }
            break;

        case 'reg':
            if(sql[data.username]){
                res.write("用户名存在了")
            }else{
                sql[data.username] = data.password;
            }
            break;

        default:
            res.write("错误的请求")
    }
    console.log(sql)
    res.end();

}
function getstatic(target,req,res){
    let path = req.url == '/'? '/index.html':req.url;
    fs.readFile(target + path , function(err,data){
        if(err){
            fs.readFile(target + '/error.html',function(err,data){
                res.write(data);
                res.end();
            })
        }else{
            res.write(data);
            res.end();
        }
    });
}





router.get('/', function(req, res, next) {
    //console.log('list');
    //根据req -> 兜库mongodb -> send

    //1.创建客户端
    mongoCt.connect('mongodb://127.0.0.1:27017', (err, client) => {
        if (!err) {
            let db = client.db('react'); //返回库对象
            let index = db.collection('list1'); //返回集合(表)

            index.find({}).toArray((err, doc) => {
                console.log(typeof doc);
                res.send(doc)
            });
        }
    });

});
module.exports = router