const express = require('express')
const app = express()
var path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const port = 3000
const ObjectsToCsv = require('objects-to-csv');


app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});
app.post('/',function(req,res) {
  // console.log(JSON.stringify(req.body))
  var recived = req.body.data
  console.log(recived)

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
  var paesedRecived = JSON.parse(recived)
  console.log(paesedRecived)
  console.log('------------------------////////////////////')
  // console.log(JSON.parse(jsonParser(recived)))

  // res.send(JSON.parse(jsonParser(recived)))
  res.send(jsonParser(paesedRecived))
});
app.listen(port, () => console.log(`app listening on port ${port}!`))

