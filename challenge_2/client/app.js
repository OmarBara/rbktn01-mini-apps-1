// const server = require('../server.js')
// const html = require('index.html')
console.log('app')
// var jquery = require("jquery")
// var $ = require("jquery")
$('p').append('<h>hello</h>')
var createJson = function(e) {
  // console.log(e)
  // e.preventDefault();
  console.log('createJson----------- ')
  var formData = JSON.stringify($("#myform").serializeArray());

  $.ajax({
    type: "POST",
    url: "/",
    data: formData,
    success: function(){
      console.log('Ajax was sent')
    },
    dataType: "json",
    contentType : "application/json"
  });
}
module.exports = createJson