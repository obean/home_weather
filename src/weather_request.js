
var local_forecast = $.get(("https://api.openweathermap.org/data/2.5/onecall?lat=51.3002&lon=0.4933&appid=" + OPEN_WEATHER_API), function(weather){ return weather})
var local_forecast2 = $.get(("http://api.openweathermap.org/data/2.5/weather?q=London&appid=" + OPEN_WEATHER_API), function(weather){ return weather})

//var local_json = local_forecast.toString()
class addWeatherData{

  static addNewHtml(id, htmlToAdd) { 
   var myDiv = document.getElementById(id)
   myDiv.innerHTML = "<div> " + htmlToAdd + "</div>"

  }
  static parsePrecip (data) {
    var chanceOfRain = "false"
    var timeRain = null
    for(let i = 0; i <= 60; i++){
      if(data[i].precipitation < 0){
        chanceOfRain = "true"
        if(chanceOfRain == null){
          timeRain = data[i].dt
        }
      }
      return [chanceOfRain, timeRain]
    }
    return [chanceOfRain, timeRain]
  }
  

  // static addLocalTemperature() {
  //  this.addNewHtml("localTemp", local_forecast.responseJSON.list[0].main.temp
  //   )
  // }

}
// addWeatherData.addLocalTemperature()
// console.log(local_forecast)
// Thermostat.prototype = {
//   getCurrentTemperature: function(callback) {
//     $.get('/temperature', function(res) {
//       var data = JSON.parse(res)
//       callback(data);
//     });
//   }
$(document).ready(function () {
// {$.get("http://api.openweathermap.org/data/2.5/forecast?q=Guildford&units=metric&cnt=3&appid=" + OPEN_WEATHER_API), function(weather){
//  console.log(weather.responseJSON)
// $('#locale').text(weather.responseJSON.city.name)}
// $.get("http://api.openweathermap.org/data/2.5/forecast?q=Guildford&units=metric&cnt=3&appid" + OPEN_WEATHER_API, function (weather)
// {// {console.log(weather)
$('#locale').text(weather.list[0].main.temp)})//.main.temp-273.15))})
$.get("http://api.openweathermap.org/data/2.5/onecall?lat=51.3002&lon=0.4933&appid=" + OPEN_WEATHER_API, function (weather){
  console.log(weather)
$('#forecast').text(weather.current.weather[0].description)  
$('#precip').text(addWeatherData.parsePrecip(weather.minutely))
})
// })
// $.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=16f42bf1b7c2d1ff6c5fba304885dc11", function (weather)
//     {$('#locale').text(Math.round(weather.main.temp-273.15))})
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}