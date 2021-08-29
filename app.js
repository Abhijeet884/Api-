const express = require("express");
let ejs = require('ejs');
const fetchUrl = require("fetch").fetchUrl;
const { nextTick } = require("process");

const app = express();

app.set("view engine", "ejs");


const url = "https://reqres.in/api/users?page=1";
const url_2 = "https://reqres.in/api/users?page=2";


app.get("/", function(req, res){

 fetchUrl(url, function(err, meta, body){
        if(err){
            console.log(err);
        }else{
            if(body){
                const urlData = JSON.parse(body);
                    const usrData = urlData.data;
                    // console.log(urlData);
                        res.render("index", {page_1: usrData});
                    
                }
            }
    });
});

app.get("/second", function(req, res){
    fetchUrl(url_2, function(err, meta, body){
        if(err){
            console.log(err);
        }else{
            if(body){
                const urlData = JSON.parse(body);
                    const usrData = urlData.data;
                    // console.log(urlData);
                    
                        res.render("second", {page_2: usrData});
                    
                    
                }
            }
    });
})




app.listen(3000, function(){
    console.log("Server is started on the port 3000.");
});


