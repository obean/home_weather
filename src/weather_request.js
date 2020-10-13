
var local_forecast = $.get(("http://api.openweathermap.org/data/2.5/forecast?q=Guildford&units=metric&cnt=3&appid=" + OPEN_WEATHER_API), function(weather){ return weather})
// 16f42bf1b7c2d1ff6c5fba304885dc11
var local_json = JSON.parse(local_forecast.toString())
class addWeatherData{

  static addNewHtml(id, htmlToAdd) { 
   var myDiv = document.getElementById(id)
   myDiv.innerHTML = "<div> " + htmlToAdd + "</div>"
  }

  static addLocalTemperature() {
   this.addNewHtml("localTemp", local_forecast.responseJSON.list[0].main.temp
    )
  }

}
addWeatherData.addLocalTemperature()
