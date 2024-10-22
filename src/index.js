function getWeather(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let temperature = response.data.temperature.current;
  let currentCityElement = document.querySelector("#current-city");

  currentCityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);   
}


function searchCity(city) {
  let apiKey = "o6076tb5be09f4cf54c1a43aae6217c5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getWeather);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input"); 
  
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Johannesburg");