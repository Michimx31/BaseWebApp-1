$(document).ready(function(){
  getWeather();
})

var key = "caa6fca84a5e70fc39bdd359b1bf7ddb";

function getWeather(searchQuery){
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+"&units=imperial&appid="+key;

    $(".city").text("");
    $(".temp").text("");

  $.ajax(url,{success: function(data){
    console.log(data);
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
  }, error: function(error){
    $(".error-message").text("An error occured");
  }})

} 

function searchWeather(){
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}