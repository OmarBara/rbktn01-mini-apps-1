const server = require('../server.js')
console.log('app')

// function jsonParser(jsonObj) {
// 	var results = [];
// 	for (var key in jsonObj) {
// 		if (!Array.isArray(jsonObj[key])) {
// 			results.push(jsonObj[key]);
// 		}
// 	}
// 	if (jsonObj.children) {
// 		for (var i = 0; i < jsonObj.children.length; i++) {
// 			var childResult = jsonParser(jsonObj.children[i]);
// 			results = results.concat(childResult);
// 		}
// 	}
//   results = 'firstName,lastName,county,city,role,sales \n'+results.join(',');
//   return results
// }

var createJson = function(e) {
  e.preventDefault();
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