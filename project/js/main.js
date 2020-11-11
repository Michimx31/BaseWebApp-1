$(document).ready(function(){
  getWeather();
})

var key = "caa6fca84a5e70fc39bdd359b1bf7ddb";

function getWeather(){
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&appid="+key;

  $.ajax(url,{success: function(data){
    console.log(data);
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);

  }})

}