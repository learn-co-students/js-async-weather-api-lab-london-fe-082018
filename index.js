const API_KEY = "a1cbc4b45d6e7126f02f6ae69308ceed"
const main = document.getElementById("cityForm")

function handleFormSubmit(event) {
  //handle submit event
    event.preventDefault();
    let city = (event['target'][0]['value'])
    console.log(city)
    fetchCurrentWeather(city)
    console.log("handleFormSubmit function")
}


function fetchCurrentWeather(city) {
  //fetch current weather based on city
  console.log("Im in fetchCurrentWeather")
  let url ='https://api.openweathermap.org/data/2.5/weather?APPID=' + API_KEY + '&q=' + city
  console.log(url)
  fetch(url).then(response => response.json()).then(json => displayCurrentWeather(json));
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  //Current Temp - temperature.value, Low - temperature.min, High - temperature.max, Humidity - humidity.value, Cloud Cover - clouds.value 
 console.log('This is the function: displayCurrentWeather')
 console.log(json)
 console.log(json['main']['temp'])
 console.log(json['main']['temp_min'])
 console.log(json['main']['temp_max'])
 console.log(json['main']['humidity'])
 console.log(json['clouds']['all'])
document.getElementById("temp").innerHTML = (json['main']['temp']);
document.getElementById("low").innerHTML = (json['main']['temp_min'])
document.getElementById("high").innerHTML = (json['main']['temp_max'])
document.getElementById("humidity").innerHTML = (json['main']['humidity'])
document.getElementById("cloudCover").innerHTML = (json['clouds']['all'])
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  console.log('Im in the fetchFiveDayForecast')
  fetch(url).then(response => response.json()).then(json => displayFiveDayForecast(json));
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  const submit = document.getElementById('cityForm')
  submit.addEventListener('submit', (e) => handleFormSubmit(e))
  //add event listener here for form submission
})

