console.log('app')
$('p').append('<h>hello java</h>')


$("#myform").submit(function(event){
  event.preventDefault();
  console.log('ajax trigerd')

  var formData = JSON.stringify($("#myform").serializeArray());
  $.ajax({
  type: "POST",
  url: "/",
  data: formData,
  success: function(data){
    alert('ajax')
    // console.log(data.pars)
    appednJson(data.pars)
  },
  dataType: "json",
  contentType : "application/json"
})
})

var appednJson =function(data) {
  $('p').append(`<p>${data}</p>`)
}