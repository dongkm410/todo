console.log('weather');

const weather = document.querySelector('.weather');
const APP_ID = '883acb9721508ce3f0e8a841bfdb33aa';

function getWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`;
  fetch(url)
    .then(res => res.json())
    // .then(data => {
    //   weather.innerText = `${data.main.temp}℃, ${data.name}`;
    // });
    //매개변수가 하나일 때는 괄호를 생략
    //코드가 한줄이면 { }생략가능
    .then(data => (weather.innerText = `${data.main.temp}℃, ${data.name}`));
}

function geoError() {
  console.log('위치정보를 허용하지 않았습니다.');
}

function saveCoords(coords) {
  //   localStorage.setItem('coords', coords);
  localStorage.setItem('coords', JSON.stringify(coords));
}

function geoSucces(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat, lon);

  const coords = {
    latitude: lat,
    longitude: lon,
  };

  saveCoords(coords);
  getWeather(lat, lon);
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(geoSucces, geoError);
}

function loadCoords() {
  const localCoords = localStorage.getItem('coords');
  console.log(loadCoords);

  if (localCoords === null) {
    askCoords();
  } else {
    const parsedCoords = JSON.parse(localCoords);
    getWeather(localCoords.latitude, localStorage.longitude);
  }
}

function init() {
  askCoords();
}

init();
