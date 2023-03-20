let weather = {
    "apiKey": "266ab5e01b102844c2de417b30a72f3b",
    fetchWeather: function (city) {                                          // city is defined
        fetch("https://api.openweathermap.org/data/2.5/weather?q="          // used fetch api 
            + city
            + "&appid="
            + this.apiKey                                                   // define api key to gat information
            + "&units=metric"
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data;                                  //key and value from json file
        const { icon, description } = data.weather[0];              //key and value from json file
        const { temp, humidity } = data.main;                      //key and value from json file
        const { speed } = data.wind                                //key and value from json file

        // console.log(name, icon, description, temp, humidity, speed)     //

 
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".windSpeed").innerText = "Wind Speed : " + speed + "km/hr";

        document.querySelector(".weather").classList.remove("loader")                            // removing loader class

        //document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"  // this will give photo of city
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-name").value);                      // putting value in search bar
    }
}

document.querySelector(".search button").addEventListener("click", function () {                      //searchin from serach bar
    weather.search()
})

document.querySelector(".search-name").addEventListener("keyup", function (event) {                       // using enter key word
    if (event.key == "Enter") {
        weather.search();
    }
})


weather.fetchWeather("pune");