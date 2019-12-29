const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const port = 3000
const ObjectsToCsv = require('objects-to-csv');
app.use(express.static(__dirname + '/client'))

//get defult page
app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});


app.post('/',function(req,res) {
  var recived = req.body[0].value

  //convert json to csv format
  function jsonParser(msg) {
    var results = [];
    for (var key in msg) {
      if (!Array.isArray(msg[key])) {
        results.push(msg[key]);
      }
    }
    if (msg.children) {
      for (var i = 0; i < msg.children.length; i++) {
        var childResult = jsonParser(msg.children[i]);
        results = results.concat(childResult);
      }
    }
    results = 'firstName,lastName,county,city,role,sales \n'+results.join(',');
    return results
  }

  var parsedRecived = JSON.parse(recived)
  // console.log(JSON.parse(recived), 'parese')
var pars = jsonParser(parsedRecived)
  res.send({pars:pars})
  // res.end(201)
});
app.listen(port, () => console.log(`app listening on port ${port}!`))

