
var local_forecast = $.get(("https://api.openweathermap.org/data/2.5/onecall?lat=51.3002&lon=0.4933&appid=" + OPEN_WEATHER_API), function(weather){ return weather})
var local_forecast2 = $.get(("http://api.openweathermap.org/data/2.5/weather?q=London&appid=" + OPEN_WEATHER_API), function(weather){ return weather})

//var local_json = local_forecast.toString()
class addWeatherData{

  static addNewHtml(id, htmlToAdd) { 
   var myDiv = document.getElementById(id)
   myDiv.innerHTML = "<div> " + htmlToAdd + "</div>"

  }
  static parsePrecip (data) {
    var chanceOfRain = false
    var timeRain = null
    for(let i = 0; i < 60; i++){
      
      if(data[i].precipitation > 0){
        chanceOfRain = "true"
        if(timeRain == null){
          
          timeRain = new Date(data[i].dt * 1000)
        }
      }
      // return [chanceOfRain, timeRain]
    }
    return [chanceOfRain , timeRain]
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
  $.get("https://api.sunrise-sunset.org/json?lat=51.2907394&lng=-0.5111766",function(sunrise) {
    console.log(sunrise)
    $('#sunrise').text( sunrise.results.sunrise)
    $('#sunset').text( sunrise.results.sunset)
    $('#daylength').text(sunrise.results.day_length)
    return sunrise
  })
})
$.get("http://api.openweathermap.org/data/2.5/onecall?lat=51.2907394&lon=0.4933&appid=" + OPEN_WEATHER_API, function (weather){
  console.log(weather)
$('#forecast').text(weather.current.weather[0].description) 
$('#weatherIcon').attr('src', "http://openweathermap.org/img/w/" + weather.current.weather[0].icon + ".png")
 hello = weather
$('#precip').text(addWeatherData.parsePrecip(weather.minutely)[0])
if((addWeatherData.parsePrecip(weather.minutely)[0])){


$('#timeRain').text(addWeatherData.parsePrecip(weather.minutely)[1])}
})
// })
// })
// $.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=16f42bf1b7c2d1ff6c5fba304885dc11", function (weather)
//     {$('#locale').text(Math.round(weather.main.temp-273.15))})
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// function in browser to get hours where rain expected below
// for(let i =0; i <= hello.hourly.length-1; i++){
//   if( hello.hourly[i].rain != undefined){
//       console.log(i)}}
// this link says that rain measurements are probably milimiters
//https://www.google.com/search?q=metric+measurement+for+rain&rlz=1C5CHFA_enGB844GB844&oq=metric+measurement+for+rain&aqs=chrome..69i57j0i22i30i457.8263j0j9&sourceid=chrome&ie=UTF-8 