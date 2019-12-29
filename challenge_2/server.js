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
  // console.log(JSON.stringify(req.body))
  var recived = req.body[0].value
  // console.log(recived,'recicedd')

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
  console.log('------------------------first')
  var parsedRecived = JSON.parse(recived)
  // console.log(parsedRecs)
  // console.log('------------------------////////////////////')
  console.log(JSON.parse(recived), 'parese')
  // console.log(JSON.stringify(recived),'stringyfy')
var pars = jsonParser(parsedRecived)
  // res.send(JSON.stringify(recived))
  res.send({pars:pars})
  // res.end(201)
});
app.listen(port, () => console.log(`app listening on port ${port}!`))

