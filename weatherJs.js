const url = "https://api.openweathermap.org/data/2.5/";
const api = "3b0fc365fb35e44f1fe0e774539a2719";

const setQuery = (e) => {
    if (e.keyCode == "13") {
        getResult();
    }
}

const getResult = () => {
    if (cityInfo.value != "") {
        let query = `${url}weather?q=${cityInfo.value}&appid=${api}&units=metric&lang=tr`;
        fetch(query)
            .then(weather => {
                return weather.json()
            })
            .then(displayResult)
    }
}

const setDescriptionImage = (weatherState) => {
    const weather_state = document.querySelector(".weather-state");
    switch (weatherState) {
        case "açık":
            weather_state.innerHTML = `<img src="Img/animated/day.svg" alt="">`;
            document.querySelector(".weather-comments").innerHTML = "Not: Hava güneşli güneşin tadını çıkarın.";
            break;
        case "kapalı":
            weather_state.innerHTML = `<img src="Img/animated/cloudy.svg" alt="">`;
            document.querySelector(".weather-comments").innerHTML = "Not: Hava kapalı kalın bir şey giymenizi öneririm.";
            break;
        case "hafif kar yağışlı":
            weather_state.innerHTML = `<img src="Img/animated/snowy-4.svg" alt="">`;
            document.querySelector(".weather-comments").innerHTML = "Not: Çıkmanızı önermem sırılsıklam olursunuz vallahi.";
            break;
        case "kar yağışlı":
            weather_state.innerHTML = `<img src="Img/animated/snowy-5.svg" alt="">`;
            document.querySelector(".weather-comments").innerHTML = "Not: çıkarken bastığınız yerlere dikkat edin kaygan olabilir.";
            break;
        case "parçalı bulutlu":
            weather_state.innerHTML = `<img src="Img/animated/cloudy-day-1.svg" alt="">`;
            document.querySelector(".weather-comments").innerHTML = "Not: Hava kapalı kalın bir şey giymenizi öneririm.";
            break;
        case "parçalı az bulutlu":
            weather_state.innerHTML = `<img src="Img/animated/cloudy-day-1.svg" alt="">`;
            document.querySelector(".weather-comments").innerHTML = "Not: Hava kapalı kalın bir şey giymenizi öneririm.";
            break;

        default:
            weather_state.innerHTML = `<img src="Img/animated/day.svg" alt="">`;
            console.log("hatas");
            break;
    }
    document.querySelector(".weather-comments").style.display="flex";
}

const displayResult = (result) => {
    document.querySelector(".location").innerHTML = `<h2>${result.name}, ${result.sys.country}</h2>`;
    document.querySelector(".temp").innerHTML = `${result.main.temp}°C `;
    document.querySelector(".desc").innerHTML = `${result.weather[0].description}`.toLocaleUpperCase();
    setDescriptionImage(result.weather[0].description);
    document.querySelector(".min-max").innerHTML = `${result.main.temp_min}°C / ${result.main.temp_max}°C`;
};

const cityInfo = document.getElementById("cityInfo");
cityInfo.addEventListener("keypress", setQuery);