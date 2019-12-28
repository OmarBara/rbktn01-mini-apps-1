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
  var recived = req.body
  console.log(recived)

  function jsonParser(jsonObj) {
    var results = [];
    for (var key in jsonObj) {
      if (!Array.isArray(jsonObj[key])) {
        results.push(jsonObj[key]);
      }
    }
    if (jsonObj.children) {
      for (var i = 0; i < jsonObj.children.length; i++) {
        var childResult = jsonParser(jsonObj.children[i]);
        results = results.concat(childResult);
      }
    }
    results = 'firstName,lastName,county,city,role,sales \n'+results.join(',');
    return results
  }

  console.log(JSON.parse(jsonParser(recived)))

  res.send(JSON.parse(jsonParser(recived)))
});

app.listen(port, () => console.log(`app listening on port ${port}!`))

