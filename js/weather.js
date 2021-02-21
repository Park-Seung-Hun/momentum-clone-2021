const weatherTemp = document.querySelector(".js-weather__temp");
const weatherPlace = document.querySelector(".js-weather__place");
const icon = document.querySelector(".weather__icon");
const info = document.querySelector(".js-weather__info"),
    span=info.querySelector("span");
const API_KEY ='5e96abfde6f856ec6235306b47811052';
const COORDS = 'coords';
let varNumber=1;

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
        let exampleIcon = {
            '01' : 'fas fa-sun',
            '02' : 'fas fa-cloud-sun',
            '03' : 'fas fa-cloud',
            '04' : 'fas fa-cloud-meatball',
            '09' : 'fas fa-cloud-sun-rain',
            '10' : 'fas fa-cloud-showers-heavy',
            '11' : 'fas fa-poo-storm',
            '13' : 'far fa-snowflake',
            '50' : 'fas fa-smog'
        };
        const temperature = json.main.temp;
        const place = json.name;
        var weatherIcon = (json.weather[0].icon).substr(0,2);

        span.innerHTML = `<i class="${exampleIcon[weatherIcon]}"></i>`;
        const checkTemp = parseInt(temperature);
        if( checkTemp < -10){
            weatherTemp.innerHTML = ` <i class="fas fa-thermometer-empty" style="color: rgba(0,0,255,0.7);"></i> ${temperature}`;
        }
        else if (checkTemp >= -10 && checkTemp < 0){
            weatherTemp.innerHTML = ` <i class="fas fa-thermometer-quarter" style="color: rgba(0,0,255,0.3);"></i> ${temperature}`;
        }
        else if(checkTemp >= 0 && checkTemp < 10){
            weatherTemp.innerHTML = ` <i class="fas fa-thermometer-half"></i> ${temperature}`;
        }
        else if(checkTemp >= 10 && checkTemp < 20){
            weatherTemp.innerHTML = ` <i class="fas fa-thermometer-three-quarters" style="color: rgba(255,0,0,0.3);"></i> ${temperature}`;
        }
        else if(checkTemp >= 20){
            weatherTemp.innerHTML = ` <i class="fas fa-thermometer-three-full" style="color: rgba(255,0,0,0.7);"></i> ${temperature}`;
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
        
        console.log(varNumber);
        varNumber+=1;
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}
function refTime(){
    const refDate=new Date(),
      refMin=refDate.getMinutes(),
      refSec=refDate.getSeconds();
      if(refMin === 0 && refSec==0){
          loadCoords();
          console.log("complete");
      }
}
function init(){
    loadCoords();
    setInterval(refTime,1000);

}

init();