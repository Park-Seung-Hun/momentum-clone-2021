const weatherTemp = document.querySelector(".js-weather__temp");
const weatherPlace = document.querySelector(".js-weather__place");
const icon = document.querySelector(".weather__icon");
const API_KEY ='a2046dbeadc6151d049fcab99c473914';
const COORDS = 'coords';


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}
function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    }; // 鞍篮 key value老 嫐 历厘 规过
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError(){
    console.log("Cant access geo location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}
function getWeather(lat,lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        var imgURL = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png";
        icon.setAttribute("src", imgURL);

        const checkTemp = parseInt(temperature);
        if( checkTemp < -10){
            weatherTemp.innerHTML = ` <i class="fas fa-thermometer-empty"></i> ${temperature}`;
        }
        else if (checkTemp >= -10 && checkTemp < 0){
            weatherTemp.innerHTML = ` <i class="fas fa-thermometer-quarter"></i> ${temperature}`;
        }
        else if(checkTemp >= 0 && checkTemp < 10){
            weatherTemp.innerHTML = ` <i class="fas fa-thermometer-half"></i> ${temperature}`;
        }
        else if(checkTemp >= 10 && checkTemp < 20){
            weatherTemp.innerHTML = ` <i class="fas fa-thermometer-three-quarters"></i> ${temperature}`;
        }
        else if(checkTemp >= 20){
            weatherTemp.innerHTML = ` <i class="fas fa-thermometer-three-full"></i> ${temperature}`;
        }
        
        weatherPlace.innerText=` ${place}`;
    });
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null ){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();