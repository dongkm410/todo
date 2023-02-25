console.log('clock');

const clock = document.querySelector('.clock');

function getTime() {
  //date 객체를 생성
  const now = new Date();
  //now는 date관련된 모든 정보를 담고 있지
  //console.log(now);
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const s = `${sec < 10 ? `0${sec}` : `${sec}`}`;
  const m = `${min < 10 ? `0${min}` : `${min}`}`;
  const h = `${hour < 10 ? `0${hour}` : `${hour}`}`;

  clock.innerHTML = `${h}:${m}:${s}`;
}

function init() {
  getTime();
  //0.5초마다 재실행
  setInterval(getTime, 500);
}

init();
