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
