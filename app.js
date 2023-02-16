const express=require("express");
const bodyParser=require("body-parser");
var fs=require("fs");
const app=express();

app.use(bodyParser.urlencoded(
    {extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/"+"index.html")
 });
 app.get("/login.html",function(req,res){
    res.sendFile(__dirname+"/"+"login.html")
 });
 app.get("/new",function(req,res){
    var userid=req.query.id;
    var password=req.query.pass;
    if(userid === '16389' && password ==='19bit038')
    res.sendFile(__dirname+"/"+"sample.html")
    else alert("enter corect password and username");
 });
 app.get("/add.html",function(req,res){
    res.sendFile(__dirname+"/"+"add.html")
 });
 app.get("/getinfo.html",function(req,res){
    res.sendFile(__dirname+"/"+"getinfo.html")
 });
 app.get("/delete.html",function(req,res){
    res.sendFile(__dirname+"/"+"delete.html")
 });
 app.get("/show.html",function(req,res){
    res.sendFile(__dirname+"/"+"show.html")
 });

/* app.post("/login",function(req,res){
     
     var password=mamsapuram;
     if(username==password){
        res.sendFile(__dirname+"/"+"sample.html");
     }
     else{
         res.write("404,error");
     }
    fs.readFile("users.json","utf8",function(err,data){
    });
    });*/

 app.post("/home",function(req,res){
    var username=req.body.username;
    var dob=req.body.dob;
    var obj={};
    var key=req.body.userid;
    var newuser={
        "name":username,
        "dob":dob
    }
    obj[key]=newuser;

    fs.readFile("users.json","utf8",function(err,data){
        data=JSON.parse(data);
        data[key]=obj[key];
        var updateuser= JSON.stringify(data);
        fs.writeFile("users.json",updateuser,function(err){
            res.end(JSON.stringify(data));
        });
        });
 });
app.post("/particularuser",function(req,res){
    fs.readFile("users.json","utf8",function(err,data){
        var users=JSON.parse(data);
        var user=users[req.body.urid];
        
        res.end(JSON.stringify(user));
    });
});
app.post("/deleteuser",function(req,res){
    fs.readFile("users.json","utf8",function(err,data){
        data=JSON.parse(data);
        delete data [req.body.uid];
      
        res.end(JSON.stringify(data));
        var updateuser=JSON.stringify(data);
    fs.writeFile("users.json",updateuser,function(err){
        res.end(JSON.stringify(data));
    });
    });
});
app.get("/showuser",function(req,res){
    fs.readFile("users.json","utf8",function(err,data){
       
        res.end(data);
});
});
app.listen(3000);
console.log("server running localhost 3000");