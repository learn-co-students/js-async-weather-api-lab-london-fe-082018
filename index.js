const API_KEY = "a1cbc4b45d6e7126f02f6ae69308ceed"
const main = document.getElementById("cityForm")
cityForm.addEventListener('submit', handleFormSubmit())

function handleFormSubmit(event) {
  //handle submit event
    event.preventDefault();
    let city = (event['target'][0]['value'])
    console.log(city)
    fetchCurrentWeather(city)
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  console.log("Im in fetchCurrentWeather")
  let url ='https://api.openweathermap.org/data/2.5/weather?APPID=' + API_KEY + '&q' + city
  console.log (url)
  fetch(url).then((response) => {console.log(response)})
  .then(json => console.log(json));
}

function displayCurrentWeather(json) {
  //render current weather data to the DOM using provided IDs and json from API
  fetch('https://api.openweathermap.org/data/2.5/weather?') + API_KEY
  .then(resp => resp.json())
  .then(json => console.log(json));
}


function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
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

