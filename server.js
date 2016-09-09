var express = require('express');

var app = express();

app.get('/', function(req, res){
   var ipaddress = req.headers['x-forwarded-for'];
   var language = req.headers['accept-language'];
   var lansubstr = language.slice(0,language.indexOf(','));
   var os = req.headers['user-agent'];
   var ossubstr = os.slice(1+os.indexOf('('), os.indexOf(')'));
   var resObj = {"ipaddress": ipaddress, "language": lansubstr, "software": ossubstr};
   
   res.send(JSON.stringify(resObj));
   
    
});

var port = Number(process.env.PORT || 8080);
app.listen(port, function(){
    console.log("check");
});