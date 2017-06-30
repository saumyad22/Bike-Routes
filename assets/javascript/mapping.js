$(document).ready(function () {
$("#submit").on("click", function(){

 event.preventDefault();

 var destination = $("#destination").val().trim();
 var origin = $("#origin").val().trim();
 // var time = $("#time").val().trim();
 var queryURL = 
 "https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination + "&key=AIzaSyA0oMhk60GOJSoK46J8f0dAwghkBwgThl0";

 // "https://maps.googleapis.com/maps/api/directions/json?&mode=BICYCLING&origin=sunnyvale&destination=cupertino&departure_time=" + time +  "&key=AIzaSyA0oMhk60GOJSoK46J8f0dAwghkBwgThl0"

  console.log(queryURL);
  $.ajax({
    url : queryURL,
    data : {
     'latlng' : '37.4224553,-122.0870678' 
   },
    method : "GET",
    dataType: "jsonp"
     
  }).done(function(response){
   console.log("done : "+ response);

  $('#map').html(response)



  })

});
});