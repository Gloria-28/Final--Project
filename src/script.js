





function displayForecast(response){
   let forecast = response.data.daily;
    let forecastElement = document.querySelector("#forecast");

   let  forecastHTML = `<div class="row">`;
   forecast.forEach(function(forecastDay, index) {
if (index < 6){
   
    forecastHTML = 
    forecastHTML +
     `
      <div class="col-2">
            <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        ${index}
            <img
             src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="" 
            width="36"
            /> 
            <div class="weather-forecast-temperatures">
      <span class="weather-forecast-temperature-mix">${Math.round(forecastDay.temp.max)}°
      </span>
    <span class="weather-forecast-temperature-min">${Math.round(forecastDay.temp.min)}°
     </span>
             
        </div>
     </div>
    `;
    }
    });
     
    
    forecastHTML = forecastHTML + `</div>`;
    forecastElement.innerHTML = forecastHTML; 
}

function displayTemperature(response) {
    
   console.log(response);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
     let descriptionElement = document.querySelector("#description");
      let humidityElement = document.querySelector("#humidity");
      let windElement = document.querySelector("#wind");
      let dateElement = document.querySelector("#date");
      let iconElement = document.querySelector("#icon");

celsiusTemperature = response.data.main.temp;

    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round (response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

iconElement.setAttribute("alt", response.data.weather[0].description);

getForecast(response.data.coord);
}

function search(city){

let apiKey="11af10924b44b47f1b1d52623ef2ad0b";
let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);

}


function handleSubmit(event){
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
    console.log(cityInputElement.value);
}



let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);


search("New York")

