var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url ='mongodb://localhost:27017/my_first_data';
var dbname = 'my_first__data';

let db

app.listen(3000,function(){
    console.log("running on port 3000");
    
});

app.route('/Myname').get(function(req, res){
    MongoClient.connect(url, function(err, db){
          
          
        if(err) throw err;
        var dbo = db.db('my_first_data');
         dbo.collection("characters").find().toArray( function(err, result){
           if(err) throw err;
            //console.log(result.name);
             res.send(result);

              //db.close();   
                });

        });
        
    });

